'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types'

interface FeaturedProjectCardProps {
  project: Project
  index: number
}

export default function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    // Crear el observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Cuando la card entra en el viewport
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            // Delay progresivo basado en el índice
            const delay = 300 + (index * 300) // 300ms, 500ms, 700ms
            const timer = setTimeout(() => {
              setIsVisible(true)
              hasAnimatedRef.current = true
            }, delay)
            
            return () => clearTimeout(timer)
          }
        })
      },
      {
        threshold: 0.2, // Cuando el 20% de la card sea visible
        rootMargin: '0px 0px -50px 0px' // Ajuste fino (opcional)
      }
    )

    // Observar la card
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    // Limpiar observer
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
      observer.disconnect()
    }
  }, [index])

  // Determinar la dirección de entrada según el índice
  const getEntranceDirection = () => {
    if (!isVisible) {
      switch(index) {
        case 0: // Izquierda
          return '-translate-x-20 opacity-0'
        case 1: // Centro
          return '-translate-y-20 opacity-0'
        case 2: // Derecha
          return 'translate-x-20 opacity-0'
        default:
          return 'opacity-0 translate-y-12'
      }
    }
    return 'opacity-100 translate-x-0 translate-y-0'
  }

  return (
    <article 
      ref={cardRef}
      className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-none hover:border-teal-300/50 transition-all duration-700 hover:transform hover:-translate-y-2 overflow-hidden ${getEntranceDirection()}`}
      style={{ 
        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      
      {/* Contenedor de imagen */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={project.image} 
          alt={`Captura del proyecto ${project.title}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
        
        {/* Número del proyecto */}
        <div className="absolute top-4 left-4">
          <div className="w-8 h-8 bg-teal-500/90 text-white flex items-center justify-center text-sm font-light">
            {index + 1}
          </div>
        </div>

        {/* Badge destacado */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-amber-500/90 text-white px-3 py-1 text-xs tracking-wider font-light">
            Destacado
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        {/* Categoría */}
        <span className="text-teal-300 text-sm font-light tracking-wide uppercase">
          {project.category}
        </span>
        
        {/* Título */}
        <h3 className="text-xl font-light text-white mb-3 tracking-wide group-hover:text-teal-300 transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Descripción */}
        <p className="text-slate-300 mb-4 leading-relaxed font-light text-sm">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="bg-white/10 text-slate-300 px-2 py-1 text-xs font-light tracking-wide border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Enlace */}
        <Link 
          href={project.link} 
          className="inline-flex items-center text-teal-300 hover:text-teal-200 font-light tracking-wide transition-all duration-300 group/link"
        >
          <span>Ver proyecto</span>
          <svg 
            className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}