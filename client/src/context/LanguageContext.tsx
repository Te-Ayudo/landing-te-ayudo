import React, { createContext, useContext } from 'react';

// Definición de tipo
export type Language = 'es' | 'en';

// Traducciones simplificadas (solo el idioma español)
const translations = {
  es: {
    // Mission & Vision
    'mission.title': 'Misión & Visión',
    'mission.our_mission': 'Nuestra Misión',
    'mission.our_mission_text': 'Empoderar a las empresas de servicios en Latinoamérica con tecnología accesible que optimice sus operaciones, mejore la experiencia del cliente y potencie su crecimiento.',
    'mission.our_vision': 'Nuestra Visión',
    'mission.our_vision_text': 'Ser la plataforma líder de gestión empresarial en Latinoamérica, transformando la manera en que las empresas de servicios operan en la era digital y generando un impacto positivo en millones de negocios.',
    'mission.our_values': 'Nuestros Valores',
    'mission.value.trust': 'Confianza',
    'mission.value.trust_text': 'Construimos relaciones a largo plazo basadas en la transparencia y honestidad.',
    'mission.value.innovation': 'Innovación',
    'mission.value.innovation_text': 'Buscamos constantemente nuevas soluciones y mejoras para nuestros clientes.',
    'mission.value.community': 'Comunidad',
    'mission.value.community_text': 'Apoyamos el crecimiento de la economía local y el desarrollo de pequeños negocios.',
    
    // Roadmap
    'roadmap.title': 'Nuestro Roadmap',
    'roadmap.description': 'Te compartimos nuestro camino y los hitos planeados para revolucionar la gestión de negocios de servicios en Latinoamérica.',
    'roadmap.2024': 'Product-Market Fit',
    'roadmap.2024.milestone1': 'Lanzamiento de aplicaciones móviles',
    'roadmap.2024.milestone2': 'Primeros 100 clientes en Bolivia',
    'roadmap.2025': 'Integración de IA',
    'roadmap.2025.milestone1': 'Asistente virtual de WhatsApp',
    'roadmap.2025.milestone2': 'Análisis predictivo de demanda',
    'roadmap.2026': 'Expansión Regional',
    'roadmap.2026.milestone1': 'Operaciones en Perú y Colombia',
    'roadmap.2026.milestone2': '1,000+ empresas activas',
    'roadmap.2027': 'Ecosistema Completo',
    'roadmap.2027.milestone1': 'Marketplace de servicios B2B',
    'roadmap.2027.milestone2': 'Plataforma financiera integrada',
    
    // Products & Pricing
    'product.title': 'Producto & Precios',
    'product.description': 'Descubre nuestra plataforma integral para empresas de servicios y encuentra el plan que mejor se adapte a tus necesidades.',
    'product.tabs.mobile': 'Aplicaciones Móviles',
    'product.tabs.platform': 'Plataforma SaaS & Landing',
    'product.tab.mobile': 'Aplicaciones Móviles',
    'product.tab.platform': 'Plataforma SaaS & Landing',
    'product.client_app.title': 'Aplicación para Clientes',
    'product.client_app.description': 'Permite a tus clientes agendar citas, realizar pagos y acceder a su historial de servicios.',
    'product.client_app.feature1': 'Reserva de citas en tiempo real',
    'product.client_app.feature2': 'Pagos integrados y seguros',
    'product.client_app.feature3': 'Notificaciones y recordatorios',
    'product.clientApp.title': 'Aplicación para Clientes',
    'product.clientApp.description': 'Permite a tus clientes agendar citas, realizar pagos y acceder a su historial de servicios.',    
    'product.employee_app.title': 'Aplicación para Empleados',
    'product.employee_app.description': 'Ayuda a tus empleados a gestionar sus horarios, clientes y servicios desde cualquier lugar.',
    'product.employee_app.feature1': 'Gestión de horarios y disponibilidad',
    'product.employee_app.feature2': 'Seguimiento de clientes y servicios',
    'product.employee_app.feature3': 'Comunicación con el equipo',
    'product.employeeApp.title': 'Aplicación para Empleados',
    'product.employeeApp.description': 'Ayuda a tus empleados a gestionar sus horarios, clientes y servicios desde cualquier lugar.',
    'product.saas.title': 'Plataforma SaaS',
    'product.saas.description': 'Centro de control completo para administrar todos los aspectos de tu negocio.',
    'product.saas.feature1': 'Panel de control centralizado',
    'product.saas.feature2': 'Análisis de datos y reportes',
    'product.saas.feature3': 'Gestión completa de personal y clientes',
    'product.landing.title': 'Landing Privado',
    'product.landing.description': 'Página web personalizada para tu negocio que permite a tus clientes conocer tus servicios y reservar.',
    'product.landing.feature1': 'Diseño personalizado con tu marca',
    'product.landing.feature2': 'Catálogo de servicios con reservas online',
    'product.landing.feature3': 'Formularios de contacto y testimonios',
    'product.video.title': 'Mira cómo funciona',
    'product.video.description': 'Nuestro sistema integrado permite administrar todos los aspectos de tu negocio desde la misma plataforma - reservaciones, pagos, inventario y más.',
    'product.pricing.title': 'Planes y Precios',
    'product.pricing.feature.calendar': 'Calendario & Configuraciones',
    'product.pricing.feature.crm': 'CRM',
    'product.pricing.feature.landing': 'Landing Privado',
    'product.pricing.feature.branches': 'Sucursales',
    'product.pricing.feature.inventory': 'Inventario',
    'product.pricing.feature.promotions': 'Módulo de Promociones',
    'product.pricing.action': 'Comenzar',
    'product.pricing.contact': 'Contáctanos',
    'product.addons.title': 'Extras',
    'product.addons.whatsapp.title': 'WhatsApp Ilimitado',
    'product.addons.whatsapp.description': 'Envía mensajes ilimitados a tus clientes desde la plataforma.',
    'product.addons.ai.title': 'IA en WhatsApp',
    'product.addons.ai.description': 'Asistente virtual con IA para responder consultas de tus clientes.',
    'product.addons.billing.title': 'Sistema de Facturación',
    'product.addons.billing.description': 'Genera facturas electrónicas y gestiona impuestos automáticamente.',
    
    // Partners
    'partners.title': 'Empresas que Confían en Nosotros',
    'partners.subtitle': 'Más de 40 empresas líderes en sus industrias ya utilizan Te Ayudo para optimizar sus operaciones y mejorar la experiencia de sus clientes.',
    'partners.companies': 'Empresas Satisfechas',
    'partners.filter': 'Filtrar por Industria',
    'partners.viewAll': 'Ver Todos',
    'partners.viewCarousel': 'Ver Carrusel',
    'partners.cta': '¿Quieres ser parte de nuestros clientes satisfechos?',
    'partners.ctaButton': 'Contáctanos Ahora',
    
    // Hero
    'hero.title': 'El ERP definitivo para',
    'hero.subtitle': 'empresas de servicios',
    'hero.description': 'La plataforma SaaS integral para gestionar todos los aspectos de tu negocio de servicios en LATAM.',
    'hero.cta.product': 'Ver Producto',
    'hero.cta.contact': 'Contáctanos',
    'hero.feature.automation': 'Automatización Inteligente',
    'hero.feature.ai': 'IA Predictiva',
    'hero.feature.customers': 'Gestión de Clientes',
    'hero.feature.analytics': 'Análisis en Tiempo Real',
    'hero.stats.users': 'Usuarios activos',
    'hero.stats.efficiency': 'Eficiencia',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Tienes preguntas sobre nuestros servicios? Estamos aquí para ayudarte.',
    'contact.info.title': 'Información de Contacto',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Email',
    'contact.info.address': 'Dirección',
    'contact.whatsapp': 'Contáctanos por WhatsApp',
    'contact.form.title': 'Envíanos un Mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.company': 'Empresa',
    'contact.form.company.placeholder': 'Nombre de tu empresa',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': '¿Cómo podemos ayudarte?',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.success': 'Mensaje enviado con éxito. ¡Gracias por contactarnos!',
    
    // Navbar
    'nav.mission': 'Misión y Visión',
    'nav.roadmap': 'Nuestra Ruta',
    'nav.product': 'Productos',
    'nav.partners': 'Socios',
    'nav.contact': 'Contacto',
    'nav.language.es': 'Español',
    'nav.language.en': 'Inglés',
    
    // Footer
    'footer.description': 'La plataforma SaaS ERP definitiva para empresas de servicios en LATAM.',
    'footer.links.title': 'Enlaces',
    'footer.links.mission': 'Misión & Visión',
    'footer.links.roadmap': 'Roadmap',
    'footer.links.product': 'Producto & Precios',
    'footer.links.contact': 'Contacto',
    'footer.contact.title': 'Contacto',
    'footer.social.title': 'Síguenos',
    'footer.copyright': 'Todos los derechos reservados.',
    'footer.legal.terms': 'Términos y Condiciones',
    'footer.legal.privacy': 'Política de Privacidad',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Ha ocurrido un error',
    'common.tryAgain': 'Intentar nuevamente',
    'common.affiliate': 'Afiliados',
  }
};

// Crear un tipo de contexto simplificado
interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void; // Mantenemos setLanguage para compatibilidad
}

// Configuración por defecto
const defaultLanguage: Language = 'es';

// Crear el contexto con valores por defecto
const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  t: (key: string) => {
    // Siempre devuelve la traducción en español o la clave misma si no existe
    return (translations.es as Record<string, string>)[key] || key;
  },
  setLanguage: () => {} // Función vacía por defecto
});

// Componente proveedor
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Valores fijos para simplificar
  const value = {
    language: defaultLanguage,
    t: (key: string) => (translations.es as Record<string, string>)[key] || key,
    setLanguage: () => console.log('Cambio de idioma deshabilitado') // No hace nada pero evita errores
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el idioma
export const useLanguage = () => {
  return useContext(LanguageContext);
};