import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Definición de tipos para la traducción
export type Language = 'es' | 'en';

// Textos generales compartidos entre todos los componentes
export const translations = {
  es: {
    // Mission & Vision Section
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
    
    // Roadmap Section
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
    'roadmap.2028': 'Estrategia de Salida',
    'roadmap.2028.milestone1': 'Presencia en 10+ países',
    'roadmap.2028.milestone2': 'Adquisición potencial',
    
    // Product & Pricing Section
    'product.title': 'Producto & Precios',
    'product.description': 'Descubre nuestra plataforma integral para empresas de servicios y encuentra el plan que mejor se adapte a tus necesidades.',
    'product.tabs.mobile': 'Aplicaciones Móviles',
    'product.tabs.platform': 'Plataforma SaaS & Landing',
    'product.client_app.title': 'Aplicación para Clientes',
    'product.client_app.description': 'Permite a tus clientes agendar citas, realizar pagos y acceder a su historial de servicios.',
    'product.client_app.feature1': 'Reserva de citas en tiempo real',
    'product.client_app.feature2': 'Pagos integrados y seguros',
    'product.client_app.feature3': 'Notificaciones y recordatorios',
    'product.employee_app.title': 'Aplicación para Empleados',
    'product.employee_app.description': 'Ayuda a tus empleados a gestionar sus horarios, clientes y servicios desde cualquier lugar.',
    'product.employee_app.feature1': 'Gestión de horarios y disponibilidad',
    'product.employee_app.feature2': 'Seguimiento de clientes y servicios',
    'product.employee_app.feature3': 'Comunicación con el equipo',
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
    // Navbar
    'nav.mission': 'Misión y Visión',
    'nav.roadmap': 'Nuestra Ruta',
    'nav.product': 'Productos',
    'nav.partners': 'Socios',
    'nav.contact': 'Contacto',
    'nav.language.es': 'Español',
    'nav.language.en': 'Inglés',
    
    // Hero Section
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
    
    // Partners Section
    'partners.title': 'Empresas que Confían en Nosotros',
    'partners.subtitle': 'Más de 40 empresas líderes en sus industrias ya utilizan Te Ayudo para optimizar sus operaciones y mejorar la experiencia de sus clientes.',
    'partners.companies': 'Empresas Satisfechas',
    'partners.filter': 'Filtrar por Industria',
    'partners.viewAll': 'Ver Todos',
    'partners.viewCarousel': 'Ver Carrusel',
    'partners.cta': '¿Quieres ser parte de nuestros clientes satisfechos?',
    'partners.ctaButton': 'Contáctanos Ahora',
    
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
  },
  en: {
    // Mission & Vision Section
    'mission.title': 'Mission & Vision',
    'mission.our_mission': 'Our Mission',
    'mission.our_mission_text': 'Empower service companies in Latin America with accessible technology that optimizes their operations, improves customer experience, and enhances their growth.',
    'mission.our_vision': 'Our Vision',
    'mission.our_vision_text': 'To be the leading business management platform in Latin America, transforming how service companies operate in the digital era and making a positive impact on millions of businesses.',
    'mission.our_values': 'Our Values',
    'mission.value.trust': 'Trust',
    'mission.value.trust_text': 'We build long-term relationships based on transparency and honesty.',
    'mission.value.innovation': 'Innovation',
    'mission.value.innovation_text': 'We constantly seek new solutions and improvements for our customers.',
    'mission.value.community': 'Community',
    'mission.value.community_text': 'We support the growth of the local economy and the development of small businesses.',
    
    // Roadmap Section
    'roadmap.title': 'Our Roadmap',
    'roadmap.description': 'We share our journey and planned milestones to revolutionize service business management in Latin America.',
    'roadmap.2024': 'Product-Market Fit',
    'roadmap.2024.milestone1': 'Mobile app launch',
    'roadmap.2024.milestone2': 'First 100 customers in Bolivia',
    'roadmap.2025': 'AI Integration',
    'roadmap.2025.milestone1': 'WhatsApp virtual assistant',
    'roadmap.2025.milestone2': 'Predictive demand analysis',
    'roadmap.2026': 'Regional Expansion',
    'roadmap.2026.milestone1': 'Operations in Peru and Colombia',
    'roadmap.2026.milestone2': '1,000+ active companies',
    'roadmap.2027': 'Complete Ecosystem',
    'roadmap.2027.milestone1': 'B2B services marketplace',
    'roadmap.2027.milestone2': 'Integrated financial platform',
    'roadmap.2028': 'Exit Strategy',
    'roadmap.2028.milestone1': 'Presence in 10+ countries',
    'roadmap.2028.milestone2': 'Potential acquisition',
    
    // Product & Pricing Section
    'product.title': 'Product & Pricing',
    'product.description': 'Discover our comprehensive platform for service businesses and find the plan that best suits your needs.',
    'product.tabs.mobile': 'Mobile Applications',
    'product.tabs.platform': 'SaaS Platform & Landing',
    'product.client_app.title': 'Client Application',
    'product.client_app.description': 'Allow your customers to schedule appointments, make payments, and access their service history.',
    'product.client_app.feature1': 'Real-time appointment booking',
    'product.client_app.feature2': 'Secure integrated payments',
    'product.client_app.feature3': 'Notifications and reminders',
    'product.employee_app.title': 'Employee Application',
    'product.employee_app.description': 'Help your employees manage their schedules, clients, and services from anywhere.',
    'product.employee_app.feature1': 'Schedule and availability management',
    'product.employee_app.feature2': 'Client and service tracking',
    'product.employee_app.feature3': 'Team communication',
    'product.saas.title': 'SaaS Platform',
    'product.saas.description': 'Complete control center to manage all aspects of your business.',
    'product.saas.feature1': 'Centralized dashboard',
    'product.saas.feature2': 'Data analysis and reports',
    'product.saas.feature3': 'Complete staff and client management',
    'product.landing.title': 'Private Landing Page',
    'product.landing.description': 'Customized website for your business that allows your customers to learn about your services and book appointments.',
    'product.landing.feature1': 'Custom design with your brand',
    'product.landing.feature2': 'Service catalog with online booking',
    'product.landing.feature3': 'Contact forms and testimonials',
    'product.video.title': 'See how it works',
    'product.video.description': 'Our integrated system allows you to manage all aspects of your business from the same platform - reservations, payments, inventory, and more.',
    'product.pricing.title': 'Plans and Pricing',
    'product.pricing.feature.calendar': 'Calendar & Settings',
    'product.pricing.feature.crm': 'CRM',
    'product.pricing.feature.landing': 'Private Landing Page',
    'product.pricing.feature.branches': 'Branches',
    'product.pricing.feature.inventory': 'Inventory',
    'product.pricing.feature.promotions': 'Promotions Module',
    'product.pricing.action': 'Get Started',
    'product.pricing.contact': 'Contact Us',
    
    // Navbar
    'nav.mission': 'Mission & Vision',
    'nav.roadmap': 'Our Roadmap',
    'nav.product': 'Products',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    'nav.language.es': 'Spanish',
    'nav.language.en': 'English',
    
    // Hero Section
    'hero.title': 'The definitive ERP for',
    'hero.subtitle': 'service companies',
    'hero.description': 'The comprehensive SaaS platform to manage all aspects of your service business in LATAM.',
    'hero.cta.product': 'See Product',
    'hero.cta.contact': 'Contact Us',
    'hero.feature.automation': 'Intelligent Automation',
    'hero.feature.ai': 'Predictive AI',
    'hero.feature.customers': 'Customer Management',
    'hero.feature.analytics': 'Real-time Analytics',
    'hero.stats.users': 'Active users',
    'hero.stats.efficiency': 'Efficiency',
    
    // Partners Section
    'partners.title': 'Companies that Trust Us',
    'partners.subtitle': 'More than 40 leading companies in their industries already use Te Ayudo to optimize their operations and improve their customer experience.',
    'partners.companies': 'Satisfied Companies',
    'partners.filter': 'Filter by Industry',
    'partners.viewAll': 'View All',
    'partners.viewCarousel': 'View Carousel',
    'partners.cta': 'Want to be part of our satisfied customers?',
    'partners.ctaButton': 'Contact Us Now',
    
    // Footer
    'footer.description': 'The definitive SaaS ERP platform for service companies in LATAM.',
    'footer.links.title': 'Links',
    'footer.links.mission': 'Mission & Vision',
    'footer.links.roadmap': 'Roadmap',
    'footer.links.product': 'Product & Pricing',
    'footer.links.contact': 'Contact',
    'footer.contact.title': 'Contact',
    'footer.social.title': 'Follow Us',
    'footer.copyright': 'All rights reserved.',
    'footer.legal.terms': 'Terms & Conditions',
    'footer.legal.privacy': 'Privacy Policy',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error has occurred',
    'common.tryAgain': 'Try again',
    'common.affiliate': 'Affiliates',
  },
};

// Definición de tipos para el contexto
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Creación del contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Props para el proveedor
type LanguageProviderProps = {
  children: ReactNode;
};

// Función para obtener el idioma desde localStorage
const getSavedLanguage = (): Language => {
  try {
    const savedLanguage = localStorage.getItem('language') as Language;
    return (savedLanguage === 'es' || savedLanguage === 'en') ? savedLanguage : 'es';
  } catch (e) {
    return 'es';
  }
};

// Proveedor del contexto de idioma
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getSavedLanguage);

  // Función para cambiar el idioma
  const setLanguage = (lang: Language) => {
    console.log(`Cambiando idioma a: ${lang}`);
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
      // Evento para sincronizar el idioma entre diferentes componentes
      window.dispatchEvent(new CustomEvent('language-change', { detail: { language: lang } }));
      
      // Forzar una actualización inmediata en la interfaz
      document.documentElement.setAttribute('lang', lang);
      
      // Esto ayuda a actualizar más componentes
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 50);
      
    } catch (e) {
      console.error('Error saving language preference', e);
    }
  };

  // Función de traducción
  const t = (key: string): string => {
    try {
      const currentTranslations = language === 'es' ? translations.es : translations.en;
      return currentTranslations[key as keyof typeof currentTranslations] || key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  // Escuchar cambios de idioma de otros componentes
  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.language) {
        setLanguageState(customEvent.detail.language);
      }
    };

    window.addEventListener('language-change', handleLanguageChange);
    return () => {
      window.removeEventListener('language-change', handleLanguageChange);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto de idioma
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  // Si el contexto no está disponible, proporcionar un fallback
  if (context === undefined) {
    const [language, setLanguageState] = useState<Language>(getSavedLanguage);
    
    const setLanguage = (lang: Language) => {
      console.log(`Cambiando idioma a: ${lang} (fallback)`);
      setLanguageState(lang);
      try {
        localStorage.setItem('language', lang);
        window.dispatchEvent(new CustomEvent('language-change', { detail: { language: lang } }));
        
        // Forzar una actualización inmediata en la interfaz
        document.documentElement.setAttribute('lang', lang);
        
        // Esto ayuda a actualizar más componentes
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 50);
      } catch (e) {
        console.error('Error saving language preference', e);
      }
    };
    
    const t = (key: string): string => {
      try {
        const currentTranslations = language === 'es' ? translations.es : translations.en;
        return currentTranslations[key as keyof typeof currentTranslations] || key;
      } catch (error) {
        console.error(`Translation error for key: ${key}`, error);
        return key;
      }
    };
    
    return { language, setLanguage, t };
  }
  
  return context;
};

// Hook para sincronizar idioma entre componentes
export const useSyncLanguage = (initialLanguage?: Language) => {
  const [language, setLanguageState] = useState<Language>(() => 
    initialLanguage || getSavedLanguage()
  );
  
  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.language) {
        setLanguageState(customEvent.detail.language);
      }
    };
    
    window.addEventListener('language-change', handleLanguageChange);
    return () => {
      window.removeEventListener('language-change', handleLanguageChange);
    };
  }, []);
  
  const setLanguage = (lang: Language) => {
    console.log(`Cambiando idioma a: ${lang} (sync)`);
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
      window.dispatchEvent(new CustomEvent('language-change', { detail: { language: lang } }));
      
      // Forzar una actualización inmediata en la interfaz
      document.documentElement.setAttribute('lang', lang);
      
      // Esto ayuda a actualizar más componentes
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 50);
    } catch (e) {
      console.error('Error saving language preference', e);
    }
  };
  
  return { language, setLanguage };
};

export default LanguageContext;