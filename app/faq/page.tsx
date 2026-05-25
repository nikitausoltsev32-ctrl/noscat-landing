import type { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Часто задаваемые вопросы',
  description: 'Ответы на популярные вопросы о подборе ноускатов, доставке и совместимости.',
}

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'FAQ' }]} />
      <div className="section-alt py-10">
        <div className="container">
          <span className="accent-bar mb-4" />
          <h1 className="section-title">Часто задаваемые вопросы</h1>
        </div>
      </div>
      <FaqSection />
      <CtaSection />
    </>
  )
}
