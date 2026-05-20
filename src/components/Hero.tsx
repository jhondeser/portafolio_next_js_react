'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { useScroll, useTransform, useMotionValueEvent, motion } from 'framer-motion'
import Link from 'next/link'
import lagoVideo from "@/public/videos/lago.mp4"

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
  const [videoDuration, setVideoDuration] = useState(0)
  const nextIdRef = useRef(0)
  const lastMouseMoveTime = useRef<number>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // ── Scroll tracking ──────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"] // 👈 empieza cuando la sección toca el top
  })

  // ── Parallax por capas (velocidades distintas) ───────────────
  const bgY        = useTransform(scrollYProgress, [0, 1], ["0%", "45%"])  // fondo: más rápido
  const floatsY    = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])  // decorativos: medio
  const contentY   = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]) // contenido: casi quieto
  const overlayO   = useTransform(scrollYProgress, [0, 0.6], [0.2, 0.6])  // overlay se oscurece

  // ── Scroll controla el video ─────────────────────────────────
  const videoTime = useTransform(scrollYProgress, [0, 1], [0, videoDuration])

  useMotionValueEvent(videoTime, "change", (time) => {
    if (videoRef.current && !isNaN(time) && isFinite(time) && time <= videoDuration) {
      videoRef.current.currentTime = time
    }
  })

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return
    const handleLoadedMetadata = () => setVideoDuration(videoElement.duration)
    if (videoElement.readyState >= 1) {
      setVideoDuration(videoElement.duration)
    } else {
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata)
      return () => videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // ── Ripples ──────────────────────────────────────────────────
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const now = Date.now()
    if (now - lastMouseMoveTime.current < 100) return
    lastMouseMoveTime.current = now

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple: Ripple = {
      id: `ripple-${nextIdRef.current}-${Date.now()}-${Math.random()}`,
      x, y,
      size: Math.min(rect.width, rect.height) * 0.08,
      progress: 0,
      createdAt: Date.now(),
    }

    setRipples((prev) => {
      const updated = prev.slice(0, 7).map((r) => ({ ...r, progress: r.progress + 0.05 }))
      return [newRipple, ...updated]
    })
    nextIdRef.current += 1
  }, [])

  const updateRipples = useCallback(() => {
    setRipples((prev) =>
      prev
        .map((r) => ({ ...r, progress: Math.min(r.progress + 0.015, 1) }))
        .filter((r) => Date.now() - r.createdAt < 3000 && r.progress < 1)
    )
  }, [])

  useEffect(() => {
    let rafId: number
    const animate = () => { updateRipples(); rafId = requestAnimationFrame(animate) }
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [updateRipples])

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* ── CAPA 1: VIDEO (más rápido → se va antes) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 will-change-transform"
          // 👆 will-change avisa al browser para optimizar el repaint
        >
          <video
            ref={videoRef}
            autoPlay={false}
            loop={false}
            muted
            playsInline
            preload="auto"
            style={{
              position: 'absolute',
              // Sobredimensionado para que el parallax no deje huecos
              top: '-20%',
              left: 0,
              width: '100%',
              height: '140%',  // 👈 clave: más alto que el contenedor
              objectFit: 'cover',
              display: 'block'
            }}
          >
            <source src={lagoVideo} type="video/mp4" />
          </video>
        </motion.div>

        {/* Overlay que se oscurece al bajar */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0,0,0,1)', opacity: overlayO }}
        />
      </div>

      {/* ── CAPA 2: ELEMENTOS DECORATIVOS (velocidad media) ── */}
      <motion.div
        style={{ y: floatsY }}
        className="absolute inset-0 z-5 pointer-events-none will-change-transform"
      >
        <div
          className={`absolute top-20 left-10 transition-all duration-1000 ${
            isVisible ? 'opacity-20 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="w-3 h-3 bg-teal-400 rounded-full animate-float" />
        </div>
        <div
          className={`absolute top-40 right-16 transition-all duration-1000 ${
            isVisible ? 'opacity-30 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        <div
          className={`absolute bottom-40 left-20 transition-all duration-1000 ${
            isVisible ? 'opacity-25 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <div className="w-4 h-4 bg-emerald-400 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        </div>

        {/* Líneas decorativas laterales — se mueven con los floats */}
        <div
          className={`absolute left-8 top-1/2 -translate-y-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-15' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </div>
        <div
          className={`absolute right-8 top-1/2 -translate-y-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-15' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </div>
      </motion.div>

      {/* ── CAPA 3: CONTENIDO CENTRAL (más lento → se queda más tiempo) ── */}
      <motion.div
        style={{ y: contentY }}
        className="container mx-auto text-center relative z-20 w-full will-change-transform"
      >
        <div className="flex flex-col items-center justify-center w-full px-4">

          {/* Línea decorativa superior */}
          <div
            className={`flex justify-center mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="w-16 h-0.5 bg-white/70" />
            <div className="w-3 h-3 rounded-full bg-amber-300 mx-4 mt-1" />
            <div className="w-16 h-0.5 bg-white/70" />
          </div>

          {/* Título */}
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
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-light tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105"
            >
              Explorar Proyectos
            </Link>
            <Link
              href="/about"
              className="text-white/80 px-8 py-4 font-light tracking-wide hover:text-white transition-all duration-300 flex items-center group hover:translate-x-1"
            >
              Conoce mi camino
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ── Ripples ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {ripples.map((ripple) => {
          const scale = 1 + ripple.progress * 4
          const opacity = Math.max(0, 0.6 - ripple.progress * 0.6)
          const borderWidth = Math.max(0.5, 1.5 - ripple.progress * 1.2)
          return (
            <div
              key={ripple.id}
              className="absolute rounded-full border border-teal-300/60"
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
    </motion.section>
  )
}