import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#cc0000',
          dark: '#aa0000',
          light: '#e60000',
        },
        brand: {
          dark: '#0f0f0f',
          mid: '#1a1a1a',
          header: '#111111',
        },
        surface: {
          DEFAULT: '#1a1a1a',
          alt: '#141414',
          dark: '#2a2a2a',
        },
        ink: {
          DEFAULT: '#ffffff',
          muted: '#9ca3af',
          light: '#6b7280',
        },
      },
      fontFamily: {
        display: ['var(--font-russo)', 'Impact', 'sans-serif'],
        body: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
      boxShadow: {
        card: '0 2px 12px 0 rgba(0,0,0,0.4)',
        'card-hover': '0 8px 32px 0 rgba(0,0,0,0.6)',
        cta: '0 4px 24px 0 rgba(204,0,0,0.4)',
      },
      borderRadius: {
        card: '6px',
        btn: '4px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}

export default config
