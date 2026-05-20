'use client'

import { useState } from 'react'
import type { ServiceCategory } from '@/types'

interface ServiceCardProps {
  category: ServiceCategory
}

/**
 * Tarjeta resumen de una categoría de servicio (Web, Bot, CRM o n8n).
 * Anverso: icono, título, tagline, "desde X€" y para quién es.
 * Reverso: los 3 niveles disponibles con su rango de precio.
 */
export default function ServiceCard({ category }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const handleInteraction = () => setIsFlipped((v) => !v)
  const handleTouchStart = () => setIsTouched(true)
  const handleTouchEnd = () => setTimeout(() => setIsTouched(false), 300)

  return (
    <div
      className="group h-96 [perspective:1000px]"
      onMouseEnter={() => !isTouched && setIsFlipped(true)}
      onMouseLeave={() => !isTouched && setIsFlipped(false)}
      onClick={handleInteraction}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-slate-200/20 group-hover:border-teal-300/60 transition-all duration-500 shadow-sm [backface-visibility:hidden] cursor-pointer flex flex-col">
          <div className="flex flex-col h-full p-6 text-center">
            {/* Icono */}
            <div className="text-5xl mb-4">{category.icon}</div>

            {/* Título */}
            <h3 className="text-2xl font-light text-white mb-2 tracking-wide">
              {category.title}
            </h3>

            {/* Tagline */}
            <p className="text-teal-200/90 text-sm font-light mb-4 leading-relaxed">
              {category.tagline}
            </p>

            {/* Para quién */}
            <p className="text-white/70 text-xs font-light mb-6 leading-relaxed flex-1">
              {category.audience}
            </p>

            {/* Precio desde */}
            <div className="pt-4 border-t border-white/15">
              <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">
                Inversión
              </span>
              <span className="text-white text-xl font-light">
                {category.priceFromLabel}
              </span>
            </div>

            {/* Indicador hover */}
            <div className="mt-4">
              <div className="hidden md:block text-white/60 text-xs font-light tracking-wide">
                Pasa el cursor para ver los niveles
              </div>
              <div className="md:hidden text-white/60 text-xs font-light tracking-wide">
                Toca para ver los niveles
              </div>
            </div>
          </div>
        </div>

        {/* BACK — los 3 niveles */}
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm border border-teal-300/50 [backface-visibility:hidden] [transform:rotateY(180deg)] cursor-pointer flex flex-col">
          <div className="h-full flex flex-col p-5">
            <h4 className="text-base font-light text-teal-300 mb-4 tracking-wide text-center border-b border-white/10 pb-3">
              {category.title} · Niveles
            </h4>

            <ul className="space-y-3 flex-1 overflow-y-auto pr-1">
              {category.tiers.map((tier) => (
                <li
                  key={tier.name}
                  className={`p-3 border ${
                    tier.recommended
                      ? 'border-amber-300/40 bg-amber-300/5'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-white font-light text-sm leading-tight">
                      {tier.name}
                    </span>
                    {tier.recommended && (
                      <span className="text-[10px] text-amber-300 tracking-widest uppercase whitespace-nowrap">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-teal-200 font-light">{tier.priceRange}</span>
                    <span className="text-white/50">{tier.deliveryTime}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="text-center pt-3 mt-3 border-t border-white/10">
              <span className="text-teal-300/80 text-xs font-light tracking-wide">
                Mira la tabla completa abajo ↓
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
