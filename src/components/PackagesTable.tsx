'use client'

import { useState } from 'react'
import Link from 'next/link'
import { serviceCategories } from '@/data/services_data'
import type { ServiceCategoryId } from '@/types'

/**
 * Tabla comparativa de paquetes por categoría.
 * Muestra los 3 niveles lado a lado para cada categoría seleccionable por tabs.
 */
export default function PackagesTable() {
  const [activeId, setActiveId] = useState<ServiceCategoryId>(serviceCategories[0].id)
  const active = serviceCategories.find((c) => c.id === activeId) ?? serviceCategories[0]

  return (
    <section
      id="paquetes"
      className="py-20 px-4 bg-white/5 backdrop-blur-sm border-t border-white/10 relative overflow-hidden"
    >
      {/* Fondos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-0.5 bg-white/70"></div>
            <div className="w-3 h-3 rounded-full bg-amber-300 mx-4 mt-1"></div>
            <div className="w-16 h-0.5 bg-white/70"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Comparativa de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
              paquetes
            </span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-light max-w-2xl mx-auto">
            Elige la categoría y revisa los tres niveles. Todos los precios son orientativos y se ajustan al alcance final.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {serviceCategories.map((cat) => {
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-light tracking-wide border transition-all duration-300 ${
                  isActive
                    ? 'bg-teal-500/20 border-teal-300 text-white'
                    : 'bg-white/5 border-white/10 text-white/70 hover:border-teal-300/40 hover:text-white'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.title}</span>
              </button>
            )
          })}
        </div>

        {/* Resumen de la categoría activa */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-white/80 font-light leading-relaxed">{active.description}</p>
        </div>

        {/* Grid de los 3 niveles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {active.tiers.map((tier) => {
            const isRecommended = !!tier.recommended
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col p-6 backdrop-blur-sm border transition-all duration-500 ${
                  isRecommended
                    ? 'bg-gradient-to-b from-amber-400/10 to-teal-500/10 border-amber-300/50 md:-translate-y-2 shadow-xl shadow-amber-500/5'
                    : 'bg-white/5 border-white/15 hover:border-teal-300/40'
                }`}
              >
                {isRecommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-400 text-slate-900 text-[10px] font-medium tracking-widest uppercase">
                    Más solicitado
                  </span>
                )}

                <h3 className="text-xl font-light text-white mb-2 tracking-wide">
                  {tier.name}
                </h3>
                <p className="text-white/70 text-sm font-light leading-relaxed mb-4">
                  {tier.description}
                </p>

                {/* Precio */}
                <div className="mb-5 pb-5 border-b border-white/10">
                  <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-1">
                    Inversión
                  </span>
                  <span className="text-3xl font-light text-white">{tier.priceRange}</span>
                  <span className="block text-teal-200/80 text-xs font-light mt-2">
                    Entrega en {tier.deliveryTime}
                  </span>
                </div>

                {/* Para quién */}
                <div className="mb-5">
                  <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">
                    Ideal para
                  </span>
                  <p className="text-white/85 text-sm font-light leading-relaxed">
                    {tier.bestFor}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-6">
                  <span className="block text-white/40 text-[10px] uppercase tracking-widest mb-3">
                    Incluye
                  </span>
                  <ul className="space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start text-white/90 text-sm font-light">
                        <svg
                          className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`block text-center px-5 py-3 font-light tracking-wide transition-all duration-300 border ${
                    isRecommended
                      ? 'bg-amber-400 border-amber-400 text-slate-900 hover:bg-amber-300'
                      : 'border-white/30 text-white hover:bg-white/10 hover:border-teal-300/50'
                  }`}
                >
                  Solicitar este paquete
                </Link>
              </div>
            )
          })}
        </div>

        {/* Nota final */}
        <p className="text-center text-white/50 text-xs font-light mt-10 max-w-2xl mx-auto">
          * Los precios mostrados son rangos orientativos. El presupuesto final se cierra tras una llamada
          para entender el alcance real, integraciones necesarias y plazos.
        </p>
      </div>
    </section>
  )
}
