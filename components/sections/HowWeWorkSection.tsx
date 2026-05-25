import { WORK_STEPS } from '@/lib/data/advantages'

export default function HowWeWorkSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <span className="accent-bar mx-auto mb-4" />
          <h2 className="section-title mb-3">Как мы работаем</h2>
          <p className="section-sub max-w-lg mx-auto">
            Простой процесс от заявки до получения деталей
          </p>
        </div>

        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-surface-dark" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORK_STEPS.map((step, i) => (
              <div key={step.step} className={`flex flex-col items-center text-center animate-fade-in-up stagger-${i + 1}`}>
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-[#141414] border border-[#cc0000]/30 flex items-center justify-center shadow-[0_0_20px_rgba(204,0,0,0.15)] z-10 relative">
                    <span
                      className="text-2xl text-white"
                      style={{ fontFamily: 'var(--font-russo)' }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <div className="absolute -inset-1 rounded-full bg-accent/20 -z-10" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">{step.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
