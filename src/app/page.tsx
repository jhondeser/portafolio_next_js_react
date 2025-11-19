import Hero from "@/components/Hero";
import Proyectos_destacados from "@/components/Proyectos_destacados";
import Principios from "@/components/Principios";
import Services from "@/components/Services";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900">
      <Hero />
      <Proyectos_destacados />
      <Principios />
      <Services />
    </div>
  )
}