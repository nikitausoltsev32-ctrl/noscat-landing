import type { Advantage, WorkStep } from '@/types'

export const ADVANTAGES: Advantage[] = [
  {
    icon: 'shield-check',
    title: 'Прямые поставки из Китая',
    description: 'Работаем напрямую с заводами. Без посредников — цена ниже, качество выше.',
  },
  {
    icon: 'search',
    title: 'Подбор под ваш автомобиль',
    description: 'Проверяем совместимость по VIN и году выпуска перед отправкой.',
  },
  {
    icon: 'truck',
    title: 'Доставка по всей России',
    description: 'Отправляем транспортными компаниями или нашей логистикой.',
  },
  {
    icon: 'headphones',
    title: 'Консультация специалиста',
    description: 'Помогаем с выбором, отвечаем на вопросы в WhatsApp и Telegram.',
  },
  {
    icon: 'badge-check',
    title: 'Гарантия на запчасти',
    description: 'Официальная гарантия на все поставляемые позиции.',
  },
  {
    icon: 'clock',
    title: 'Срок от 30 дней',
    description: 'Стандартная доставка 30–45 дней, экспресс — от 15 дней.',
  },
]

export const WORK_STEPS: WorkStep[] = [
  {
    step: 1,
    title: 'Оставляете заявку',
    description: 'Указываете марку, модель, год и нужные детали.',
  },
  {
    step: 2,
    title: 'Получаете консультацию',
    description: 'Специалист связывается и подтверждает совместимость.',
  },
  {
    step: 3,
    title: 'Согласовываете заказ',
    description: 'Уточняем стоимость, сроки и способ доставки.',
  },
  {
    step: 4,
    title: 'Получаете детали',
    description: 'Доставляем до вашего города или транспортной компании.',
  },
]
