'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import ServiceCard from './SevicesCard'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
}

export default function Services() {
  const [activeService, setActiveService] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const services: Service[] = [
    {
      id: 1,
      title: "Desarrollo Frontend",
      description: "Aplicaciones web modernas y responsivas con las últimas tecnologías",
      icon: "💻",
      features: [
        "Next.js & React",
        "TypeScript",
        "Tailwind CSS",
        "Animaciones avanzadas",
        "Optimización SEO",
        "PWA (Progressive Web Apps)"
      ]
    },
    {
      id: 2,
      title: "Experiencia de Usuario",
      description: "Interfaces intuitivas que conectan emocionalmente con tus usuarios",
      icon: "🎨",
      features: [
        "Diseño UI/UX",
        "Prototipado interactivo",
        "Micro-interacciones",
        "Accesibilidad Web",
        "Design Systems",
        "User Testing"
      ]
    },
    {
      id: 3,
      title: "Desarrollo Full Stack",
      description: "Soluciones completas desde el frontend hasta la base de datos",
      icon: "🚀",
      features: [
        "APIs REST & GraphQL",
        "Bases de datos",
        "Autenticación",
        "Despliegue en la nube",
        "CI/CD",
        "Monitorización"
      ]
    },
    {
      id: 4,
      title: "Optimización Web",
      description: "Sitios ultrarrápidos que mejoran el SEO y la conversión",
      icon: "⚡",
      features: [
        "Core Web Vitals",
        "Lazy Loading",
        "Cache Optimization",
        "Bundle Analysis",
        "Performance Audits",
        "CDN Configuration"
      ]
    },
    {
      id: 5,
      title: "Consultoría Técnica",
      description: "Asesoramiento especializado para tu proyecto digital",
      icon: "🔍",
      features: [
        "Arquitectura de software",
        "Code Review",
        "Mentoría de equipos",
        "Planificación técnica",
        "Migraciones legacy",
        "Best Practices"
      ]
    },
    {
      id: 6,
      title: "Mantenimiento & Soporte",
      description: "Soporte continuo para mantener tu aplicación en perfecto estado",
      icon: "🛠️",
      features: [
        "Updates de seguridad",
        "Bug fixing",
        "Mejoras continuas",
        "Soporte 24/7",
        "Backups automáticos",
        "Monitoring"
      ]
    }
  ]

  // Auto-rotate services (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [services.length])

  return (
    <section 
      ref={containerRef}
      className="min-h-screen py-20 px-4 relative bg-gradient-to-br from-slate-900 via-teal-900/30 to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-0.5 bg-white/70"></div>
            <div className="w-3 h-3 rounded-full bg-amber-300 mx-4 mt-1"></div>
            <div className="w-16 h-0.5 bg-white/70"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
            Servicios{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200 drop-shadow-md">
              Especializados
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Soluciones digitales completas que transforman ideas en experiencias excepcionales
          </p>
        </div>

        {/* Services Grid con las nuevas tarjetas flip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-white mb-4 drop-shadow-lg">
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </h3>
            <p className="text-white/95 mb-6 font-light drop-shadow-md">
              Trabajemos juntos para crear algo extraordinario
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-light tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-teal-300/30"
              >
                Iniciar Proyecto
              </Link>
              <Link 
                href="/projects" 
                className="text-white/80 px-8 py-4 font-light tracking-wide hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                Ver Proyectos
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}