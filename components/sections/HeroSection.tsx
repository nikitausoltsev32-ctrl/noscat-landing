import Image from 'next/image'
import RequestForm from '@/components/forms/RequestForm'


export default function HeroSection() {
  return (
    <section className="relative bg-[#0f0f0f] overflow-hidden min-h-[560px] md:min-h-[640px]">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/85 to-[#0f0f0f]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-[#0f0f0f]/40" />
      </div>



      {/* Red accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cc0000] opacity-[0.06] rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#cc0000] opacity-[0.04] rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="container relative py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left: text */}
          <div className="animate-fade-in-up">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-5 uppercase"
              style={{ fontFamily: 'var(--font-russo)' }}
            >
              Ноускаты под
              <br />
              <span className="text-[#cc0000] drop-shadow-[0_0_30px_rgba(204,0,0,0.3)]">ваш автомобиль</span>
              <br />
              из Китая
            </h1>

            <p className="text-[#9ca3af] text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Подбираем, проверяем совместимость и доставляем ноускаты для китайских
              автомобилей. Капот, крылья, бампер, фары — в сборе или по деталям.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6b7280] mb-8">
              {['Geely · Haval · Chery', 'Exeed · Omoda · JAAC', 'Срок от 30 дней'].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] shadow-[0_0_6px_rgba(204,0,0,0.6)]" />
                  {tag}
                </span>
              ))}
            </div>

            <a href="/request" className="btn-primary inline-flex">
              Оставить заявку
            </a>
          </div>

          {/* Right: form only */}
          <div className="animate-fade-in-up stagger-2">
            <div className="bg-[#1a1a1a]/90 backdrop-blur-md border border-[#2a2a2a] rounded-card p-6 md:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
              <h2
                className="text-lg text-white mb-1 uppercase"
                style={{ fontFamily: 'var(--font-russo)' }}
              >
                Оставить заявку
              </h2>
              <p className="text-xs text-[#6b7280] mb-4 tracking-wide">
                Ответим в течение 30 минут в рабочее время
              </p>
              <RequestForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
