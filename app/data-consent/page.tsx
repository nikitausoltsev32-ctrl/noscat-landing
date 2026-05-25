import type { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = { title: 'Согласие на обработку персональных данных', description: 'Согласие на обработку и трансграничную передачу персональных данных в соответствии с 152-ФЗ.' }

export default function DataConsentPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Согласие на обработку ПД' }]} />
      <section className="section">
        <div className="container max-w-2xl prose prose-sm text-ink">
          <h1 style={{ fontFamily: 'var(--font-russo)' }}>Согласие на обработку персональных данных</h1>
          <p>
            Настоящим я даю согласие ИП Иванов И.И. на обработку моих персональных данных (имя, номер
            телефона) в целях получения консультации по подбору ноускатов и оформления заявки.
          </p>
          <p>
            Я также даю согласие на трансграничную передачу указанных персональных данных в AmoCRM (место
            нахождения серверов — за пределами Российской Федерации) в соответствии с требованиями
            Федерального закона № 152-ФЗ «О персональных данных».
          </p>
          <p>
            Согласие действует до его отзыва. Для отзыва направьте запрос на info@noskat.ru.
          </p>
        </div>
      </section>
    </>
  )
}
