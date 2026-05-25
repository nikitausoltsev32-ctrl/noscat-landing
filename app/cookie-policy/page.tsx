import type { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = { title: 'Cookie-политика', description: 'Информация об использовании cookie на сайте noskat.ru. Типы, управление, настройки.' }

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Cookie-политика' }]} />
      <section className="section">
        <div className="container max-w-2xl prose prose-sm text-ink">
          <h1 style={{ fontFamily: 'var(--font-russo)' }}>Cookie-политика</h1>
          <h2>Что такое cookie</h2>
          <p>Cookie — небольшие текстовые файлы, сохраняемые браузером при посещении сайта.</p>
          <h2>Типы cookie на нашем сайте</h2>
          <ul>
            <li><strong>Необходимые</strong> — обеспечивают работу сайта. Не отключаются.</li>
            <li><strong>Аналитические</strong> — Яндекс.Метрика. Загружаются только с вашего согласия.</li>
          </ul>
          <h2>Управление cookie</h2>
          <p>
            При первом посещении сайта отображается баннер с выбором: принять все, отклонить необязательные
            или настроить вручную. Изменить настройки можно в любое время через баннер внизу страницы.
          </p>
        </div>
      </section>
    </>
  )
}
