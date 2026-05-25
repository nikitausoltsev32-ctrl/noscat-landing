import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { icon: 36, wordmark: 18, tag: 8 },
  md: { icon: 44, wordmark: 22, tag: 10 },
  lg: { icon: 56, wordmark: 28, tag: 12 },
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const s = sizes[size]

  return (
    <Link href="/" className={`flex items-center gap-2.5 group shrink-0 ${className}`} aria-label="NOSECUT CHINA — главная">
      {/* Brand logo circle */}
      <div className="relative shrink-0 rounded-full overflow-hidden" style={{ width: s.icon, height: s.icon }}>
        <Image
          src="/images/logo-circle.png"
          alt="NOSECUT CHINA"
          width={s.icon}
          height={s.icon}
          className="object-cover"
          priority
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none gap-0.5">
        <span style={{ fontFamily: 'var(--font-russo)', fontSize: s.wordmark, color: '#ffffff', letterSpacing: '0.02em' }}>
          NOSECUT <span style={{ color: '#cc0000' }}>CHINA</span>
        </span>
        <span
          style={{
            fontFamily: 'var(--font-nunito)',
            fontSize: s.tag,
            fontWeight: 700,
            letterSpacing: '0.14em',
            backgroundColor: '#cc0000',
            color: '#ffffff',
            padding: '1px 5px',
            textTransform: 'uppercase',
          }}
        >
          НОСКАТЫ И ПЕРЕД АВТО
        </span>
      </div>
    </Link>
  )
}
