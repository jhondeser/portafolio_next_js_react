import Hero from "@/components/Hero";
import Proyectos_destacados from "@/components/Proyectos_destacados";
import Proceso from "@/components/Proceso";
import Services from "@/components/Services";
import PackagesTable from "@/components/PackagesTable";
import RecurringPlans from "@/components/RecurringPlans";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900">
      {/* Hero queda sin Reveal: ya esta visible al cargar */}
      <Hero />


      <Reveal>
        <Services />
      </Reveal>

      <Reveal>
        <Proyectos_destacados />
      </Reveal>

      <Reveal>
        <PackagesTable />
      </Reveal>

      <Reveal>
        <Proceso />
      </Reveal>

      <Reveal>
        <RecurringPlans />
      </Reveal>
    </div>
  );
}
