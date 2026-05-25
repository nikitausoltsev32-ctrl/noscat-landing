import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const MESSENGERS = [
  { label: 'WhatsApp', href: 'https://wa.me/79000000000' },
]

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Политика конфиденциальности' },
  { href: '/data-consent', label: 'Согласие на обработку ПД' },
  { href: '/cookie-policy', label: 'Cookie-политика' },
]

const SITE_LINKS = [
  { href: '/cars', label: 'Подбор по авто' },
  { href: '/request', label: 'Оставить заявку' },
  { href: '/why-us', label: 'Почему мы' },
  { href: '/faq', label: 'FAQ' },
  { href: '/articles', label: 'Статьи' },
  { href: '/contacts', label: 'Контакты' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="sm" />
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Подбор и поставка ноускатов из Китая под ваш автомобиль.
            </p>
            <div className="mt-4 flex gap-3">
              {MESSENGERS.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium rounded border border-white/20 text-white/70 hover:border-accent hover:text-accent transition-colors duration-150"
                >
                  {m.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-4">
              Разделы
            </p>
            <ul className="space-y-2.5">
              {SITE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-4">
              Контакты
            </p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="tel:+79000000000" className="hover:text-white transition-colors duration-150">
                  +7 (900) 000-00-00
                </a>
              </li>
              <li>
                <a href="mailto:info@noskat.ru" className="hover:text-white transition-colors duration-150">
                  info@noskat.ru
                </a>
              </li>
              <li className="text-white/40 text-xs">Пн–Пт 9:00–18:00</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-4">
              Документы
            </p>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-white/50 hover:text-white/80 transition-colors duration-150 leading-relaxed"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} NOSECUT CHINA. Все права защищены.
          </p>
          <p className="text-xs text-white/20">
            ИП Иванов И.И. · ИНН 000000000000
          </p>
        </div>
      </div>
    </footer>
  )
}
