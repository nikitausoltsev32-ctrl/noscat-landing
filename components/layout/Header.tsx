'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from '@/components/ui/Logo'

const NAV_LINKS = [
  { href: '/cars', label: 'Подбор по авто' },
  { href: '/why-us', label: 'Почему мы' },
  { href: '/articles', label: 'Статьи' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contacts', label: 'Контакты' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#111111] border-b border-[#2a2a2a]">
      {/* Red accent line */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #cc0000, #e60000, #cc0000)' }} />

      <div className="container flex items-center justify-between h-16 md:h-18">
        <Logo size="sm" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-medium text-[#9ca3af] hover:text-white transition-colors duration-150 uppercase tracking-widest"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: cookie link + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="text-xs text-[#6b7280] hover:text-[#9ca3af] transition-colors duration-150"
            onClick={() => {/* open cookie settings */}}
          >
            Настройки cookie
          </button>
          <Link href="/request" className="btn-primary text-xs px-4 py-2.5">
            Оставить заявку
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Меню"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#2a2a2a] bg-[#111111]">
          <nav className="container flex flex-col py-4 gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-[#9ca3af] hover:text-white border-b border-[#1f1f1f] last:border-0 uppercase tracking-widest transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/request"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full text-center text-sm"
            >
              Оставить заявку
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
