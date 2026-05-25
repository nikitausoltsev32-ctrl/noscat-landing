import Link from 'next/link'

interface CtaSectionProps {
  title?: string
  subtitle?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}

export default function CtaSection({
  title = 'Готовы подобрать ноускат?',
  subtitle = 'Оставьте заявку — ответим в течение 30 минут в рабочее время.',
  primary = { label: 'Оставить заявку', href: '/request' },
  secondary = { label: 'Написать в WhatsApp', href: 'https://wa.me/79000000000' },
}: CtaSectionProps) {
  return (
    <section className="section relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #cc0000 0%, #a00000 50%, #8b0000 100%)' }}>
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }}
      />
      <div className="container relative text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
          style={{ fontFamily: 'var(--font-russo)' }}
        >
          {title}
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#cc0000] font-bold rounded-btn text-base hover:bg-white/95 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100"
          >
            {primary.label}
          </Link>
          <a
            href={secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/40 text-white font-medium rounded-btn text-base hover:border-white hover:bg-white/10 transition-all duration-150"
          >
            {secondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}
