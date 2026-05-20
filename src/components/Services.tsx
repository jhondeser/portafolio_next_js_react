'use client'

import Link from 'next/link'
import ServiceCard from './SevicesCard'
import { serviceCategories } from '@/data/services_data'

export default function Services() {
  return (
    <section
      id="servicios"
      className="min-h-screen py-20 px-4 relative bg-gradient-to-br from-slate-900 via-teal-900/30 to-slate-900 overflow-hidden"
    >
      {/* Fondos suaves */}
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
              Reales
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Cuatro líneas claras: web, bots con IA, CRM y automatizaciones.
          </p>
          <p className="text-base text-white/70 max-w-2xl mx-auto font-light">
            Cada categoría tiene 3 niveles según el alcance — abajo encuentras la comparativa completa con todo lo que incluye cada uno.
          </p>
        </div>

        {/* Grid de 4 categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.id} category={category} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-white mb-4 drop-shadow-lg">
              ¿No sabes qué encaja con tu caso?
            </h3>
            <p className="text-white/95 mb-6 font-light drop-shadow-md">
              Cuéntame tu proyecto en una llamada de 20 minutos y te propongo el camino más corto, sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-light tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-teal-300/30"
              >
                Reservar llamada gratuita
              </Link>
              <a
                href="#paquetes"
                className="text-white/80 px-8 py-4 font-light tracking-wide hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                Ver comparativa de paquetes
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
