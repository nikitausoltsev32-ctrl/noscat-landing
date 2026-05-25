import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { CAR_BRANDS } from '@/lib/data/cars'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Подбор ноуската по марке автомобиля',
  description: 'Выберите марку авто и найдите подходящий ноускат. Chery, Haval, Geely, Exeed, Omoda.',
}

export default function CarsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Подбор по авто' }]} />
      <section className="section">
        <div className="container">
          <span className="accent-bar mb-4" />
          <h1 className="section-title mb-3">Подбор по марке автомобиля</h1>
          <p className="section-sub mb-10">Выберите марку — покажем доступные модели</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {CAR_BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/cars/${brand.slug}`}
                className="card p-6 flex flex-col items-center gap-4 hover:border-accent transition-all duration-200 group"
              >
                <div className="w-16 h-16 rounded-full bg-surface-alt flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-200">
                  <span className="text-3xl font-bold text-white group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-russo)' }}>
                    {brand.name[0]}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">{brand.name}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{brand.models.length} моделей</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
