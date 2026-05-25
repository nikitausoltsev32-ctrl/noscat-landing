import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: Crumb[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://noskat.ru/' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `https://noskat.ru${item.href}` } : {}),
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 border-b border-surface-alt">
        <div className="container">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
            <li>
              <Link href="/" className="hover:text-ink transition-colors duration-150">
                Главная
              </Link>
            </li>
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span className="text-ink-light">/</span>
                {item.href ? (
                  <Link href={item.href} className="hover:text-ink transition-colors duration-150">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-ink font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
