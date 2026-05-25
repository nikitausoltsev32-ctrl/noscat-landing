export interface CarBrand {
  slug: string
  name: string
  logo?: string
  models: CarModel[]
}

export interface CarModel {
  slug: string
  name: string
  brandSlug: string
  image?: string
  years?: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  content?: string
  image?: string
  publishedAt: string
  category?: string
}

export interface Advantage {
  icon: string
  title: string
  description: string
}

export interface WorkStep {
  step: number
  title: string
  description: string
}

export interface FormData {
  name: string
  phone: string
  carBrand?: string
  carModel?: string
  comment?: string
  website?: string // honeypot field — must be empty for real users
}

export type CookieConsent = {
  necessary: true
  analytics: boolean
  marketing: boolean
}
