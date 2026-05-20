import type { ServiceCategory, RecurringPlan } from '@/types'

/**
 * Catálogo real de servicios.
 * Cada categoría tiene 3 niveles (tier) con su rango de precio y entregables.
 * Estos datos alimentan tanto la grid de tarjetas como la tabla comparativa.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'web',
    icon: '🌐',
    title: 'Desarrollo Web',
    tagline: 'Webs rápidas, modernas y pensadas para vender.',
    description:
      'Diseño y desarrollo a medida con Next.js, React y Tailwind. SEO técnico, rendimiento y diseño cuidado en cada píxel.',
    audience: 'Para profesionales, pymes y negocios que quieren una presencia digital sólida.',
    priceFromLabel: 'Desde 300€',
    tiers: [
      {
        name: 'Landing page',
        priceRange: '300 – 600€',
        priceFrom: 300,
        description: 'Una página clara, rápida y orientada a captar contactos.',
        bestFor: 'Lanzar un servicio, validar una idea o tener un punto de captación de leads.',
        deliveryTime: '5 a 7 días',
        features: [
          'Diseño a medida (1 página)',
          'Versión móvil optimizada',
          'Formulario de contacto / WhatsApp',
          'SEO básico y meta-etiquetas',
          'Despliegue en Vercel + dominio',
          'Integración con Google Analytics',
        ],
      },
      {
        name: 'Web corporativa (5–10 páginas)',
        priceRange: '600 – 1.500€',
        priceFrom: 600,
        description: 'Web profesional completa con varias secciones y panel para editar contenido.',
        bestFor: 'Pymes, despachos, clínicas, restaurantes o profesionales que necesitan presencia seria.',
        deliveryTime: '2 a 3 semanas',
        features: [
          'Hasta 10 secciones / páginas',
          'Blog o sección de noticias opcional',
          'Panel para editar textos e imágenes',
          'SEO técnico avanzado',
          'Formularios y aviso legal / cookies',
          'Optimización Core Web Vitals',
        ],
        recommended: true,
      },
      {
        name: 'E-commerce',
        priceRange: '1.200 – 3.000€',
        priceFrom: 1200,
        description: 'Tienda online lista para vender, con pasarela de pago y gestión de productos.',
        bestFor: 'Negocios que venden producto físico o digital y necesitan cobrar online.',
        deliveryTime: '4 a 6 semanas',
        features: [
          'Catálogo de productos + variantes',
          'Pasarela de pago (Stripe / Redsys)',
          'Gestión de pedidos y stock',
          'Email transaccional automatizado',
          'Cupones y envíos configurables',
          'Integración con CRM o ERP',
        ],
      },
    ],
  },
  {
    id: 'bot',
    icon: '🤖',
    title: 'Bots & Chatbots con IA',
    tagline: 'Atención 24/7 que responde por ti, no a costa de ti.',
    description:
      'Bots conversacionales que automatizan ventas y soporte. Desde flujos simples hasta IA con tu propia base de conocimiento.',
    audience: 'Para negocios saturados de preguntas repetitivas o que quieren cualificar leads.',
    priceFromLabel: 'Desde 400€',
    tiers: [
      {
        name: 'Bot FAQ simple',
        priceRange: '400 – 800€',
        priceFrom: 400,
        description: 'Bot con flujos fijos para resolver las dudas más frecuentes.',
        bestFor: 'Negocios con preguntas recurrentes (horarios, precios, ubicación, reservas).',
        deliveryTime: '5 a 10 días',
        features: [
          'Hasta 15 flujos conversacionales',
          'Despliegue en WhatsApp o web',
          'Recogida de datos del cliente',
          'Derivación a humano cuando lo pidan',
          'Mensaje de bienvenida personalizado',
        ],
      },
      {
        name: 'Bot con IA (RAG)',
        priceRange: '900 – 2.000€',
        priceFrom: 900,
        description: 'Asistente entrenado con tus documentos que responde como lo harías tú.',
        bestFor: 'Empresas con documentación, catálogos o procesos que el cliente consulta a menudo.',
        deliveryTime: '2 a 3 semanas',
        features: [
          'Base de conocimiento propia (RAG)',
          'Entrenamiento con tus PDFs / web',
          'Respuestas con citas a la fuente',
          'Memoria por conversación',
          'Panel para ver historial y métricas',
          'Actualización periódica del corpus',
        ],
        recommended: true,
      },
      {
        name: 'Bot multicanal avanzado',
        priceRange: '2.000 – 4.000€',
        priceFrom: 2000,
        description: 'Asistente unificado que opera en varios canales y se integra con tu stack.',
        bestFor: 'Negocios con volumen alto y necesidad de unificar atención WhatsApp / web / IG.',
        deliveryTime: '4 a 6 semanas',
        features: [
          'WhatsApp + Instagram + Web + Telegram',
          'Integración con CRM y calendario',
          'Cualificación y enrutado de leads',
          'Acciones (crear pedido, agendar, etc.)',
          'Panel admin multiusuario',
          'Soporte de varios idiomas',
        ],
      },
    ],
  },
  {
    id: 'crm',
    icon: '📊',
    title: 'CRM e Integraciones',
    tagline: 'Tu información de clientes ordenada y trabajando para ti.',
    description:
      'Implantación de CRM, integraciones con tus herramientas o desarrollo a medida si lo estándar se te queda corto.',
    audience: 'Para equipos comerciales, agencias y profesionales con cartera creciente de clientes.',
    priceFromLabel: 'Desde 400€',
    tiers: [
      {
        name: 'Setup básico (HubSpot / Zoho)',
        priceRange: '400 – 800€',
        priceFrom: 400,
        description: 'Configuración del CRM listo para usar con tu pipeline y formularios.',
        bestFor: 'Profesionales y pymes que empiezan a ordenar sus clientes.',
        deliveryTime: '4 a 7 días',
        features: [
          'Configuración del CRM elegido',
          'Pipeline comercial y etapas',
          'Importación inicial de contactos',
          'Formularios web conectados',
          'Plantillas de email básicas',
          'Formación 1h al usuario',
        ],
      },
      {
        name: 'CRM + integraciones externas',
        priceRange: '800 – 2.000€',
        priceFrom: 800,
        description: 'Tu CRM conectado a las herramientas que ya usas: web, email, facturación, etc.',
        bestFor: 'Equipos que pierden tiempo copiando datos de un sitio a otro.',
        deliveryTime: '2 a 4 semanas',
        features: [
          'Setup completo del CRM',
          'Integración con web y formularios',
          'Sincronización con email / calendario',
          'Conexión con facturación o ERP',
          'Automatizaciones de seguimiento',
          'Dashboards e informes',
        ],
        recommended: true,
      },
      {
        name: 'CRM a medida',
        priceRange: '2.500 – 6.000€',
        priceFrom: 2500,
        description: 'CRM hecho a tu medida cuando las herramientas estándar no encajan.',
        bestFor: 'Negocios con procesos muy específicos que no caben en HubSpot/Zoho.',
        deliveryTime: '6 a 10 semanas',
        features: [
          'Arquitectura adaptada a tu proceso',
          'Roles y permisos por usuario',
          'Módulos personalizados',
          'Integraciones API con tu stack',
          'Dashboards y KPI a medida',
          'Documentación + formación',
        ],
      },
    ],
  },
  {
    id: 'n8n',
    icon: '⚡',
    title: 'Automatizaciones con n8n',
    tagline: 'Recupera horas conectando tus apps con flujos inteligentes.',
    description:
      'Automatizo tareas repetitivas con n8n: formularios, emails, facturación, Notion, WhatsApp, CRMs, IA y más.',
    audience: 'Para negocios que pierden horas en tareas manuales o que necesitan integrar varias apps.',
    priceFromLabel: 'Desde 200€',
    tiers: [
      {
        name: 'Flujo simple (2–3 pasos)',
        priceRange: '200 – 500€',
        priceFrom: 200,
        description: 'Una automatización puntual entre dos o tres herramientas.',
        bestFor: 'Tareas concretas como "lead del form → CRM + email de bienvenida".',
        deliveryTime: '3 a 5 días',
        features: [
          '1 flujo conectando 2-3 apps',
          'Disparador y acciones definidas',
          'Manejo básico de errores',
          'Pruebas con datos reales',
          'Documentación del flujo',
        ],
      },
      {
        name: 'Automatización media',
        priceRange: '500 – 1.500€',
        priceFrom: 500,
        description: 'Varios flujos coordinados que cubren un proceso completo.',
        bestFor: 'Procesos como onboarding de clientes, facturación o seguimiento comercial.',
        deliveryTime: '1 a 3 semanas',
        features: [
          '3 a 6 flujos coordinados',
          'Bifurcaciones y condiciones',
          'Plantillas de email/WhatsApp',
          'Reintentos y alertas de error',
          'Panel para ver ejecuciones',
          'Soporte 2 semanas tras entrega',
        ],
        recommended: true,
      },
      {
        name: 'Sistema complejo + IA',
        priceRange: '1.500 – 4.000€',
        priceFrom: 1500,
        description: 'Workflows complejos con IA, bases vectoriales y lógica avanzada.',
        bestFor: 'Procesos donde la IA añade valor: clasificación, resúmenes, respuestas automáticas.',
        deliveryTime: '3 a 6 semanas',
        features: [
          'Workflows orquestados con IA',
          'Conexión con OpenAI / Claude / Gemini',
          'Bases vectoriales (RAG)',
          'Lógica multi-rama avanzada',
          'Hosting de n8n self-hosted',
          'Monitorización y alertas',
        ],
      },
    ],
  },
]

/**
 * Planes recurrentes mensuales.
 * Permiten al cliente seguir contando con soporte continuo
 * y a ti generar ingresos recurrentes.
 */
export const recurringPlans: RecurringPlan[] = [
  {
    name: 'Mantenimiento web',
    price: '50 – 150€/mes',
    description: 'Tu web siempre actualizada, segura y operativa.',
    icon: '🌐',
    includes: [
      'Actualizaciones de seguridad',
      'Copias de seguridad mensuales',
      'Pequeños cambios de contenido',
      'Monitorización de caídas',
    ],
  },
  {
    name: 'Soporte de bot',
    price: '80 – 200€/mes',
    description: 'Tu chatbot afinado y mejorado mes a mes.',
    icon: '🤖',
    includes: [
      'Ajustes de prompts y flujos',
      'Revisión de conversaciones',
      'Actualización del corpus (RAG)',
      'Informe mensual de uso',
    ],
  },
  {
    name: 'CRM gestionado',
    price: '100 – 300€/mes',
    description: 'Tu CRM mantenido y evolucionando contigo.',
    icon: '📊',
    includes: [
      'Limpieza de datos',
      'Nuevas automatizaciones',
      'Soporte a tu equipo',
      'Informes y dashboards',
    ],
  },
  {
    name: 'n8n hosting + soporte',
    price: '100 – 250€/mes',
    description: 'n8n self-hosted, vigilado y siempre actualizado.',
    icon: '⚡',
    includes: [
      'Hosting de tu instancia n8n',
      'Updates y backups automáticos',
      'Monitorización de ejecuciones',
      'Ajustes menores en flujos',
    ],
  },
]

// Helpers
export const getCategoryById = (id: string) =>
  serviceCategories.find((c) => c.id === id)
