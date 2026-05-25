import Link from 'next/link'
import type { Article } from '@/types'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const date = new Date(article.publishedAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link href={`/articles/${article.slug}`} className="card flex flex-col h-full group">
      {article.image && (
        <div className="aspect-video bg-surface-alt rounded-t-card overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        {article.category && (
          <span className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
            {article.category}
          </span>
        )}
        <h3 className="text-sm font-medium text-white leading-snug mb-2 group-hover:text-accent transition-colors duration-150 flex-1">
          {article.title}
        </h3>
        <p className="text-xs text-ink-muted">{date}</p>
      </div>
    </Link>
  )
}
