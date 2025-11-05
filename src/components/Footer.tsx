import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        
        {/* Sección principal del footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 border border-teal-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-teal-400 rounded-full opacity-80"></div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-400 rounded-full opacity-70"></div>
                </div>
                <span className="font-light text-2xl text-white">Zen</span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed max-w-md text-lg">
                Creo experiencias digitales que respiran calma y funcionan con precisión. 
                Donde cada pixel tiene propósito y cada interacción tiene significado.
              </p>
            </div>

            {/* Navegación */}
            <div>
              <h3 className="text-white font-light text-lg mb-6 tracking-wide">Navegación</h3>
              <nav className="space-y-4">
                {[
                  { label: 'Inicio', href: '/' },
                  { label: 'Proyectos', href: '/projects' },
                  { label: 'Sobre Mí', href: '/about' },
                  { label: 'Contacto', href: '/contact' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-slate-400 hover:text-teal-400 font-light tracking-wide transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-white font-light text-lg mb-6 tracking-wide">Conectemos</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hola@ejemplo.com"
                  className="block text-slate-400 hover:text-teal-400 font-light tracking-wide transition-colors duration-300"
                >
                  hola@ejemplo.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="block text-slate-400 hover:text-teal-400 font-light tracking-wide transition-colors duration-300"
                >
                  +1 234 567 890
                </a>
                <div className="flex space-x-4 pt-2">
                  {[
                    { name: 'GitHub', href: 'https://github.com' },
                    { name: 'LinkedIn', href: 'https://linkedin.com' },
                    { name: 'Twitter', href: 'https://twitter.com' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-slate-500 hover:text-teal-400 transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria sutil */}
        <div className="border-t border-slate-800"></div>

        {/* Bottom section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-slate-500 font-light tracking-wide text-sm">
              © {currentYear} Zen. Todos los derechos reservados.
            </div>

            {/* Enlaces legales */}
            <div className="flex space-x-6">
              {[
                { label: 'Privacidad', href: '/privacy' },
                { label: 'Términos', href: '/terms' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-500 hover:text-teal-400 font-light tracking-wide text-sm transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Hecho con amor */}
            <div className="text-slate-500 font-light tracking-wide text-sm flex items-center space-x-2">
              <span>Hecho con</span>
              <div className="w-4 h-4 bg-rose-400 rounded-full opacity-70"></div>
              <span>y</span>
              <div className="w-3 h-3 bg-teal-400 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}