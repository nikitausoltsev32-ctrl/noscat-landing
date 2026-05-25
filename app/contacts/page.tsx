import type { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import RequestForm from '@/components/forms/RequestForm'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Телефон, мессенджеры, email и адрес. Свяжитесь с нами удобным способом.',
}

export default function ContactsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Контакты' }]} />
      <section className="section">
        <div className="container">
          <span className="accent-bar mb-4" />
          <h1 className="section-title mb-10">Контакты</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-3">Телефон</p>
                <a href="tel:+79000000000" className="text-xl font-medium text-white hover:text-accent transition-colors">
                  +7 (900) 000-00-00
                </a>
              </div>

              <div>
                <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-3">Мессенджеры</p>
                <div className="flex gap-3">
                  <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-4 py-2">
                    WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-3">Email</p>
                <a href="mailto:info@noskat.ru" className="text-base text-ink hover:text-accent transition-colors">
                  info@noskat.ru
                </a>
              </div>

              <div>
                <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-3">График работы</p>
                <p className="text-base text-ink">Пн–Пт: 9:00–18:00</p>
                <p className="text-sm text-ink-muted">Сб–Вс: выходной</p>
              </div>

              <div>
                <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-3">Адрес</p>
                <p className="text-base text-ink">г. Москва</p>
                <p className="text-sm text-ink-muted">Работаем дистанционно по всей России</p>
              </div>
            </div>

            {/* Map placeholder + form */}
            <div className="space-y-6">
              <div className="aspect-video rounded-card bg-surface-alt flex items-center justify-center border border-surface-dark">
                <p className="text-ink-muted text-sm">Карта</p>
              </div>

              <div className="card p-6">
                <h2 className="text-lg text-white mb-4" style={{ fontFamily: 'var(--font-russo)' }}>
                  Обратная связь
                </h2>
                <RequestForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
