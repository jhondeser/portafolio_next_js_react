'use client'

import { useState, useEffect, useRef } from 'react'
import { useScroll, useTransform, useMotionValueEvent, motion } from 'framer-motion'
import Link from 'next/link'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'
import { getFeaturedProjects } from '@/data/projects_data'
import samuraiVideo from "@/public/videos/fondo_arbol.mp4"

export default function Proyectos_destacados() {
  const featuredProjects = getFeaturedProjects()
  const [isVisible, setIsVisible] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // ── Scroll tracking ──────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // ── Parallax por capas ───────────────────────────────────────
  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "65%"])  // video: más rápido
  const floatsY  = useTransform(scrollYProgress, [0, 1], ["0%", "45%"])  // decorativos: medio
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]) // contenido: casi quieto
  const overlayO = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 0.3, 0.3, 0.6])

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

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full"
      style={{ minHeight: '100vh', position: 'relative', zIndex: 10, isolation: 'isolate' }}
    >
      {/* ── CAPA 1: VIDEO (más rápido) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute will-change-transform"
          style={{
            top: '-20%',
            left: 0,
            right: 0,
            bottom: '-20%',
          }}
        >
          <video
            ref={videoRef}
            autoPlay={false}
            loop={false}
            muted
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          >
            <source src={samuraiVideo} type="video/mp4" />
          </video>
        </motion.div>

        {/* Overlay dinámico */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0,0,0,1)', opacity: overlayO }}
        />
        {/* Gradiente inferior fijo */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7))' }}
        />
      </div>

      {/* ── CAPA 2: DECORATIVOS (velocidad media) ── */}
      <motion.div
        style={{ y: floatsY }}
        className="absolute inset-0 z-5 pointer-events-none will-change-transform"
      >
        {/* Puntos flotantes */}
        <div
          className={`absolute top-16 left-12 transition-all duration-1000 ${
            isVisible ? 'opacity-20 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-float" />
        </div>
        <div
          className={`absolute top-32 right-20 transition-all duration-1000 ${
            isVisible ? 'opacity-25 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        <div
          className={`absolute bottom-32 left-16 transition-all duration-1000 ${
            isVisible ? 'opacity-20 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <div className="w-4 h-4 bg-emerald-400 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        </div>
        <div
          className={`absolute bottom-20 right-12 transition-all duration-1000 ${
            isVisible ? 'opacity-15 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="w-2 h-2 bg-teal-300 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Líneas laterales decorativas */}
        <div
          className={`absolute left-8 top-1/2 -translate-y-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-15' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-teal-400/40 to-transparent" />
        </div>
        <div
          className={`absolute right-8 top-1/2 -translate-y-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-15' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-teal-400/40 to-transparent" />
        </div>
      </motion.div>

      {/* ── CAPA 3: CONTENIDO (más lento) ── */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 will-change-transform"
        style={{
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          minHeight: '100vh',
          paddingTop: '4rem',
          paddingBottom: '4rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block relative mb-6">
            <div className={`w-12 h-0.5 bg-teal-400 absolute -left-16 top-1/2 transform -translate-y-1/2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`} />
            <h2
              className="text-3xl md:text-4xl font-light text-white tracking-tight inline-block"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              Proyectos Recientes
            </h2>
            <div className={`w-12 h-0.5 bg-teal-400 absolute -right-16 top-1/2 transform -translate-y-1/2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`} />
          </div>
          <p
            className="text-slate-100 text-lg font-light tracking-wide max-w-2xl mx-auto drop-shadow-md"
            style={{
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '200ms',
              transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
              opacity: isVisible ? 1 : 0
            }}
          >
            Una selección de mis trabajos más recientes donde el diseño se encuentra con la funcionalidad
          </p>
        </div>

        {/* Grid de proyectos */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full"
          style={{
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '300ms',
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            opacity: isVisible ? 1 : 0
          }}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-12"
          style={{
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '500ms',
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            opacity: isVisible ? 1 : 0
          }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-teal-300 hover:text-teal-200 font-light tracking-wide transition-all duration-300 group/cta border border-teal-300/40 hover:border-teal-300/80 px-8 py-4 rounded-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          >
            <span>Ver todos los proyectos</span>
            <svg
              className="w-5 h-5 ml-3 group-hover/cta:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  )
}