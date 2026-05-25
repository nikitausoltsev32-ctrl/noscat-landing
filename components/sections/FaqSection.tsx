'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/data/faq'
import Link from 'next/link'

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <span className="accent-bar mx-auto mb-4" />
          <h2 className="section-title mb-3">Частые вопросы</h2>
          <p className="section-sub">Самое важное — коротко и ясно</p>
        </div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="border border-surface-dark rounded-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-surface-alt transition-colors duration-150"
              >
                <span className="text-sm font-medium text-white">{item.question}</span>
                <span
                  className={`shrink-0 w-5 h-5 rounded-full border-2 border-ink-muted flex items-center justify-center text-ink-muted transition-transform duration-200 ${open === i ? 'rotate-45 border-accent text-accent' : ''}`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-ink-muted leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-ink-muted mb-4">Не нашли ответ на свой вопрос?</p>
          <Link href="/request" className="btn-primary">
            Задать вопрос специалисту
          </Link>
        </div>
      </div>
    </section>
  )
}
