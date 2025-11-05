import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types'

interface FeaturedProjectCardProps {
  project: Project
  index: number
}

export default function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  return (
    <article className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-none hover:border-teal-300/50 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden">
      
      {/* Contenedor de imagen FIXED */}
      <div className="relative h-48 w-full overflow-hidden"> {/* ← Added w-full */}
        <Image 
          src={project.image} 
          alt={`Captura del proyecto ${project.title}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
        
        {/* Número del proyecto */}
        <div className="absolute top-4 left-4">
          <div className="w-8 h-8 bg-teal-500/90 text-white flex items-center justify-center text-sm font-light">
            {index + 1}
          </div>
        </div>

        {/* Badge destacado */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-amber-500/90 text-white px-3 py-1 text-xs tracking-wider font-light">
            Destacado
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        {/* Categoría */}
        <span className="text-teal-300 text-sm font-light tracking-wide uppercase">
          {project.category}
        </span>
        
        {/* Título */}
        <h3 className="text-xl font-light text-white mb-3 tracking-wide group-hover:text-teal-300 transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Descripción */}
        <p className="text-slate-300 mb-4 leading-relaxed font-light text-sm">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="bg-white/10 text-slate-300 px-2 py-1 text-xs font-light tracking-wide border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Enlace */}
        <Link 
          href={project.link} 
          className="inline-flex items-center text-teal-300 hover:text-teal-200 font-light tracking-wide transition-all duration-300 group/link"
        >
          <span>Ver proyecto</span>
          <svg 
            className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}