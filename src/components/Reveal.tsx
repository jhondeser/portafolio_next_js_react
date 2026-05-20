'use client'

import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface RevealProps {
  children: ReactNode
  /** Retardo en ms (útil para encadenar varios Reveals en cascada). */
  delay?: number
  /** Píxeles de traslación inicial hacia abajo. Por defecto 24. */
  offset?: number
  /** Duración de la transición en ms. Por defecto 700. */
  duration?: number
  /** Clases extra al wrapper. */
  className?: string
}

/**
 * Wrapper que aplica un fade + slide-up cuando el contenido entra en viewport.
 *
 * Uso:
 *   <Reveal><MiSeccion /></Reveal>
 *   <Reveal delay={150}><Card /></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  offset = 24,
  duration = 700,
  className = '',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`will-change-[opacity,transform] ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : `translateY(${offset}px)`,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: inView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
