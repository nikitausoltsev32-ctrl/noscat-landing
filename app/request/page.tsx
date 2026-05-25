import type { Metadata } from 'next'
import RequestForm from '@/components/forms/RequestForm'
import { ADVANTAGES } from '@/lib/data/advantages'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Оставить заявку на подбор ноуската',
  description: 'Заполните форму — подберём ноускат для вашего автомобиля из Китая.',
}

const AFTER_SUBMIT = [
  'Специалист свяжется в течение 30 минут',
  'Проверим совместимость по VIN',
  'Назовём стоимость и сроки доставки',
  'Согласуем заказ и оформим',
]

export default function RequestPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Оставить заявку' }]} />
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left */}
            <div>
              <span className="accent-bar mb-4" />
              <h1 className="section-title mb-4">Заявка на подбор ноуската</h1>
              <p className="section-sub mb-8">
                Укажите ваш автомобиль и контакты — мы подберём подходящий вариант и свяжемся с вами.
              </p>

              <div className="mb-8">
                <h2 className="text-base font-medium text-white mb-4">
                  Что будет после отправки:
                </h2>
                <ul className="space-y-3">
                  {AFTER_SUBMIT.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink-muted">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-card bg-surface-alt">
                <p className="text-sm font-medium text-white mb-3">Или свяжитесь напрямую:</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+79000000000" className="text-sm text-ink hover:text-accent transition-colors">
                    📞 +7 (900) 000-00-00
                  </a>
                  <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer" className="text-sm text-ink hover:text-accent transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div className="card p-6 md:p-8">
                <h2 className="text-xl text-white mb-5" style={{ fontFamily: 'var(--font-russo)' }}>
                  Ваши данные
                </h2>
                <RequestForm />
              </div>
            </div>
          </div>

          {/* Advantages strip */}
          <div className="mt-16 pt-10 border-t border-surface-alt">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {ADVANTAGES.map((adv) => (
                <div key={adv.title} className="text-center">
                  <p className="text-xs font-medium text-white leading-tight">{adv.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
