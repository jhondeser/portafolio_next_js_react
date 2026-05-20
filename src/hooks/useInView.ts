'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  /** Porcentaje del elemento que debe ser visible (0 a 1). Por defecto 0.15. */
  threshold?: number
  /** Margen del root. Útil para empezar la animación un poco antes del viewport. */
  rootMargin?: string
  /** Si es true, solo se dispara una vez. Por defecto true. */
  once?: boolean
}

/**
 * Detecta cuándo un elemento entra en el viewport usando IntersectionObserver.
 *
 * - Respeta `prefers-reduced-motion`: si el usuario lo tiene activado,
 *   el contenido aparece directamente como visible (sin esperar al scroll).
 * - Por defecto solo dispara una vez (`once: true`).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', once = true } = options
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Si el usuario prefiere reducir el movimiento, mostramos todo al instante
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
