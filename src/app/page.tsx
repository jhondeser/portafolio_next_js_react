import Hero from "@/components/Hero";
import Proyectos_destacados from "@/components/Proyectos_destacados";
import Proceso from "@/components/Proceso";
import Services from "@/components/Services";
import PackagesTable from "@/components/PackagesTable";
import RecurringPlans from "@/components/RecurringPlans";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900">
      <Hero />
      <Proyectos_destacados />
      <Services />
      <PackagesTable />
      <Proceso />
      <RecurringPlans />
    </div>
  )
}
