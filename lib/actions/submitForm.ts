'use server'

import type { FormData } from '@/types'

export type SubmitResult =
  | { success: true }
  | { success: false; error: string }

// ── Simple in-memory rate limiter ────────────────────────────
// Tracks submissions per IP-like key. Resets automatically.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60_000 // 1 minute
const RATE_LIMIT_MAX = 5 // max 5 submissions per window

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(key)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// ── Validation helpers ───────────────────────────────────────
const PHONE_REGEX = /^\+?[78]\d{10}$/
const NAME_MAX_LENGTH = 100
const COMMENT_MAX_LENGTH = 1000

function sanitize(str: string): string {
  return str.trim().replace(/[<>"'&]/g, '')
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '')
  return PHONE_REGEX.test(cleaned)
}

/**
 * Submit lead form data to AmoCRM via API v4.
 *
 * AmoCRM servers may reside outside Russia — transborder personal data transfer.
 * Under Russian 152-FZ this requires explicit informed consent from the user
 * for cross-border transfer. The consent checkbox is present on the form.
 *
 * Required env vars:
 *   AMOCRM_SUBDOMAIN  — your AmoCRM subdomain (e.g. "noskat")
 *   AMOCRM_API_TOKEN   — long-lived API token (Bearer)
 *   AMOCRM_PIPELINE_ID — (optional) pipeline id, defaults to main pipeline
 */
export async function submitForm(data: FormData): Promise<SubmitResult> {
  // ── Rate limiting ───────────────────────────────────────────
  const rateLimitKey = sanitize(data.phone || 'unknown')
  if (isRateLimited(rateLimitKey)) {
    return { success: false, error: 'Слишком много заявок. Попробуйте через минуту.' }
  }

  // ── Honeypot check ──────────────────────────────────────────
  if (data.website) {
    // Bot filled in the hidden field — silently succeed
    return { success: true }
  }

  // ── Validation ──────────────────────────────────────────────
  if (!data.name?.trim() || !data.phone?.trim()) {
    return { success: false, error: 'Заполните имя и телефон' }
  }

  if (data.name.trim().length > NAME_MAX_LENGTH) {
    return { success: false, error: 'Имя слишком длинное' }
  }

  if (!validatePhone(data.phone)) {
    return { success: false, error: 'Введите корректный номер телефона (например, +79001234567)' }
  }

  if (data.comment && data.comment.length > COMMENT_MAX_LENGTH) {
    return { success: false, error: 'Комментарий слишком длинный' }
  }

  // ── Sanitize inputs ─────────────────────────────────────────
  const safeName = sanitize(data.name)
  const safePhone = data.phone.replace(/[\s\-\(\)]/g, '').trim()
  const safeComment = data.comment ? sanitize(data.comment) : undefined
  const safeCarBrand = data.carBrand ? sanitize(data.carBrand) : undefined
  const safeCarModel = data.carModel ? sanitize(data.carModel) : undefined

  const subdomain = process.env.AMOCRM_SUBDOMAIN
  const token = process.env.AMOCRM_API_TOKEN
  const pipelineId = process.env.AMOCRM_PIPELINE_ID
    ? Number(process.env.AMOCRM_PIPELINE_ID)
    : undefined

  // If AmoCRM is not configured, succeed silently (dev mode)
  if (!subdomain || !token) {
    console.warn('[submitForm] AmoCRM not configured. Submission received (data omitted for privacy).')
    return { success: true }
  }

  const baseUrl = `https://${subdomain}.amocrm.ru/api/v4`

  try {
    // ── Step 1: Create contact ───────────────────────────────
    const contactPayload = [
      {
        name: safeName,
        custom_fields_values: [
          {
            field_code: 'PHONE',
            values: [{ value: safePhone, enum_code: 'MOB' }],
          },
        ],
      },
    ]

    const contactRes = await fetch(`${baseUrl}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactPayload),
    })

    if (!contactRes.ok) {
      console.error('[AmoCRM] Contact creation failed:', contactRes.status)
      return { success: false, error: 'Ошибка при отправке заявки. Попробуйте позже.' }
    }

    const contactData = await contactRes.json()
    const contactId = contactData?._embedded?.contacts?.[0]?.id

    // ── Step 2: Create lead ──────────────────────────────────
    const carInfo = [safeCarBrand, safeCarModel].filter(Boolean).join(' / ')
    const leadName = carInfo
      ? `Ноускат: ${carInfo}`
      : `Заявка с сайта — ${safeName}`

    const leadPayload = [
      {
        name: leadName,
        ...(pipelineId ? { pipeline_id: pipelineId } : {}),
        _embedded: {
          ...(contactId
            ? { contacts: [{ id: contactId }] }
            : {}),
        },
      },
    ]

    const leadRes = await fetch(`${baseUrl}/leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadPayload),
    })

    if (!leadRes.ok) {
      console.error('[AmoCRM] Lead creation failed:', leadRes.status)
      return { success: false, error: 'Ошибка при отправке заявки. Попробуйте позже.' }
    }

    const leadData = await leadRes.json()
    const leadId = leadData?._embedded?.leads?.[0]?.id

    // ── Step 3: Add note with comment (if any) ───────────────
    if (safeComment?.trim() && leadId) {
      const notePayload = [
        {
          note_type: 'common',
          params: {
            text: `Комментарий клиента: ${safeComment}\n\nМарка: ${safeCarBrand || '—'}\nМодель: ${safeCarModel || '—'}`,
          },
        },
      ]

      await fetch(`${baseUrl}/leads/${leadId}/notes`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notePayload),
      }).catch((err) => {
        console.error('[AmoCRM] Note creation failed:', err?.message)
      })
    }

    console.log('[submitForm] Lead created:', leadId)
    return { success: true }
  } catch (err) {
    console.error('[AmoCRM] Unexpected error:', (err as Error)?.message)
    return { success: false, error: 'Ошибка соединения. Проверьте интернет и попробуйте ещё раз.' }
  }
}
