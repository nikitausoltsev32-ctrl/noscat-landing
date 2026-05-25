'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { submitForm } from '@/lib/actions/submitForm'
import { CAR_BRANDS } from '@/lib/data/cars'

interface RequestFormProps {
  compact?: boolean
  defaultBrand?: string
  defaultModel?: string
}

export default function RequestForm({ compact, defaultBrand, defaultModel }: RequestFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [brand, setBrand] = useState(defaultBrand ?? '')
  const [consent, setConsent] = useState(false)

  const selectedBrand = CAR_BRANDS.find((b) => b.slug === brand)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!consent) {
      setError('Подтвердите согласие на обработку данных')
      return
    }
    setLoading(true)
    setError(null)
    const fd = new FormData(e.currentTarget)
    const result = await submitForm({
      name: fd.get('name') as string,
      phone: fd.get('phone') as string,
      carBrand: fd.get('carBrand') as string,
      carModel: fd.get('carModel') as string,
      comment: fd.get('comment') as string,
      website: fd.get('website') as string,
    })
    setLoading(false)
    if (result.success) {
      setSuccess(true)
    } else {
      setError(result.error)
    }
  }

  const inputCls =
    'w-full px-4 py-3 rounded-btn border border-surface-dark text-white placeholder:text-[#6b7280] text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-150 bg-[#141414]'

  if (success) {
    return (
      <div className="p-6 text-center bg-accent/10 border border-accent/20 rounded-card animate-fade-in-up">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Заявка отправлена</h3>
        <p className="text-sm text-ink-muted">
          Наш специалист свяжется с вами в течение 30 минут в рабочее время.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'space-y-3'}>
        <input name="name" type="text" placeholder="Ваше имя" required className={inputCls} />
        <input name="phone" type="tel" placeholder="+7 (___) ___-__-__" required className={inputCls} />
      </div>
      {/* Honeypot — invisible to real users, bots fill it in */}
      <input name="website" type="text" autoComplete="off" tabIndex={-1} aria-hidden="true" className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none" />

      {!compact && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              name="carBrand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className={inputCls}
            >
              <option value="">Марка автомобиля</option>
              {CAR_BRANDS.map((b) => (
                <option key={b.slug} value={b.slug}>
                  {b.name}
                </option>
              ))}
            </select>

            <select name="carModel" defaultValue={defaultModel ?? ''} className={inputCls}>
              <option value="">Модель</option>
              {selectedBrand?.models.map((m) => (
                <option key={m.slug} value={m.slug}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="comment"
            placeholder="Комментарий (необязательно)"
            rows={3}
            className={inputCls + ' resize-none'}
          />
        </>
      )}

      {/* Consent */}
      <label className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 accent-accent shrink-0"
        />
        <span className="text-xs text-ink-muted leading-relaxed">
          Я согласен с{' '}
          <a href="/privacy" target="_blank" className="underline hover:text-ink">
            политикой конфиденциальности
          </a>{' '}
          и{' '}
          <a href="/data-consent" target="_blank" className="underline hover:text-ink">
            обработкой персональных данных
          </a>
          , в том числе их передачей в AmoCRM (трансграничная передача).
        </span>
      </label>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? 'Отправляем...' : 'Отправить заявку'}
      </button>
    </form>
  )
}
