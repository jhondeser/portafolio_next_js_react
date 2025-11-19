'use client'

import { useState } from 'react'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const handleInteraction = () => {
    setIsFlipped(!isFlipped)
  }

  const handleTouchStart = () => {
    setIsTouched(true)
  }

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouched(false), 300)
  }

  return (
    <div 
      className="group h-80 [perspective:1000px]"
      onMouseEnter={() => !isTouched && setIsFlipped(true)}
      onMouseLeave={() => !isTouched && setIsFlipped(false)}
      onClick={handleInteraction}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
        isFlipped ? '[transform:rotateY(180deg)]' : ''
      }`}>
        
        {/* FRONT - Logo y título */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-slate-200 rounded-none group-hover:border-teal-300 transition-all duration-500 shadow-sm [backface-visibility:hidden] cursor-pointer">
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            {/* Icono del servicio */}
            <div className="text-5xl mb-6 text-teal-600">
              {service.icon}
            </div>
            
            {/* Título */}
            <h3 className="text-2xl font-light text-white/90 mb-4 tracking-wide">
              {service.title}
            </h3>
            
            {/* Descripción breve */}
            <p className="text-white/90 leading-relaxed font-light text-sm max-w-xs">
              {service.description}
            </p>
            
            {/* Indicadores de interacción */}
            <div className="mt-6 flex flex-col items-center gap-2">
              {/* Para desktop */}
              <div className="hidden md:block  text-white/90 text-xs font-light tracking-wide group-hover:opacity-100 transition-opacity duration-300">
                Pasa el cursor para más detalles
              </div>
              {/* Para móvil */}
              <div className="md:hidden text-white/90 text-xs font-light tracking-wide flex items-center gap-1">
                <span>Toca para ver detalles</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* BACK - Features */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-teal-300 rounded-none p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] cursor-pointer">
          <div className="h-full flex flex-col">
            {/* Título en el back */}
            <h4 className="text-lg font-light text-teal-700 mb-4 tracking-wide text-center">
              {service.title}
            </h4>
            
            {/* Lista de features */}
            <div className="flex-1 overflow-hidden">
                <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
                    <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                        <li 
                        key={index}
                        className="flex items-start text-slate-700 text-sm leading-relaxed font-light group/feature hover:bg-white/50 rounded-lg p-2 transition-all duration-300"
                        >
                        <div className="flex items-start w-full">
                            <div className="flex-shrink-0 mt-0.5">
                            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center group-hover/feature:bg-teal-200 transition-colors duration-300">
                                <svg 
                                className="w-3 h-3 text-teal-600" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                                >
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            </div>
                            <span className="ml-3 flex-1 group-hover/feature:text-slate-800 transition-colors duration-300">
                            {feature}
                            </span>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            
            {/* Indicadores de interacción en el back */}
            <div className="text-center mt-4 pt-4 border-t border-slate-200">
              <div className="flex flex-col items-center gap-2">
                {/* Para desktop */}
                <div className="hidden md:block text-slate-400 text-xs font-light tracking-wide">
                  Aleja el cursor para volver
                </div>
                {/* Para móvil */}
                <div className="md:hidden text-teal-600 text-xs font-light tracking-wide flex items-center gap-1">
                  <span>Toca para volver</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}