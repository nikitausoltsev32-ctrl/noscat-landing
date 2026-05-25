import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import CtaSection from '@/components/sections/CtaSection'
import { CAR_BRANDS, getBrandBySlug } from '@/lib/data/cars'

export function generateStaticParams() {
  return CAR_BRANDS.map((b) => ({ brand: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand: brandSlug } = await params
  const brand = getBrandBySlug(brandSlug)
  if (!brand) return {}
  return {
    title: `Ноускат ${brand.name} — подбор по модели`,
    description: `Ноускаты для ${brand.name}: ${brand.models.map((m) => m.name).join(', ')}.`,
  }
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: brandSlug } = await params
  const brand = getBrandBySlug(brandSlug)
  if (!brand) notFound()

  return (
    <>
      <Breadcrumbs items={[{ label: 'Подбор по авто', href: '/cars' }, { label: brand.name }]} />
      <section className="section">
        <div className="container">
          <span className="accent-bar mb-4" />
          <h1 className="section-title mb-3">Ноускаты {brand.name}</h1>
          <p className="section-sub mb-10">Выберите модель для подбора</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brand.models.map((model) => (
              <Link
                key={model.slug}
                href={`/cars/${brand.slug}/${model.slug}`}
                className="card p-6 group hover:border-accent transition-all duration-200"
              >
                <div className="aspect-video rounded-lg bg-surface-alt mb-4 flex items-center justify-center group-hover:bg-accent/5 transition-colors duration-200">
                  {model.image ? (
                    <img src={model.image} alt={model.name} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <span className="text-ink-muted text-sm">Фото</span>
                  )}
                </div>
                <h2 className="text-base font-medium text-white group-hover:text-accent transition-colors mb-1">
                  {brand.name} {model.name}
                </h2>
                {model.years && <p className="text-xs text-ink-muted">{model.years}</p>}
                <p className="text-xs text-accent font-medium mt-3">Подобрать ноускат →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection title={`Нужен ноускат ${brand.name}?`} subtitle="Оставьте заявку — подберём и проверим совместимость." />
    </>
  )
}
