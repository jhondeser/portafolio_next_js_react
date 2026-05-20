/**
 * Sección "Cómo trabajo" — sustituye a Principios.
 * Comunica método profesional manteniendo la estética zen del sitio.
 */

interface Step {
  number: string
  title: string
  description: string
  color: 'teal' | 'amber' | 'emerald' | 'cyan' | 'rose'
}

const colorMap: Record<Step['color'], { bg: string; dot: string }> = {
  teal: { bg: 'bg-teal-500/20', dot: 'bg-teal-400' },
  amber: { bg: 'bg-amber-500/20', dot: 'bg-amber-400' },
  emerald: { bg: 'bg-emerald-500/20', dot: 'bg-emerald-400' },
  cyan: { bg: 'bg-cyan-500/20', dot: 'bg-cyan-400' },
  rose: { bg: 'bg-rose-500/20', dot: 'bg-rose-400' },
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Llamada inicial',
    description:
      'Conversamos 20-30 minutos para entender qué necesitas, tu negocio y tus objetivos. Sin compromiso.',
    color: 'teal',
  },
  {
    number: '02',
    title: 'Propuesta y precio cerrado',
    description:
      'En 48-72h te paso una propuesta con alcance, plazos y precio fijo. Nada de letra pequeña.',
    color: 'amber',
  },
  {
    number: '03',
    title: 'Diseño y desarrollo',
    description:
      'Trabajo en sprints, te enseño avances semanales y aplicamos cambios juntos. Sin cajas negras.',
    color: 'emerald',
  },
  {
    number: '04',
    title: 'Entrega y formación',
    description:
      'Lanzamos en producción y te explico cómo manejarlo. Documentación clara y vídeos si hace falta.',
    color: 'cyan',
  },
  {
    number: '05',
    title: 'Soporte continuo',
    description:
      'Garantía de 30 días incluida. Después, plan mensual opcional para seguir evolucionando.',
    color: 'rose',
  },
]

export default function Proceso() {
  return (
    <section className="py-20 px-4 relative bg-gradient-to-br from-slate-900 via-teal-900/30 to-slate-900 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-0.5 bg-white/70"></div>
            <div className="w-2 h-2 rounded-full bg-amber-300 mx-3 mt-1.5"></div>
            <div className="w-12 h-0.5 bg-white/70"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            Cómo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
              trabajo
            </span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed">
            Un proceso transparente en cinco pasos. Sabes en todo momento dónde estamos y qué viene después.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((step) => {
            const colors = colorMap[step.color]
            return (
              <div key={step.number} className="text-center relative">
                <div
                  className={`w-14 h-14 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10`}
                >
                  <div className={`w-2 h-2 ${colors.dot} rounded-full`}></div>
                </div>
                <div className="text-xs text-white/40 font-light tracking-widest mb-2">
                  {step.number}
                </div>
                <h3 className="text-white font-light text-lg mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-slate-300 font-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
