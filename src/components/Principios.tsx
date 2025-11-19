export default function Proyectos_destacados() {
    return (
        <section className="py-20 px-4 relative bg-gradient-to-br from-slate-900 via-teal-900/30 to-slate-900 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    <div className="text-center">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    </div>
                    <h3 className="text-white font-light text-xl mb-3">Simplicidad</h3>
                    <p className="text-slate-300 font-light leading-relaxed">
                        Menos es más. Cada elemento tiene un propósito y contribuye a la armonía general.
                    </p>
                    </div>
                    
                    <div className="text-center">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    </div>
                    <h3 className="text-white font-light text-xl mb-3">Precisión</h3>
                    <p className="text-slate-300 font-light leading-relaxed">
                        Atención meticulosa a cada detalle, desde el código hasta la experiencia final.
                    </p>
                    </div>
                    
                    <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    </div>
                    <h3 className="text-white font-light text-xl mb-3">Armonía</h3>
                    <p className="text-slate-300 font-light leading-relaxed">
                        Equilibrio perfecto entre estética y funcionalidad, forma y contenido.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}