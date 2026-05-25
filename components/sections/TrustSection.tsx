const CASES = [
  {
    brand: 'Chery Tiggo 8 Pro',
    text: 'Подобрали полный ноускат после ДТП. Совпадение по VIN — 100%. Доставка за 32 дня.',
    tag: 'Полный ноускат',
  },
  {
    brand: 'Haval Jolion',
    text: 'Клиенту нужны были только передние крылья и капот. Отправили по отдельности, сэкономили.',
    tag: 'Отдельные детали',
  },
  {
    brand: 'Geely Coolray',
    text: 'Сложный случай — год выпуска 2022, дорестайл. Нашли нужную версию на складе в Гуанчжоу.',
    tag: 'Редкая версия',
  },
]

const STATS = [
  { value: '500+', label: 'выполненных заказов' },
  { value: '98%', label: 'точность подбора' },
  { value: '30 дн', label: 'средняя доставка' },
  { value: '3 года', label: 'на рынке' },
]

export default function TrustSection() {
  return (
    <section className="section bg-brand-dark text-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="accent-bar mx-auto mb-4" />
          <h2 className="section-title mb-3 text-white">Наши кейсы</h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Реальные задачи — реальные результаты
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {STATS.map((s) => (
            <div key={s.label} className="text-center p-5 rounded-card bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,0,0,0.08)]">
              <div className="text-3xl text-accent mb-1" style={{ fontFamily: 'var(--font-russo)' }}>
                {s.value}
              </div>
              <div className="text-xs text-white/80 font-medium leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden p-6 rounded-card bg-white/5 border border-white/10 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(204,0,0,0.15)] transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
            >
              {/* Top red line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#cc0000] to-[#ff1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Ambient glow inside */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#cc0000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-2.5 py-1 text-xs font-medium tracking-wide uppercase rounded bg-accent/10 text-accent mb-4 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  {c.tag}
                </span>
                <h3 className="text-base font-medium text-white mb-3">{c.brand}</h3>
                <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
