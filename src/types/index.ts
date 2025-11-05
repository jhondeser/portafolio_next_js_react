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