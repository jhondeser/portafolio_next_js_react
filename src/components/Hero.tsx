'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Ripple {
  id: string // Cambiar a string para IDs únicos
  x: number
  y: number
  size: number
  progress: number
  createdAt: number
}

interface WaterLily {
  id: string
  x: number
  y: number
  size: number
  rotation: number
  isAnimating: boolean
  animationProgress: number
}

export default function Hero() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [waterLilies, setWaterLilies] = useState<WaterLily[]>([])
  const nextIdRef = useRef(0) // Usar useRef en lugar de useState
  const containerRef = useRef<HTMLDivElement>(null)
  const lastMouseMoveTime = useRef<number>(0)

  // POSICIONES MANUALES - Puedes ajustar estas coordenadas
  const manualPositions = [
    { x: 100, y: 150 },   // Superior izquierda
    { x: 300, y: 100 },   // Superior centro-izquierda
    { x: 500, y: 200 },   // Superior centro
    { x: 700, y: 150 },   // Superior derecha
    { x: 200, y: 400 },   // Centro izquierda
    { x: 600, y: 350 },   // Centro derecha
    { x: 150, y: 600 },   // Inferior izquierda
    { x: 650, y: 550 }    // Inferior derecha
  ]

  // Inicializar nenúfares con posiciones controladas
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    const newLilies: WaterLily[] = []
    const lilyCount = 8

    for (let i = 0; i < lilyCount; i++) {
      // Usar posición manual si existe, sino aleatoria
      const position = manualPositions[i] || {
        x: Math.random() * (width - 100) + 50,
        y: Math.random() * (height - 100) + 50
      }

      newLilies.push({
        id: `lily-${i}-${Date.now()}-${Math.random()}`,
        x: position.x,
        y: position.y,
        size: Math.random() * 40 + 30,
        rotation: Math.random() * 360,
        isAnimating: false,
        animationProgress: 0
      })
    }

    setWaterLilies(newLilies)
  }, [])

  // FUNCIÓN PARA MOVER UN NENÚFAR ESPECÍFICO
  const moveLily = useCallback((lilyId: string, newX: number, newY: number) => {
    setWaterLilies(prev => 
      prev.map(lily => 
        lily.id === lilyId 
          ? { ...lily, x: newX, y: newY }
          : lily
      )
    )
  }, [])

  // FUNCIÓN PARA REORGANIZAR TODOS LOS NENÚFARES
  const reorganizeLilies = useCallback((pattern: 'random' | 'circle' | 'grid' | 'manual' = 'manual') => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    setWaterLilies(prev => 
      prev.map((lily, index) => {
        let newX, newY

        switch (pattern) {
          case 'random':
            newX = Math.random() * (width - 100) + 50
            newY = Math.random() * (height - 100) + 50
            break

          case 'circle':
            const centerX = width / 2
            const centerY = height / 2
            const radius = Math.min(width, height) * 0.3
            const angle = (index / prev.length) * 2 * Math.PI
            newX = centerX + Math.cos(angle) * radius
            newY = centerY + Math.sin(angle) * radius
            break

          case 'grid':
            const cols = 3
            const rows = Math.ceil(prev.length / cols)
            const col = index % cols
            const row = Math.floor(index / cols)
            newX = (width / (cols + 1)) * (col + 1)
            newY = (height / (rows + 1)) * (row + 1)
            break

          case 'manual':
          default:
            const manualPos = manualPositions[index] || {
              x: Math.random() * (width - 100) + 50,
              y: Math.random() * (height - 100) + 50
            }
            newX = manualPos.x
            newY = manualPos.y
            break
        }

        return { ...lily, x: newX, y: newY }
      })
    )
  }, [])

  // MOVER NENÚFAR A UNA POSICIÓN ALEATORIA
  const randomizeLily = useCallback((lilyId: string) => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    const newX = Math.random() * (width - 100) + 50
    const newY = Math.random() * (height - 100) + 50

    moveLily(lilyId, newX, newY)
  }, [moveLily])

  // EJEMPLO: Mover todos los nenúfares a posiciones aleatorias después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      reorganizeLilies('random')
    }, 3000)

    return () => clearTimeout(timer)
  }, [reorganizeLilies])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now()
    if (now - lastMouseMoveTime.current < 100) return
    lastMouseMoveTime.current = now

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newRipple: Ripple = {
      id: `ripple-${nextIdRef.current}-${Date.now()}-${Math.random()}`, // ID único
      x,
      y,
      size: Math.min(rect.width, rect.height) * 0.08,
      progress: 0,
      createdAt: Date.now()
    }
    
    setRipples(prev => {
      const updatedRipples = prev.slice(0, 7).map(ripple => ({
        ...ripple,
        progress: ripple.progress + 0.05
      }))
      
      return [newRipple, ...updatedRipples]
    })
    
    nextIdRef.current += 1 // Incrementar la referencia
  }, [])

  const handleLilyHover = useCallback((lilyId: string) => {
    setWaterLilies(prev => 
      prev.map(lily => 
        lily.id === lilyId && !lily.isAnimating
          ? { ...lily, isAnimating: true, animationProgress: 0 }
          : lily
      )
    )
  }, [])

  const updateRipples = useCallback(() => {
    setRipples(prev => 
      prev.map(ripple => ({
        ...ripple,
        progress: Math.min(ripple.progress + 0.015, 1)
      })).filter(ripple => {
        const age = Date.now() - ripple.createdAt
        return age < 3000 && ripple.progress < 1
      })
    )
  }, [])

  const updateWaterLilies = useCallback(() => {
    setWaterLilies(prev => 
      prev.map(lily => {
        if (!lily.isAnimating) return lily

        const newProgress = Math.min(lily.animationProgress + 0.08, 1)
        if (newProgress >= 1) {
          return { ...lily, isAnimating: false, animationProgress: 0 }
        }

        return { ...lily, animationProgress: newProgress }
      })
    )
  }, [])

  useEffect(() => {
    let animationFrameId: number
    
    const animate = () => {
      updateRipples()
      updateWaterLilies()
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [updateRipples, updateWaterLilies])

  // DEBUG: Mostrar controles en desarrollo
  const [showControls, setShowControls] = useState(false)

  return (
    <section 
      ref={containerRef}
      className="pt-20 pb-20 px-4 relative min-h-screen overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
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
      
      {/* Controles de desarrollo - ESQUINA INFERIOR DERECHA */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm border border-white/20">
          <button 
            onClick={() => setShowControls(!showControls)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            
          </button>
          
          {showControls && (
            <div className="mt-3 space-y-2 min-w-[200px]">
              <div className="text-xs text-gray-300 font-medium mb-2">Distribución:</div>
              <button 
                onClick={() => reorganizeLilies('manual')}
                className="block w-full bg-green-600 hover:bg-green-700 px-3 py-2 rounded text-sm transition-colors duration-200 text-left"
              >
                🎯 Posiciones Manuales
              </button>
              <button 
                onClick={() => reorganizeLilies('random')}
                className="block w-full bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded text-sm transition-colors duration-200 text-left"
              >
                🎲 Aleatorio
              </button>
              <button 
                onClick={() => reorganizeLilies('circle')}
                className="block w-full bg-yellow-600 hover:bg-yellow-700 px-3 py-2 rounded text-sm transition-colors duration-200 text-left"
              >
                ⭕ En Círculo
              </button>
              <button 
                onClick={() => reorganizeLilies('grid')}
                className="block w-full bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-sm transition-colors duration-200 text-left"
              >
                🔲 En Grid
              </button>
              
              <div className="pt-2 mt-2 border-t border-white/20">
                <div className="text-xs text-gray-300 font-medium mb-2">Interacción:</div>
                <div className="text-xs text-gray-400">
                  • Click: Animar nenúfar<br/>
                  • Shift + Click: Mover aleatorio
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 opacity-20 animate-float z-5">
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-16 opacity-30 animate-float z-5" style={{ animationDelay: '1.5s' }}>
        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-25 animate-float z-5" style={{ animationDelay: '3s' }}>
        <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
      </div>

      {/* Nenúfares */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {waterLilies.map((lily) => (
          <div
            key={lily.id}
            className="absolute cursor-pointer transition-all duration-500 ease-out pointer-events-auto"
            style={{
              left: `${lily.x}px`,
              top: `${lily.y}px`,
              transform: getLilyTransform(lily),
              transformOrigin: 'center',
              zIndex: 10,
            }}
            onMouseEnter={() => handleLilyHover(lily.id)}
            onClick={(e) => {
              handleLilyHover(lily.id)
              // Opcional: Mover al hacer click + Shift
              if (e.shiftKey) {
                randomizeLily(lily.id)
              }
            }}
          >
            <WaterLilySVG 
              size={lily.size} 
              isAnimating={lily.isAnimating}
            />
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto text-center relative z-20 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          
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
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-light tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 relative z-30"
            >
              Explorar Proyectos
            </Link>
            <Link 
              href="/about" 
              className="text-white/80 px-8 py-4 font-light tracking-wide hover:text-white transition-all duration-300 flex items-center group relative z-30"
            >
              Conoce mi camino
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Ondas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
        {ripples.map((ripple) => {
          const scale = 1 + (ripple.progress * 4)
          const opacity = Math.max(0, 0.6 - (ripple.progress * 0.6))
          const borderWidth = Math.max(0.5, 1.5 - (ripple.progress * 1.2))
          
          return (
            <div
              key={ripple.id} // Ahora cada ripple tiene un ID único
              className="absolute rounded-full border border-teal-300/60 transition-none"
              style={{
                left: ripple.x - (ripple.size * scale) / 2,
                top: ripple.y - (ripple.size * scale) / 2,
                width: ripple.size * scale,
                height: ripple.size * scale,
                opacity: opacity,
                borderWidth: `${borderWidth}px`,
                transform: `scale(${scale})`,
                transition: 'none'
              }}
            />
          )
        })}
      </div>
    </section>
  )

  function getLilyTransform(lily: WaterLily) {
    if (!lily.isAnimating) {
      return `rotate(${lily.rotation}deg)`
    }

    const wave = Math.sin(lily.animationProgress * Math.PI) * 12
    const rotate = Math.sin(lily.animationProgress * Math.PI * 2) * 8
    const scale = 1 + Math.sin(lily.animationProgress * Math.PI) * 0.1
    
    return `translateY(-${wave}px) rotate(${lily.rotation + rotate}deg) scale(${scale})`
  }
}

// Componente SVG del nenúfar (sin cambios)
interface WaterLilySVGProps {
  size: number
  isAnimating: boolean
}

function WaterLilySVG({ size, isAnimating }: WaterLilySVGProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={`transition-all duration-500 ease-out ${
        isAnimating ? 'drop-shadow-lg' : 'drop-shadow-md'
      }`}
      style={{
        filter: isAnimating ? 'drop-shadow(0 0 12px rgba(79, 209, 197, 0.4))' : undefined
      }}
    >
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill="url(#lilyGradient)" 
        stroke="rgba(255,255,255,0.4)" 
        strokeWidth="1.5"
        className="transition-all duration-500"
      />
      
      <circle cx="50" cy="50" r="18" fill="url(#centerGradient)" opacity="0.8" />
      <circle cx="50" cy="50" r="10" fill="#F6E05E" opacity="0.9" />
      
      <g stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none">
        <path d="M 50 12 Q 68 30 50 48 Q 32 30 50 12" />
        <path d="M 50 88 Q 68 70 50 52 Q 32 70 50 88" />
        <path d="M 12 50 Q 30 68 48 50 Q 30 32 12 50" />
        <path d="M 88 50 Q 70 32 52 50 Q 70 68 88 50" />
      </g>

      <circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.6)" />
      <circle cx="70" cy="30" r="2" fill="rgba(255,255,255,0.6)" />
      <circle cx="30" cy="70" r="2" fill="rgba(255,255,255,0.6)" />
      <circle cx="70" cy="70" r="2" fill="rgba(255,255,255,0.6)" />

      <defs>
        <linearGradient id="lilyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#38B2AC" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2C7A7B" stopOpacity="0.8" />
        </linearGradient>
        
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6E05E" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D69E2E" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  )
}