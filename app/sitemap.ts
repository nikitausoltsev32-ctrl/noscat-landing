import type { MetadataRoute } from 'next'
import { CAR_BRANDS } from '@/lib/data/cars'
import { ARTICLES } from '@/lib/data/articles'

const BASE = 'https://noskat.ru'

export default function sitemap(): MetadataRoute.Sitemap {
  const static_pages = [
    '', '/request', '/cars', '/why-us', '/faq', '/contacts', '/articles',
    '/privacy', '/cookie-policy', '/data-consent',
  ].map((path) => ({ url: `${BASE}${path}`, changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.8 }))

  const brand_pages = CAR_BRANDS.map((b) => ({
    url: `${BASE}/cars/${b.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const model_pages = CAR_BRANDS.flatMap((b) =>
    b.models.map((m) => ({
      url: `${BASE}/cars/${b.slug}/${m.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  const article_pages = ARTICLES.map((a) => ({
    url: `${BASE}/articles/${a.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
    lastModified: new Date(a.publishedAt),
  }))

  return [...static_pages, ...brand_pages, ...model_pages, ...article_pages]
}
