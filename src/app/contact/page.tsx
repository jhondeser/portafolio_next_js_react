export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        <header className="text-center mb-20">
          <div className="inline-block relative mb-6">
            <div className="w-16 h-0.5 bg-teal-400 absolute -left-20 top-1/2 transform -translate-y-1/2"></div>
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight inline-block">
              Contacto
            </h1>
            <div className="w-16 h-0.5 bg-teal-400 absolute -right-20 top-1/2 transform -translate-y-1/2"></div>
          </div>
          <p className="text-slate-600 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Hablemos sobre tu próximo proyecto
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-none p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 font-light mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-slate-300 bg-white/50 font-light focus:border-teal-400 focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-700 font-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-300 bg-white/50 font-light focus:border-teal-400 focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-700 font-light mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 bg-white/50 font-light focus:border-teal-400 focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-slate-800 text-white py-4 font-light tracking-wide hover:bg-slate-700 transition-all duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}