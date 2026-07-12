import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children?: ReactNode
  className?: string
  as?: 'div' | 'article' | 'h2' | 'p' | 'ul' | 'figure'
  dangerouslySetInnerHTML?: { __html: string }
  delay?: number
}

export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  dangerouslySetInnerHTML,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [pending, setPending] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }

    setPending(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = ['reveal', pending && !visible ? 'reveal-pending' : '', visible ? 'reveal-visible' : '', className]
    .filter(Boolean)
    .join(' ')

  const style: CSSProperties | undefined = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined

  return createElement(
    Tag,
    { ref, className: classes, style, dangerouslySetInnerHTML },
    dangerouslySetInnerHTML ? undefined : children
  )
}
