import Image from 'next/image'
import Link from 'next/link'
import { CAR_BRANDS } from '@/lib/data/cars'

export default function CarBrandsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="accent-bar mb-4" />
            <h2 className="section-title mb-2">Подбор по марке авто</h2>
            <p className="section-sub">Выберите марку — покажем совместимые ноускаты</p>
          </div>
          <Link href="/cars" className="btn-outline shrink-0 text-xs px-5 py-2.5">
            Все марки →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {CAR_BRANDS.map((brand, i) => (
            <Link
              key={brand.slug}
              href={`/cars/${brand.slug}`}
              className={`group relative overflow-hidden rounded-card border border-[#2a2a2a] hover:border-[#cc0000]/60 transition-all duration-300 animate-fade-in-up stagger-${i + 1} hover:shadow-[0_0_24px_rgba(204,0,0,0.12)]`}
            >
              {brand.logo ? (
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#cc0000] opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
                </div>
              ) : (
                <div className="w-full aspect-[16/10] bg-[#1a1a1a] flex items-center justify-center">
                  <span
                    className="text-4xl font-bold text-white/20 group-hover:text-[#cc0000]/40 transition-colors"
                    style={{ fontFamily: 'var(--font-russo)' }}
                  >
                    {brand.name[0]}
                  </span>
                </div>
              )}

              {/* Footer bar */}
              <div className="px-4 py-3 bg-[#111111] border-t border-[#2a2a2a] flex items-center justify-between">
                <span
                  className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#cc0000] transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-russo)' }}
                >
                  {brand.name}
                </span>
                <span className="text-xs text-[#6b7280]">
                  {brand.models.length} мод.
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
