import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ArticleCard from '@/components/articles/ArticleCard'
import Pagination from '@/components/articles/Pagination'
import { ARTICLES, ARTICLE_CATEGORIES } from '@/lib/data/articles'

export const metadata: Metadata = {
  title: 'Полезные материалы',
  description: 'Статьи и руководства по ноускатам, подбору запчастей и доставке из Китая.',
}

const PER_PAGE = 6

export default async function ArticlesPage({ searchParams }: { searchParams: Promise<{ page?: string; category?: string }> }) {
  const sp = await searchParams
  const page = Math.max(1, Number(sp.page ?? 1))
  const category = sp.category ?? 'Все'

  const filtered = category === 'Все' ? ARTICLES : ARTICLES.filter((a) => a.category === category)
  const total = Math.ceil(filtered.length / PER_PAGE)
  const items = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Статьи' }]} />
      <section className="section">
        <div className="container">
          <span className="accent-bar mb-4" />
          <h1 className="section-title mb-8">Полезные материалы</h1>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {ARTICLE_CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={cat === 'Все' ? '/articles' : `/articles?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-150 ${
                  category === cat
                    ? 'bg-accent text-white border-accent'
                    : 'border-surface-dark text-ink-muted hover:border-accent hover:text-accent'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <Pagination currentPage={page} totalPages={total} basePath="/articles" />
        </div>
      </section>
    </>
  )
}
