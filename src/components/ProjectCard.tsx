import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-white/70 backdrop-blur-sm border border-slate-200 rounded-none hover:border-teal-300 transition-all duration-500 hover:transform hover:-translate-y-1 shadow-sm hover:shadow-md">
      
      {/* Contenedor de imagen FIXED */}
      <div className="relative h-64 w-full overflow-hidden"> {/* ← Added w-full */}
        <Image 
          src={project.image} 
          alt={`Captura del proyecto ${project.title}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badge destacado */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 text-xs tracking-wider font-light">
            Destacado
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        {/* Categoría */}
        <span className="text-slate-500 text-sm font-light tracking-wide uppercase">
          {project.category}
        </span>
        
        {/* Título */}
        <h3 className="text-xl font-light text-slate-800 mb-3 tracking-wide group-hover:text-teal-700 transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Descripción */}
        <p className="text-slate-600 mb-5 leading-relaxed font-light text-sm">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-slate-100 text-slate-600 px-3 py-1 text-xs font-light tracking-wide border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Enlace */}
        <Link 
          href={project.link} 
          className="inline-flex items-center text-teal-600 hover:text-teal-700 font-light tracking-wide transition-all duration-300 group/link"
        >
          <span>Explorar proyecto</span>
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