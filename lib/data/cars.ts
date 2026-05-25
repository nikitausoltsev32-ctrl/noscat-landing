import type { CarBrand } from '@/types'

export const CAR_BRANDS: CarBrand[] = [
  {
    slug: 'chery',
    name: 'Chery',
    logo: '/images/brands/chery.svg',
    models: [
      { slug: 'tiggo-7-pro', name: 'Tiggo 7 Pro', brandSlug: 'chery' },
      { slug: 'tiggo-8-pro', name: 'Tiggo 8 Pro', brandSlug: 'chery' },
      { slug: 'arrizo-8', name: 'Arrizo 8', brandSlug: 'chery' },
    ],
  },
  {
    slug: 'haval',
    name: 'Haval',
    logo: '/images/brands/haval.svg',
    models: [
      { slug: 'jolion', name: 'Jolion', brandSlug: 'haval' },
      { slug: 'h6', name: 'H6', brandSlug: 'haval' },
      { slug: 'f7', name: 'F7', brandSlug: 'haval' },
    ],
  },
  {
    slug: 'geely',
    name: 'Geely',
    logo: '/images/brands/geely.svg',
    models: [
      { slug: 'atlas-pro', name: 'Atlas Pro', brandSlug: 'geely' },
      { slug: 'coolray', name: 'Coolray', brandSlug: 'geely' },
      { slug: 'tugella', name: 'Tugella', brandSlug: 'geely' },
    ],
  },
  {
    slug: 'exeed',
    name: 'Exeed',
    logo: '/images/brands/exeed.svg',
    models: [
      { slug: 'txl', name: 'TXL', brandSlug: 'exeed' },
      { slug: 'rx', name: 'RX', brandSlug: 'exeed' },
    ],
  },
  {
    slug: 'omoda',
    name: 'Omoda',
    logo: '/images/brands/omoda.svg',
    models: [
      { slug: 'c5', name: 'C5', brandSlug: 'omoda' },
      { slug: 's5', name: 'S5', brandSlug: 'omoda' },
    ],
  },
]

export function getBrandBySlug(slug: string): CarBrand | undefined {
  return CAR_BRANDS.find((b) => b.slug === slug)
}
