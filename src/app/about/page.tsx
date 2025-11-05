export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-teal-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <div className="w-16 h-0.5 bg-teal-400 absolute -left-20 top-1/2 transform -translate-y-1/2"></div>
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight inline-block">
              Mi Camino
            </h1>
            <div className="w-16 h-0.5 bg-teal-400 absolute -right-20 top-1/2 transform -translate-y-1/2"></div>
          </div>
          <p className="text-slate-600 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Donde el código encuentra propósito y la enseñanza crea conexiones
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          
          {/* Sección Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Columna Izquierda - Filosofía */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-none p-8 mb-8">
                <h2 className="text-2xl font-light text-slate-800 mb-6 tracking-wide border-b border-slate-200 pb-4">
                  Filosofía
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg font-light mb-6">
                  Como <span className="text-teal-600">desarrollador Frontend especializado en React y Next.js</span>, 
                  busco el equilibrio perfecto entre estética y funcionalidad. Mi enfoque combina la precisión técnica 
                  con la elegancia visual, creando interfaces que no solo funcionan, sino que inspiran.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg font-light">
                  Actualmente busco integrarme en un equipo técnico en <span className="text-amber-600">España </span> 
                  donde pueda aportar mi conocimiento en frontend y seguir creciendo como profesional.
                </p>
              </div>

              {/* Experiencia */}
              <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-none p-8">
                <h2 className="text-2xl font-light text-slate-800 mb-8 tracking-wide border-b border-slate-200 pb-4">
                  Experiencia
                </h2>
                
                <div className="space-y-8">
                  {/* Lifecole */}
                  <div className="border-l-4 border-teal-500 pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3 className="text-xl font-light text-slate-800">Lifecole</h3>
                      <span className="text-slate-500 font-light text-sm mt-1 sm:mt-0">Abr 2022 - Presente</span>
                    </div>
                    <p className="text-slate-600 font-light mb-3">Profesor de Tecnología y Programación</p>
                    <ul className="text-slate-600 space-y-2 font-light text-sm">
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-teal-500 rounded-full mt-2 mr-3"></div>
                        Formación práctica en desarrollo web con React, Next.js, HTML, CSS y TypeScript
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-teal-500 rounded-full mt-2 mr-3"></div>
                        Enseñanza de robótica avanzada con Python, Arduino y Raspberry Pi
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-teal-500 rounded-full mt-2 mr-3"></div>
                        Introducción al modelado 3D con Blender y desarrollo en Unity
                      </li>
                    </ul>
                  </div>

                  {/* Aulab */}
                  <div className="border-l-4 border-amber-500 pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3 className="text-xl font-light text-slate-800">Aulab</h3>
                      <span className="text-slate-500 font-light text-sm mt-1 sm:mt-0">Jul 2022 - Jun 2023</span>
                    </div>
                    <p className="text-slate-600 font-light mb-3">Desarrollador Frontend (React / Next.js)</p>
                    <ul className="text-slate-600 space-y-2 font-light text-sm">
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-amber-500 rounded-full mt-2 mr-3"></div>
                        Desarrollo de interfaces web con React y Next.js
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-amber-500 rounded-full mt-2 mr-3"></div>
                        Integración de APIs REST y colaboración en equipos ágiles
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 bg-amber-500 rounded-full mt-2 mr-3"></div>
                        Proyectos para clientes externos y optimización de performance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Detalles */}
            <div className="space-y-8">
              
              {/* Contacto */}
              <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-none p-6">
                <h3 className="text-xl font-light text-slate-800 mb-4 tracking-wide">Contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600 font-light">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span>661 409 658</span>
                  </div>
                  <div className="flex items-center text-slate-600 font-light">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span>Jhonatan.mog2829@gmail.com</span>
                  </div>
                  <div className="flex items-center text-slate-600 font-light">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    <span>Valencia, España</span>
                  </div>
                </div>
              </div>

              {/* Idiomas */}
              <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-none p-6">
                <h3 className="text-xl font-light text-slate-800 mb-4 tracking-wide">Idiomas</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-slate-600 font-light mb-1">
                      <span>Español</span>
                      <span className="text-teal-600">Nativo</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1">
                      <div className="bg-teal-500 h-1 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-600 font-light mb-1">
                      <span>Inglés</span>
                      <span className="text-amber-600">Avanzado (C1)</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1">
                      <div className="bg-amber-500 h-1 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-600 font-light mb-1">
                      <span>Portugués</span>
                      <span className="text-slate-500">Básico (A2)</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1">
                      <div className="bg-slate-400 h-1 rounded-full w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Educación */}
              <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-none p-6">
                <h3 className="text-xl font-light text-slate-800 mb-4 tracking-wide">Educación</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-700 font-light">Escuela Colombiana de Ingeniería Julio Garavito</h4>
                    <p className="text-slate-600 text-sm font-light">Ingeniería en Sistemas</p>
                    <p className="text-slate-500 text-xs font-light">2014 - 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Habilidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Conocimientos Técnicos */}
            <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-none p-8">
              <h3 className="text-2xl font-light text-slate-800 mb-6 tracking-wide border-b border-slate-200 pb-4">
                Conocimientos & Herramientas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-teal-600 font-light mb-3 tracking-wide">Frontend</h4>
                  <ul className="text-slate-600 space-y-2 font-light text-sm">
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-teal-500 rounded-full mr-2"></div>
                      React.js & Next.js
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-teal-500 rounded-full mr-2"></div>
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-teal-500 rounded-full mr-2"></div>
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-amber-600 font-light mb-3 tracking-wide">Tecnologías</h4>
                  <ul className="text-slate-600 space-y-2 font-light text-sm">
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-amber-500 rounded-full mr-2"></div>
                      Git & GitHub
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-amber-500 rounded-full mr-2"></div>
                      Node.js
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-amber-500 rounded-full mr-2"></div>
                      Python & C++
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Habilidades Blandas */}
            <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-none p-8">
              <h3 className="text-2xl font-light text-slate-800 mb-6 tracking-wide border-b border-slate-200 pb-4">
                Habilidades Blandas
              </h3>
              <div className="space-y-4">
                {[
                  "Comunicación efectiva y trabajo en equipo",
                  "Creatividad y pensamiento analítico", 
                  "Adaptabilidad y aprendizaje continuo",
                  "Capacidad de liderazgo y autonomía",
                  "Orientación a resultados y detalle"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center text-slate-600 font-light">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}