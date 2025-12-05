import type { Project } from '@/types'
import { projectImages } from '@/lib/images'

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Kaimana - E-commerce Deportivo",
    description: "Plataforma e-commerce para deportes al aire libre con sistema de reservas para clases privadas y equipo deportivo.",
    image: projectImages.kaimana,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Stripe", "Responsive"],
    link: "https://kaimana-odvne8npa-jhondesers-projects.vercel.app",
    github: "https://github.com/tuusuario/kaimana", // Agrega tu link real
    featured: true,
    category: "fullstack"
  },
  {
    id: 2,
    title: "Portafolio Elvira", 
    description: "Sitio web profesional para creadora de contenido, mostrando su trabajo y facilitando contacto con su audiencia.",
    image: projectImages.elvira,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "SEO"],
    link: "https://portafolio-elvira.vercel.app",
    github: "https://github.com/tuusuario/portafolio-elvira", // Agrega tu link real
    featured: true,
    category: "web"
  },
  {
    id: 3,
    title: "Escuela Virtual IT",
    description: "Plataforma educativa especializada en tecnología IT, diseño de videojuegos, modelado 3D y desarrollo de software.",
    image: projectImages.escuelaIt,
    tags: ["Next.js", "React", "MongoDB", "NextAuth", "Cloudinary", "Node.js", "TypeScript"],
    link: "https://xhiggz.vercel.app", // Actualiza cuando tengas el link
    github: "https://github.com/tuusuario/escuela-it", // Agrega tu link real
    featured: true,
    category: "fullstack"
  },
]

// Función para obtener proyectos destacados
export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter(project => project.featured)
}

// Función para obtener proyectos por categoría
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projectsData.filter(project => project.category === category)
}

// Función para obtener un proyecto por ID
export const getProjectById = (id: number): Project | undefined => {
  return projectsData.find(project => project.id === id)
}