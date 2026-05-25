import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import RequestForm from '@/components/forms/RequestForm'
import { CAR_BRANDS, getBrandBySlug } from '@/lib/data/cars'

export function generateStaticParams() {
  return CAR_BRANDS.flatMap((b) => b.models.map((m) => ({ brand: b.slug, model: m.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string; model: string }> }): Promise<Metadata> {
  const { brand: brandSlug, model: modelSlug } = await params
  const brand = getBrandBySlug(brandSlug)
  const model = brand?.models.find((m) => m.slug === modelSlug)
  if (!brand || !model) return {}
  return {
    title: `Ноускат ${brand.name} ${model.name}`,
    description: `Подбор ноуската для ${brand.name} ${model.name}. Проверка совместимости, доставка из Китая.`,
  }
}

export default async function ModelPage({ params }: { params: Promise<{ brand: string; model: string }> }) {
  const { brand: brandSlug, model: modelSlug } = await params
  const brand = getBrandBySlug(brandSlug)
  const model = brand?.models.find((m) => m.slug === modelSlug)
  if (!brand || !model) notFound()

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Подбор по авто', href: '/cars' },
          { label: brand.name, href: `/cars/${brand.slug}` },
          { label: model.name },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="accent-bar mb-4" />
              <h1 className="section-title mb-4">
                Ноускат {brand.name} {model.name}
              </h1>
              <p className="section-sub mb-8">
                Подберём совместимый ноускат под ваш автомобиль. Проверим по VIN и году выпуска.
              </p>
              <div className="aspect-video rounded-card bg-surface-alt flex items-center justify-center mb-6">
                <span className="text-ink-muted text-sm">Фото модели</span>
              </div>
              <ul className="space-y-2 text-sm text-ink-muted">
                <li>✓ Проверка совместимости по VIN</li>
                <li>✓ Прямая поставка с завода</li>
                <li>✓ Доставка по всей России</li>
                <li>✓ Гарантия на все детали</li>
              </ul>
            </div>

            <div>
              <div className="card p-6 md:p-8">
                <h2 className="text-xl text-white mb-5" style={{ fontFamily: 'var(--font-russo)' }}>
                  Оставить заявку
                </h2>
                <RequestForm defaultBrand={brand.slug} defaultModel={model.slug} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
