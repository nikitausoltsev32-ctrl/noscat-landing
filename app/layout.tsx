import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'

export const metadata: Metadata = {
  title: {
    default: 'НОСКАТ — Ноускаты из Китая для вашего авто',
    template: '%s | НОСКАТ',
  },
  description:
    'Подбор и поставка ноускатов из Китая. Chery, Haval, Geely, Exeed, Omoda. Проверка совместимости по VIN, доставка по России от 30 дней.',
  keywords: ['ноускат', 'носкат', 'запчасти из Китая', 'ноускат Chery', 'ноускат Haval', 'ноускат Geely'],
  metadataBase: new URL('https://noskat.ru'),
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'НОСКАТ',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
