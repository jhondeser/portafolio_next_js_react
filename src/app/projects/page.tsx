// /app/projects/page.tsx
'use client'

import { useState, useMemo } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projectsData } from '@/data/projects_data'

type CategoryFilter = 'all' | 'fullstack' | 'web'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all')

  // Filtrar proyectos basado en el filtro activo
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData
    if (activeFilter === 'fullstack') {
      return projectsData.filter(project => project.category === 'fullstack')
    }
    if (activeFilter === 'web') {
      return projectsData.filter(project => project.category === 'web')
    }
    return projectsData
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Header de página */}
        <header className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <div className="w-16 h-0.5 bg-teal-400 absolute -left-20 top-1/2 transform -translate-y-1/2 hidden md:block"></div>
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight inline-block">
              Mis Proyectos
            </h1>
            <div className="w-16 h-0.5 bg-teal-400 absolute -right-20 top-1/2 transform -translate-y-1/2 hidden md:block"></div>
          </div>
          <p className="text-slate-600 text-lg font-light tracking-wide max-w-2xl mx-auto px-4">
            Descubre mis proyectos desarrollados con Next.js, React y TypeScript.
          </p>
          
          {/* Contadores actualizados dinámicamente */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">{filteredProjects.length}</div>
              <div className="text-sm text-slate-500 font-light">Mostrando</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">
                {projectsData.filter(p => p.category === 'fullstack').length}
              </div>
              <div className="text-sm text-slate-500 font-light">Full Stack</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">
                {projectsData.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-slate-500 font-light">Destacados</div>
            </div>
          </div>
        </header>

        {/* Filtros funcionales */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-teal-50 text-teal-700' 
                  : 'text-slate-600 hover:text-teal-700'
              }`}
            >
              Todos ({projectsData.length})
            </button>
            <button 
              onClick={() => setActiveFilter('fullstack')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeFilter === 'fullstack' 
                  ? 'bg-teal-50 text-teal-700' 
                  : 'text-slate-600 hover:text-teal-700'
              }`}
            >
              Full Stack ({projectsData.filter(p => p.category === 'fullstack').length})
            </button>
            <button 
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeFilter === 'web' 
                  ? 'bg-teal-50 text-teal-700' 
                  : 'text-slate-600 hover:text-teal-700'
              }`}
            >
              Frontend ({projectsData.filter(p => p.category === 'web').length})
            </button>
          </div>
        </div>

        {/* Grid de proyectos filtrados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mensaje si no hay proyectos con el filtro */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg font-light tracking-wide">
              No hay proyectos en esta categoría
            </div>
          </div>
        )}

        {/* Llamada a la acción */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <span className="text-lg font-light tracking-wide">
              ¿Tienes un proyecto en mente?
            </span>
            <a 
              href="mailto:jhonatan.mog2829@gmail.com" 
              className="ml-4 font-medium hover:underline"
            >
              Hablemos →
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}