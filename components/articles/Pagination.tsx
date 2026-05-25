import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

function getPages(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const pages: (number | '...')[] = [1]

  if (current > 3) pages.push('...')
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i)
  }
  if (current < total - 2) pages.push('...')

  pages.push(total)
  return pages
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = getPages(currentPage, totalPages)

  const href = (page: number) => (page === 1 ? basePath : `${basePath}?page=${page}`)

  return (
    <nav aria-label="Пагинация" className="flex items-center justify-center gap-1 mt-10">
      {currentPage > 1 && (
        <Link href={href(currentPage - 1)} className="btn-ghost px-3 py-2 text-sm">
          ←
        </Link>
      )}

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="px-2 text-ink-muted text-sm">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={href(p)}
            className={cn(
              'w-9 h-9 flex items-center justify-center rounded-btn text-sm font-medium transition-colors duration-150',
              p === currentPage
                ? 'bg-accent text-white'
                : 'text-ink-muted hover:text-ink hover:bg-surface-alt'
            )}
            aria-current={p === currentPage ? 'page' : undefined}
          >
            {p}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link href={href(currentPage + 1)} className="btn-ghost px-3 py-2 text-sm">
          →
        </Link>
      )}
    </nav>
  )
}
