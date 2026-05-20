import { recurringPlans } from '@/data/services_data'
import Link from 'next/link'

/**
 * Bloque de planes recurrentes mensuales:
 * mantenimiento web, soporte bot, CRM gestionado y hosting n8n.
 */
export default function RecurringPlans() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-900/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-0.5 bg-white/70"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-300 mx-3 mt-1.5"></div>
            <div className="w-12 h-0.5 bg-white/70"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            Soporte y mantenimiento{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
              mensual
            </span>
          </h2>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Una vez entregado el proyecto, puedes seguir tranquilo con un plan mensual.
            Yo me encargo de que todo siga funcionando, evoluciona y crezca contigo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {recurringPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-emerald-300/40 transition-all duration-500 flex flex-col"
            >
              <div className="text-3xl mb-3">{plan.icon}</div>
              <h3 className="text-lg font-light text-white mb-2 tracking-wide">{plan.name}</h3>
              <p className="text-emerald-200/90 text-xl font-light mb-1">{plan.price}</p>
              <p className="text-white/60 text-xs font-light mb-4 leading-relaxed">
                {plan.description}
              </p>
              <ul className="space-y-2 mb-5 flex-1">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start text-white/80 text-xs font-light">
                    <svg
                      className="w-3 h-3 text-emerald-300 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center text-emerald-200 hover:text-white font-light tracking-wide transition-all duration-300 border border-emerald-300/40 hover:border-emerald-300 px-8 py-4 group"
          >
            <span>Hablemos de tu plan mensual</span>
            <svg
              className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform"
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
