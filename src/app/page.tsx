'use client'

import { useState, useCallback, useRef,useEffect } from 'react'
import Link from 'next/link'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'
import { Project } from '@/types'
import { projectImages } from '@/lib/images'
import Image from 'next/image'

// Datos de proyectos destacados (los mismos que en projects/page.tsx)
const featuredProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Orgánico",
    description: "Tienda online para productos naturales con enfoque en experiencia de usuario y rendimiento.",
    image: projectImages.ecomerceNatural,
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    link: "/projects",
    featured: true,
    category: "web"
  },
  {
    id: 2,
    title: "App de Meditación", 
    description: "Aplicación web para prácticas de mindfulness con seguimiento de progreso y comunidad.",
    image: projectImages.meditacion,
    tags: ["TypeScript", "React", "Framer Motion", "Node.js"],
    link: "/projects",
    category: "web"
  },
  {
    id: 3,
    title: "Plataforma Educativa",
    description: "Sistema de aprendizaje online con enfoque en accesibilidad y experiencia intuitiva.",
    image: projectImages.education,
    tags: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    link: "/projects",
    featured: true,
    category: "fullstack"
  },
]

interface Ripple {
  id: number
  x: number
  y: number
  size: number
  progress: number
  createdAt: number
}

export default function Home() {
  
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [nextId, setNextId] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newRipple: Ripple = {
      id: nextId,
      x,
      y,
      size: Math.min(rect.width, rect.height) * 0.12,
      progress: 0,
      createdAt: Date.now()
    }
    
    setRipples(prev => {
      const updatedRipples = prev.map(ripple => ({
        ...ripple,
        progress: Math.min(ripple.progress + 0.1, 1)
      }))
      
      return [newRipple, ...updatedRipples].slice(0, 10)
    })
    
    setNextId(prev => prev + 1)
  }, [nextId])

  // Prevenir el comportamiento por defecto del click
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const updateRipples = useCallback(() => {
    setRipples(prev => 
      prev.map(ripple => ({
        ...ripple,
        progress: Math.min(ripple.progress + 0.002, 1)
      })).filter(ripple => {
        const age = Date.now() - ripple.createdAt
        return age < 4000
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

  const handleMouseLeave = useCallback(() => {
    setRipples([])
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900">
      
     {/* Hero Section Interactiva */}
      <section 
        ref={containerRef}
        className="pt-32 pb-20 px-4 relative min-h-screen"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
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
        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-16 opacity-30 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 animate-float" style={{ animationDelay: '3s' }}>
          <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Elemento decorativo superior */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-0.5 bg-white/70"></div>
            <div className="w-3 h-3 rounded-full bg-amber-300 mx-4 mt-1"></div>
            <div className="w-16 h-0.5 bg-white/70"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
            Diseño con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200 drop-shadow-md">
              propósito
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Creo experiencias digitales que respiran calma, funcionan con precisión 
            y conectan con esencia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/projects" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-light tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Explorar Proyectos
            </Link>
            <Link 
              href="/about" 
              className="text-white/80 px-8 py-4 font-light tracking-wide hover:text-white transition-all duration-300 flex items-center group"
            >
              Conoce mi camino
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Ondas con crecimiento más grande y duradero */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {ripples.map((ripple) => {
            const scale = 1 + (ripple.progress * 6) // ↑ Crece de 1x a 7x (antes 4x)
            const opacity = 0.7 - (ripple.progress * 0.7) // ↑ Más opacidad inicial
            const borderWidth = 1.5 - (ripple.progress * 1.4) // ↑ Borde más grueso
            
            return (
              <div
                key={ripple.id}
                className="absolute rounded-full border border-teal-400/50"
                style={{
                  left: ripple.x - (ripple.size * scale) / 2,
                  top: ripple.y - (ripple.size * scale) / 2,
                  width: ripple.size * scale,
                  height: ripple.size * scale,
                  opacity: opacity,
                  borderWidth: `${borderWidth}px`,
                  transition: 'all 0.1s linear'
                }}
              />
            )
          })}
        </div>

        {/* Punto central más visible */}
        {ripples.length > 0 && (
          <div
            className="absolute w-3 h-3 bg-amber-400 rounded-full pointer-events-none animate-pulse"
            style={{
              left: ripples[0].x - 1.5,
              top: ripples[0].y - 1.5,
            }}
          />
        )}
      </section>



      {/* Sección de Proyectos Destacados */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto">
          
          {/* Header de la sección */}
          <div className="text-center mb-16">
            <div className="inline-block relative mb-6">
              <div className="w-12 h-0.5 bg-teal-400 absolute -left-16 top-1/2 transform -translate-y-1/2"></div>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight inline-block">
                Proyectos Recientes
              </h2>
              <div className="w-12 h-0.5 bg-teal-400 absolute -right-16 top-1/2 transform -translate-y-1/2"></div>
            </div>
            <p className="text-slate-300 text-lg font-light tracking-wide max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes donde el diseño se encuentra con la funcionalidad
            </p>
          </div>

          {/* Grid de proyectos destacados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> {/* ← gap-6 en lugar de gap-8 para móvil */}
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* CTA para ver todos los proyectos */}
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-teal-300 hover:text-teal-200 font-light tracking-wide transition-all duration-300 group/cta border border-teal-300/30 hover:border-teal-300/70 px-8 py-4"
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

        </div>
      </section>

      {/* Sección de principios (existente) */}
      <section className="bg-white/5 backdrop-blur-sm py-20 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              </div>
              <h3 className="text-white font-light text-xl mb-3">Simplicidad</h3>
              <p className="text-slate-300 font-light leading-relaxed">
                Menos es más. Cada elemento tiene un propósito y contribuye a la armonía general.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              </div>
              <h3 className="text-white font-light text-xl mb-3">Precisión</h3>
              <p className="text-slate-300 font-light leading-relaxed">
                Atención meticulosa a cada detalle, desde el código hasta la experiencia final.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
              <h3 className="text-white font-light text-xl mb-3">Armonía</h3>
              <p className="text-slate-300 font-light leading-relaxed">
                Equilibrio perfecto entre estética y funcionalidad, forma y contenido.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}