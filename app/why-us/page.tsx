import type { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import AdvantagesSection from '@/components/sections/AdvantagesSection'
import HowWeWorkSection from '@/components/sections/HowWeWorkSection'
import TrustSection from '@/components/sections/TrustSection'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Почему выбирают нас',
  description: 'Прямые поставки, проверка совместимости, гарантия. Узнайте о наших преимуществах.',
}

export default function WhyUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Почему мы' }]} />
      <AdvantagesSection isMain />
      <HowWeWorkSection />
      <TrustSection />
      <CtaSection />
    </>
  )
}
