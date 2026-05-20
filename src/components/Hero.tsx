'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Ripple {
  id: string
  x: number
  y: number
  size: number
  progress: number
  createdAt: number
}

export default function Hero() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const nextIdRef = useRef(0)
  const lastMouseMoveTime = useRef<number>(0)

  useEffect(() => {
    // Pequeño delay para activar las animaciones de entrada
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now()
    if (now - lastMouseMoveTime.current < 100) return
    lastMouseMoveTime.current = now

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple: Ripple = {
      id: `ripple-${nextIdRef.current}-${Date.now()}-${Math.random()}`,
      x,
      y,
      size: Math.min(rect.width, rect.height) * 0.08,
      progress: 0,
      createdAt: Date.now(),
    }

    setRipples((prev) => {
      const updatedRipples = prev.slice(0, 7).map((ripple) => ({
        ...ripple,
        progress: ripple.progress + 0.05,
      }))
      return [newRipple, ...updatedRipples]
    })

    nextIdRef.current += 1
  }, [])

  const updateRipples = useCallback(() => {
    setRipples((prev) =>
      prev
        .map((ripple) => ({
          ...ripple,
          progress: Math.min(ripple.progress + 0.015, 1),
        }))
        .filter((ripple) => {
          const age = Date.now() - ripple.createdAt
          return age < 3000 && ripple.progress < 1
        })
    )
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      updateRipples()
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [updateRipples])

  return (
    <section
      className="pt-20 pb-20 px-4 relative min-h-screen overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Fondo de vídeo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/lago.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Elementos decorativos flotantes con entrada retrasada */}
      <div 
        className={`absolute top-20 left-10 opacity-20 animate-float z-5 transition-all duration-1000 ${
          isVisible ? 'opacity-20 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
        style={{ transitionDelay: '0.2s' }}
      >
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
      </div>
      <div
        className={`absolute top-40 right-16 animate-float z-5 transition-all duration-1000 ${
          isVisible ? 'opacity-30 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
        style={{ transitionDelay: '0.5s', animationDelay: '1.5s' }}
      >
        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
      </div>
      <div
        className={`absolute bottom-40 left-20 animate-float z-5 transition-all duration-1000 ${
          isVisible ? 'opacity-25 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '0.8s', animationDelay: '3s' }}
      >
        <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto text-center relative z-20 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          
          {/* Línea decorativa superior */}
          <div 
            className={`flex justify-center mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="w-16 h-0.5 bg-white/70"></div>
            <div className="w-3 h-3 rounded-full bg-amber-300 mx-4 mt-1"></div>
            <div className="w-16 h-0.5 bg-white/70"></div>
          </div>

          {/* Título principal */}
          <h1 
            className={`text-5xl md:text-7xl font-light text-white mb-6 tracking-tight drop-shadow-lg transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            Diseño con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200 drop-shadow-md">
              propósito
            </span>
          </h1>

          {/* Descripción */}
          <p 
            className={`text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            Creo experiencias digitales que respiran calma, funcionan con precisión
            y conectan con esencia.
          </p>

          {/* Botones */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            <Link
              href="/projects"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-light tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 relative z-30 hover:scale-105"
            >
              Explorar Proyectos
            </Link>
            <Link
              href="/about"
              className="text-white/80 px-8 py-4 font-light tracking-wide hover:text-white transition-all duration-300 flex items-center group relative z-30 hover:translate-x-1"
            >
              Conoce mi camino
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Ondas al mover el ratón */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
        {ripples.map((ripple) => {
          const scale = 1 + ripple.progress * 4
          const opacity = Math.max(0, 0.6 - ripple.progress * 0.6)
          const borderWidth = Math.max(0.5, 1.5 - ripple.progress * 1.2)

          return (
            <div
              key={ripple.id}
              className="absolute rounded-full border border-teal-300/60 transition-none"
              style={{
                left: ripple.x - (ripple.size * scale) / 2,
                top: ripple.y - (ripple.size * scale) / 2,
                width: ripple.size * scale,
                height: ripple.size * scale,
                opacity,
                borderWidth: `${borderWidth}px`,
                transform: `scale(${scale})`,
                transition: 'none',
              }}
            />
          )
        })}
      </div>
    </section>
  )
}