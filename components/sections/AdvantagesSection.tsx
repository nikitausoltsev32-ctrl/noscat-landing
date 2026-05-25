import { ADVANTAGES } from '@/lib/data/advantages'

const ICONS: Record<string, React.ReactNode> = {
  'shield-check': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L4 6v8c0 6 4.5 10.5 10 12 5.5-1.5 10-6 10-12V6L14 2z" stroke="#cc0000" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <path d="M9 14l3 3 7-7" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  search: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="#cc0000" strokeWidth="1.8" fill="none"/>
      <line x1="18.5" y1="18.5" x2="25" y2="25" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="9" y1="12" x2="15" y2="12" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="12" y1="9" x2="12" y2="15" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  ),
  truck: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="16" height="12" rx="1" stroke="#cc0000" strokeWidth="1.8" fill="none"/>
      <path d="M18 12h4l4 5v3h-8V12z" stroke="#cc0000" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <circle cx="7" cy="21" r="2.5" stroke="#cc0000" strokeWidth="1.5" fill="none"/>
      <circle cx="21" cy="21" r="2.5" stroke="#cc0000" strokeWidth="1.5" fill="none"/>
      <line x1="2" y1="13" x2="18" y2="13" stroke="#cc0000" strokeWidth="1" opacity="0.4"/>
    </svg>
  ),
  headphones: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 16v-3a9 9 0 0118 0v3" stroke="#cc0000" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <rect x="2" y="15" width="5" height="7" rx="2" stroke="#cc0000" strokeWidth="1.8" fill="none"/>
      <rect x="21" y="15" width="5" height="7" rx="2" stroke="#cc0000" strokeWidth="1.8" fill="none"/>
      <path d="M23 22v1a3 3 0 01-3 3h-3" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
    </svg>
  ),
  'badge-check': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H7v-4l-3-3 3-3V5h4l3-3z" stroke="#cc0000" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <path d="M9.5 14l3 3 6-6" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  clock: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="11" stroke="#cc0000" strokeWidth="1.8" fill="none"/>
      <line x1="14" y1="7" x2="14" y2="14" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="14" y1="14" x2="19" y2="17" stroke="#cc0000" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="1.5" fill="#cc0000"/>
    </svg>
  ),
}

export default function AdvantagesSection({ isMain = false }: { isMain?: boolean } = {}) {
  const TitleTag = isMain ? 'h1' : 'h2'
  
  return (
    <section className="section-alt">
      <div className="container">
        <div className="mb-12">
          <span className="accent-bar mb-4" />
          <TitleTag className="section-title mb-3">Почему выбирают нас</TitleTag>
          <p className="section-sub max-w-xl">
            Работаем напрямую с заводами Китая. Проверяем каждую деталь перед отправкой.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADVANTAGES.map((adv, i) => (
            <div
              key={adv.title}
              className={`bg-[#1a1a1a] border border-[#2a2a2a] rounded-card p-6 hover:border-[#cc0000]/60 transition-all duration-300 animate-fade-in-up stagger-${i + 1} hover:shadow-[0_0_24px_rgba(204,0,0,0.1)]`}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 border border-[#2a2a2a] rounded-card bg-[#cc0000]/5">
                {ICONS[adv.icon] ?? (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="10" stroke="#cc0000" strokeWidth="1.8"/>
                  </svg>
                )}
              </div>
              <h3
                className="text-sm font-bold text-white mb-2 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                {adv.title}
              </h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
