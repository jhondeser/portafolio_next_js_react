'use client'

import { recurringPlans } from '@/data/services_data'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

/**
 * Bloque de planes recurrentes mensuales:
 * mantenimiento web, soporte bot, CRM gestionado y hosting n8n.
 */
export default function RecurringPlans() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-900/20 relative overflow-hidden"
    >
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={`absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transitionDelay: '0.2s' }}
        ></div>
        <div 
          className={`absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
          style={{ transitionDelay: '0.4s' }}
        ></div>
        
        {/* Nuevos elementos decorativos flotantes */}
        <div className="absolute top-20 right-20 opacity-30 animate-float">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-32 left-20 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 left-10 opacity-15 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-1 h-1 bg-emerald-300 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Encabezado con animación de entrada */}
        <div 
          className={`text-center mb-14 max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-0.5 bg-white/70"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-300 mx-3 mt-1.5"></div>
            <div className="w-12 h-0.5 bg-white/70"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            Soporte y mantenimiento{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
              mensual
            </span>
          </h2>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Una vez entregado el proyecto, puedes seguir tranquilo con un plan mensual.
            Yo me encargo de que todo siga funcionando, evoluciona y crezca contigo.
          </p>
        </div>

        {/* Grid de tarjetas con animaciones escalonadas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {recurringPlans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-emerald-300/40 transition-all duration-500 flex flex-col relative overflow-hidden group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.1 + idx * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Efecto de brillo al hacer hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transition-transform duration-700 -skew-x-12 ${
                  hoveredCard === idx ? 'translate-x-full' : '-translate-x-full'
                }`}
              />
              
              {/* Icono con animación sutil al hover */}
              <div 
                className={`text-3xl mb-3 transition-all duration-300 ${
                  hoveredCard === idx ? 'scale-110 rotate-6' : 'scale-100'
                }`}
              >
                {plan.icon}
              </div>
              
              <h3 className="text-lg font-light text-white mb-2 tracking-wide">{plan.name}</h3>
              
              {/* Precio con efecto glow */}
              <p 
                className={`text-emerald-200/90 text-xl font-light mb-1 transition-all duration-300 ${
                  hoveredCard === idx ? 'text-emerald-200 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : ''
                }`}
              >
                {plan.price}
              </p>
              
              <p className="text-white/60 text-xs font-light mb-4 leading-relaxed">
                {plan.description}
              </p>
              
              {/* Lista de características con check animados */}
              <ul className="space-y-2 mb-5 flex-1">
                {plan.includes.map((item, itemIdx) => (
                  <li 
                    key={item} 
                    className={`flex items-start text-white/80 text-xs font-light transition-all duration-300 ${
                      hoveredCard === idx ? 'translate-x-1' : 'translate-x-0'
                    }`}
                    style={{ transitionDelay: `${itemIdx * 20}ms` }}
                  >
                    <svg
                      className={`w-3 h-3 text-emerald-300 mr-2 mt-0.5 flex-shrink-0 transition-all duration-300 ${
                        hoveredCard === idx ? 'scale-110' : 'scale-100'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Línea decorativa inferior que aparece al hover */}
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-500 ${
                  hoveredCard === idx ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Botón CTA con animación */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/contact"
            className="inline-flex items-center text-emerald-200 hover:text-white font-light tracking-wide transition-all duration-300 border border-emerald-300/40 hover:border-emerald-300 px-8 py-4 group relative overflow-hidden"
          >
            {/* Efecto de fondo al hover */}
            <span className="absolute inset-0 bg-emerald-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            
            <span className="relative z-10">Hablemos de tu plan mensual</span>
            <svg
              className="relative z-10 w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Estilos para animación de float */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}