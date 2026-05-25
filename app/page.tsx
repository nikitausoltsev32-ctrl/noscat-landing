import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import AdvantagesSection from '@/components/sections/AdvantagesSection'
import HowWeWorkSection from '@/components/sections/HowWeWorkSection'
import CarBrandsSection from '@/components/sections/CarBrandsSection'
import TrustSection from '@/components/sections/TrustSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'НОСКАТ — Ноускаты из Китая для вашего авто',
  description:
    'Подбор ноускатов из Китая под ваш автомобиль. Chery, Haval, Geely, Exeed, Omoda. Доставка по России.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <HowWeWorkSection />
      <CarBrandsSection />
      <TrustSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
