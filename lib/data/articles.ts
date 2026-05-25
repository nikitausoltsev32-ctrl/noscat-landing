import type { Article } from '@/types'

export const ARTICLES: Article[] = [
  {
    slug: 'chto-takoe-noskat',
    title: 'Что такое ноускат и зачем он нужен',
    excerpt: 'Разбираем, из каких элементов состоит ноускат, в каких случаях его меняют и как выбрать подходящий.',
    publishedAt: '2025-04-10',
    category: 'Справочник',
  },
  {
    slug: 'kak-podobrat-noskat-po-vin',
    title: 'Как подобрать ноускат по VIN-номеру',
    excerpt: 'Пошаговая инструкция: где найти VIN, как расшифровать и как использовать для подбора запчастей.',
    publishedAt: '2025-04-18',
    category: 'Инструкции',
  },
  {
    slug: 'populyarnye-marki-kitayskih-avto',
    title: 'Топ-5 популярных китайских марок в России',
    excerpt: 'Chery, Haval, Geely, Exeed, Omoda — разбираем особенности каждой марки и доступность запчастей.',
    publishedAt: '2025-05-01',
    category: 'Обзоры',
  },
  {
    slug: 'dostavka-iz-kitaya',
    title: 'Как устроена доставка запчастей из Китая',
    excerpt: 'Маршруты, сроки, таможня, стоимость. Всё что нужно знать до оформления заказа.',
    publishedAt: '2025-05-12',
    category: 'Логистика',
  },
]

export const ARTICLE_CATEGORIES = ['Все', 'Справочник', 'Инструкции', 'Обзоры', 'Логистика']

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
