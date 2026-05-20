// /types/index.ts
import type { StaticImageData } from 'next/image'

export interface Project {
  id: number
  title: string
  description: string
  image: string | StaticImageData 
  tags: string[]
  link: string
  featured?: boolean
  category: 'web' | 'mobile' | 'design' | 'fullstack'
  // Opcional: añade propiedades que puedas necesitar
  github?: string
  year?: number
  status?: 'live' | 'development' | 'archived'
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'tools'
}

export interface HeaderProps {
  currentPath?: string
}

// --- Servicios ---
export type ServiceCategoryId = 'web' | 'bot' | 'crm' | 'n8n'

export interface ServiceTier {
  name: string              // "Landing page", "Bot FAQ simple"...
  priceRange: string        // "300 – 600€"
  priceFrom: number         // 300 (para ordenar y mostrar "Desde X€")
  description: string       // 1 línea
  bestFor: string           // "Para quien necesita..."
  deliveryTime: string      // "1 semana"
  features: string[]        // qué incluye
  recommended?: boolean     // tier intermedio destacado
}

export interface ServiceCategory {
  id: ServiceCategoryId
  icon: string              // emoji
  title: string             // "Desarrollo Web"
  tagline: string           // pitch corto
  description: string       // párrafo más largo
  audience: string          // "Para pymes, profesionales..."
  priceFromLabel: string    // "Desde 300€"
  tiers: ServiceTier[]      // 3 niveles
}

export interface RecurringPlan {
  name: string              // "Mantenimiento web"
  price: string             // "50 – 150€/mes"
  description: string
  includes: string[]
  icon: string
}