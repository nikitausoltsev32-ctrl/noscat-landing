import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import CtaSection from '@/components/sections/CtaSection'
import { ARTICLES, getArticleBySlug } from '@/lib/data/articles'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const date = new Date(article.publishedAt).toLocaleDateString('ru-RU', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    datePublished: article.publishedAt,
    description: article.excerpt,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/<\/script/gi, '<\\/script') }} />
      <Breadcrumbs items={[{ label: 'Статьи', href: '/articles' }, { label: article.title }]} />

      <article className="section">
        <div className="container max-w-2xl">
          {article.category && (
            <span className="text-xs font-medium text-accent uppercase tracking-wider mb-3 block">
              {article.category}
            </span>
          )}
          <h1 className="section-title mb-4">{article.title}</h1>
          <p className="text-sm text-ink-muted mb-8">{date}</p>

          {article.image && (
            <div className="aspect-video rounded-card overflow-hidden mb-8 bg-surface-alt">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="prose prose-lg text-ink leading-relaxed">
            <p>{article.excerpt}</p>
            {article.content && article.content.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  )
}
