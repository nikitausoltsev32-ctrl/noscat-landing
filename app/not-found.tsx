import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: '404 — Страница не найдена' }

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <span
        className="text-[8rem] leading-none text-[#2a2a2a] select-none"
        style={{ fontFamily: 'var(--font-russo)' }}
      >
        404
      </span>
      <h1 className="text-2xl md:text-3xl text-white mb-3 mt-2" style={{ fontFamily: 'var(--font-russo)' }}>
        Страница не найдена
      </h1>
      <p className="text-ink-muted text-base mb-8 max-w-sm">
        Такой страницы не существует или она была удалена.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn-primary">
          На главную
        </Link>
        <Link href="/request" className="btn-outline">
          Оставить заявку
        </Link>
      </div>
    </div>
  )
}
