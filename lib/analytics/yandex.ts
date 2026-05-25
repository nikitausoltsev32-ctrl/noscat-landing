'use client'

const YM_ID = process.env.NEXT_PUBLIC_YM_ID

export function initYandexMetrica() {
  if (!YM_ID || typeof window === 'undefined') return
  if ((window as any).ym) return // already loaded

  const script = document.createElement('script')
  script.src = `https://mc.yandex.ru/metrika/tag.js`
  script.async = true
  document.head.appendChild(script)

  script.onload = () => {
    ;(window as any).ym(Number(YM_ID), 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })
  }
}

export function ymGoal(target: string) {
  if (typeof window !== 'undefined' && (window as any).ym && YM_ID) {
    ;(window as any).ym(Number(YM_ID), 'reachGoal', target)
  }
}
