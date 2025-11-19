"use client";

export default function ContactPage() {
  const whatsappNumber = "34661409658"; // Reemplaza con tu número
  const whatsappMessage = "Hola, me gustaría obtener más información sobre tus servicios"; // Mensaje predeterminado
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

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

            {/* Botón de WhatsApp */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 text-white py-4 font-light tracking-wide hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.171-3.495-8.428"/>
                </svg>
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}