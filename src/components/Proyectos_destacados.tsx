import Link from 'next/link'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'
import { projectsData, getFeaturedProjects } from '@/data/projects_data'



export default function Proyectos_destacados() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section className="py-20 px-4 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto">
            
            {/* Header de la sección */}
            <div className="text-center mb-16">
                <div className="inline-block relative mb-6">
                <div className="w-12 h-0.5 bg-teal-400 absolute -left-16 top-1/2 transform -translate-y-1/2"></div>
                <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight inline-block">
                    Proyectos Recientes
                </h2>
                <div className="w-12 h-0.5 bg-teal-400 absolute -right-16 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <p className="text-slate-300 text-lg font-light tracking-wide max-w-2xl mx-auto">
                Una selección de mis trabajos más recientes donde el diseño se encuentra con la funcionalidad
                </p>
            </div>

            {/* Grid de proyectos destacados */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> {/* ← gap-6 en lugar de gap-8 para móvil */}
                {featuredProjects.map((project, index) => (
                <FeaturedProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                />
                ))}
            </div>

            {/* CTA para ver todos los proyectos */}
            <div className="text-center mt-12">
                <Link 
                    href="/projects" 
                    className="inline-flex items-center text-teal-300 hover:text-teal-200 font-light tracking-wide transition-all duration-300 group/cta border border-teal-300/30 hover:border-teal-300/70 px-8 py-4"
                    >
                    <span>Ver todos los proyectos</span>
                    <svg 
                        className="w-5 h-5 ml-3 group-hover/cta:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

        </div>
    </section>
  )
}