import ProjectCard from '@/components/ProjectCard'
import { Project } from '@/types'
import { projectImages } from '@/lib/images'

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Orgánico",
    description: "Tienda online para productos naturales con enfoque en experiencia de usuario y rendimiento.",
    image: projectImages.ecomerceNatural,
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    link: "/projects",
    featured: true,
    category: "web"
  },
  {
    id: 2,
    title: "App de Meditación", 
    description: "Aplicación web para prácticas de mindfulness con seguimiento de progreso y comunidad.",
    image: projectImages.meditacion,
    tags: ["TypeScript", "React", "Framer Motion", "Node.js"],
    link: "/projects",
    category: "web"
  },
  {
    id: 3,
    title: "Plataforma Educativa",
    description: "Sistema de aprendizaje online con enfoque en accesibilidad y experiencia intuitiva.",
    image: projectImages.education,
    tags: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    link: "/projects",
    featured: true,
    category: "fullstack"
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Header de página */}
        <header className="text-center mb-20">
          <div className="inline-block relative mb-6">
            <div className="w-16 h-0.5 bg-teal-400 absolute -left-20 top-1/2 transform -translate-y-1/2"></div>
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight inline-block">
              Proyectos
            </h1>
            <div className="w-16 h-0.5 bg-teal-400 absolute -right-20 top-1/2 transform -translate-y-1/2"></div>
          </div>
          <p className="text-slate-600 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Donde las ideas toman forma y el código encuentra su flow natural
          </p>
        </header>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"> {/* ← gap-6 para móvil */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mensaje minimalista */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-slate-400 text-lg font-light tracking-wide">
              Nuevos proyectos en camino...
            </div>
          </div>
        )}

      </div>
    </div>
  )
}