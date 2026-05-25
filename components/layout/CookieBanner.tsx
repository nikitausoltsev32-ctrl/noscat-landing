'use client'

import { useState, useEffect } from 'react'
import { initYandexMetrica } from '@/lib/analytics/yandex'
import type { CookieConsent } from '@/types'

const STORAGE_KEY = 'cookie_consent'

function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveConsent(consent: CookieConsent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  if (consent.analytics) initYandexMetrica()
}

export function getCookieConsent(): CookieConsent | null {
  return getStoredConsent()
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [settings, setSettings] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored) {
      setVisible(true)
    } else if (stored.analytics) {
      initYandexMetrica()
    }
  }, [])

  if (!visible) return null

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true })
    setVisible(false)
  }

  const acceptSelected = () => {
    saveConsent({ necessary: true, analytics, marketing: false })
    setVisible(false)
  }

  const rejectAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false })
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-brand-dark text-white rounded-card p-5 shadow-2xl border border-white/10">
          {!settings ? (
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <p className="text-sm text-white/80 flex-1 leading-relaxed">
                Мы используем cookie для улучшения сайта и аналитики.{' '}
                <button
                  onClick={() => setSettings(true)}
                  className="underline text-white/60 hover:text-white transition-colors"
                >
                  Настроить
                </button>
              </p>
              <div className="flex gap-2 shrink-0">
                <button onClick={rejectAll} className="btn-ghost text-white/60 hover:text-white text-xs px-3 py-2">
                  Отклонить
                </button>
                <button onClick={acceptAll} className="btn-primary text-xs px-4 py-2">
                  Принять всё
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm font-medium text-white">Настройки cookie</p>
              <div className="space-y-2.5">
                <label className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Необходимые (всегда включены)</span>
                  <span className="text-white/40 text-xs">Обязательно</span>
                </label>
                <label className="flex items-center justify-between text-sm cursor-pointer">
                  <span className="text-white/80">Аналитика (Яндекс.Метрика)</span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="w-4 h-4 accent-accent"
                  />
                </label>
              </div>
              <div className="flex gap-2 justify-end">
                <button onClick={() => setSettings(false)} className="btn-ghost text-white/60 text-xs px-3 py-2">
                  Назад
                </button>
                <button onClick={acceptSelected} className="btn-primary text-xs px-4 py-2">
                  Сохранить
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
