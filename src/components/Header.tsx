'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItem } from '@/types'

const navigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Sobre Mí', href: '/about' },
  { label: 'Contacto', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Determinar si estamos en la página de inicio
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={closeMobileMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 border border-teal-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-teal-600 rounded-full opacity-80"></div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500 rounded-full opacity-70"></div>
            </div>
            <span className={`font-light text-xl transition-all duration-300 group-hover:text-teal-700 ${
              isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'
            }`}>
              Zen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-light tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-teal-600'
                      : (isScrolled || !isHomePage)
                      ? 'text-slate-600 hover:text-teal-700' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-teal-500 rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`border px-6 py-2.5 font-light tracking-wide transition-all duration-300 relative overflow-hidden group ${
                isScrolled || !isHomePage
                  ? 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-slate-800'
              }`}
            >
              <span className="relative z-10">Iniciar Proyecto</span>
              <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isScrolled || !isHomePage ? 'bg-teal-600' : 'bg-white'
              }`}></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded transition-colors ${
              isScrolled || !isHomePage
                ? 'text-slate-600 hover:bg-slate-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                } ${(isScrolled || !isHomePage) ? 'bg-slate-600' : 'bg-white'}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                } ${(isScrolled || !isHomePage) ? 'bg-slate-600' : 'bg-white'}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                } ${(isScrolled || !isHomePage) ? 'bg-slate-600' : 'bg-white'}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Siempre con fondo visible */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-500 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <nav className="py-8 px-4 space-y-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block py-4 px-4 rounded border-l-4 transition-all duration-300 ${
                    isActive
                      ? 'bg-teal-50 text-teal-600 border-teal-500'
                      : 'text-slate-600 border-slate-300 hover:text-teal-600 hover:border-teal-400'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="pt-6 border-t border-slate-200">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full border border-teal-600 text-teal-600 text-center py-4 px-4 font-light tracking-wide hover:bg-teal-600 hover:text-white transition-all duration-300"
              >
                Iniciar Proyecto
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}