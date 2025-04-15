import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Define translations
const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.mission': 'Misión & Visión',
    'nav.roadmap': 'Roadmap',
    'nav.product': 'Producto',
    'nav.partners': 'Socios',
    'nav.contact': 'Contacto',
    'nav.language.es': 'Español',
    'nav.language.en': 'Inglés',
    
    // Hero Section
    'hero.title1': 'El ERP definitivo para',
    'hero.title2': 'empresas de servicios',
    'hero.description': 'La plataforma SaaS integral para gestionar todos los aspectos de tu negocio de servicios en LATAM.',
    'hero.cta.product': 'Ver Producto',
    'hero.cta.contact': 'Contáctanos',
    'hero.feature.automation': 'Automatización Inteligente',
    'hero.feature.ai': 'IA Predictiva',
    'hero.feature.customers': 'Gestión de Clientes',
    'hero.feature.analysis': 'Análisis en Tiempo Real',
    'hero.stats.users': 'Usuarios activos',
    'hero.stats.efficiency': 'Eficiencia',
    
    // Mission & Vision
    'mission.title': 'Nuestra Misión & Visión',
    'mission.subtitle': 'Transformando la gestión de servicios con tecnología de vanguardia',
    'mission.missionTitle': 'Misión',
    'mission.missionDescription': 'Proporcionar a las empresas de servicios una plataforma tecnológica integral que simplifique sus operaciones, optimice la experiencia del cliente y aumente su eficiencia operativa.',
    'mission.visionTitle': 'Visión',
    'mission.visionDescription': 'Ser la plataforma tecnológica líder en LATAM para la gestión integral de empresas de servicios, empoderando a miles de negocios para alcanzar su máximo potencial.',
    'mission.valuesTitle': 'Valores',
    'mission.valuesInnovation': 'Innovación',
    'mission.valuesExcellence': 'Excelencia',
    'mission.valuesIntegrity': 'Integridad',
    'mission.valuesCollaboration': 'Colaboración',
    'mission.valuesSustainability': 'Sostenibilidad',
    
    // Roadmap
    'roadmap.title': 'Nuestro Roadmap',
    'roadmap.subtitle': 'Te compartimos nuestro camino y los hitos planeados para revolucionar la gestión de negocios de servicios en Latinoamérica.',
    
    // Product & Pricing
    'product.title': 'Producto & Precios',
    'product.subtitle': 'Descubre nuestra plataforma integral para empresas de servicios y encuentra el plan que mejor se adapte a tus necesidades.',
    'product.tab.mobile': 'Aplicaciones Móviles',
    'product.tab.platform': 'Plataforma SaaS & Landing',
    'product.clientApp.title': 'Aplicación para Clientes',
    'product.clientApp.description': 'Permite a tus clientes agendar citas, realizar pagos y acceder a su historial de servicios.',
    'product.employeeApp.title': 'Aplicación para Empleados',
    'product.employeeApp.description': 'Ayuda a tus empleados a gestionar sus horarios, clientes y servicios desde cualquier lugar.',
    'product.saas.title': 'Plataforma SaaS',
    'product.saas.description': 'Centro de control completo para administrar todos los aspectos de tu negocio.',
    'product.landing.title': 'Landing Privado',
    'product.landing.description': 'Página web personalizada para tu negocio que permite a tus clientes conocer tus servicios y reservar.',
    'product.video.title': 'Mira cómo funciona',
    'product.video.description': 'Nuestro sistema integrado permite administrar todos los aspectos de tu negocio desde la misma plataforma - reservaciones, pagos, inventario y más.',
    'product.pricing.title': 'Planes y Precios',
    'product.pricing.features': 'Características',
    'product.pricing.free': 'Freemium',
    'product.pricing.standard': 'Standard',
    'product.pricing.franchise': 'Franchise',
    'product.pricing.enterprise': 'Enterprise',
    'product.pricing.cta': 'Solicitar Demo',
    'product.addons.title': 'Extras',
    
    // Partners
    'partners.title': 'Empresas que Confían en Nosotros',
    'partners.subtitle': 'Más de 40 empresas líderes en sus industrias ya utilizan Te Ayudo para optimizar sus operaciones y mejorar la experiencia de sus clientes.',
    'partners.companies': 'Empresas Satisfechas',
    'partners.filter': 'Filtrar por Industria',
    'partners.industry.all': 'Todos',
    'partners.industry.home': 'Hogar',
    'partners.industry.vehicles': 'Vehículos',
    'partners.industry.health': 'Salud',
    'partners.industry.beauty': 'Belleza',
    'partners.view.all': 'Ver Todos',
    'partners.view.carousel': 'Ver Carrusel',
    'partners.cta': '¿Quieres ser parte de nuestros clientes satisfechos?',
    'partners.cta.button': 'Contáctanos Ahora',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Listo para optimizar tu negocio? Envíanos un mensaje y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.company': 'Empresa',
    'contact.form.industry': 'Industria',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.info.title': 'Información de Contacto',
    'contact.info.address': 'Dirección',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Teléfono',
    'contact.info.hours': 'Horario de Atención',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.mission': 'Mission & Vision',
    'nav.roadmap': 'Roadmap',
    'nav.product': 'Product',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    'nav.language.es': 'Spanish',
    'nav.language.en': 'English',
    
    // Hero Section
    'hero.title1': 'The definitive ERP for',
    'hero.title2': 'service companies',
    'hero.description': 'The comprehensive SaaS platform to manage all aspects of your service business in LATAM.',
    'hero.cta.product': 'View Product',
    'hero.cta.contact': 'Contact Us',
    'hero.feature.automation': 'Intelligent Automation',
    'hero.feature.ai': 'Predictive AI',
    'hero.feature.customers': 'Customer Management',
    'hero.feature.analysis': 'Real-Time Analysis',
    'hero.stats.users': 'Active users',
    'hero.stats.efficiency': 'Efficiency',
    
    // Mission & Vision
    'mission.title': 'Our Mission & Vision',
    'mission.subtitle': 'Transforming service management with cutting-edge technology',
    'mission.missionTitle': 'Mission',
    'mission.missionDescription': 'To provide service companies with a comprehensive technology platform that simplifies their operations, optimizes customer experience, and increases their operational efficiency.',
    'mission.visionTitle': 'Vision',
    'mission.visionDescription': 'To be the leading technology platform in LATAM for the comprehensive management of service companies, empowering thousands of businesses to reach their maximum potential.',
    'mission.valuesTitle': 'Values',
    'mission.valuesInnovation': 'Innovation',
    'mission.valuesExcellence': 'Excellence',
    'mission.valuesIntegrity': 'Integrity',
    'mission.valuesCollaboration': 'Collaboration',
    'mission.valuesSustainability': 'Sustainability',
    
    // Roadmap
    'roadmap.title': 'Our Roadmap',
    'roadmap.subtitle': 'We share our journey and planned milestones to revolutionize the management of service businesses in Latin America.',
    
    // Product & Pricing
    'product.title': 'Product & Pricing',
    'product.subtitle': 'Discover our comprehensive platform for service companies and find the plan that best suits your needs.',
    'product.tab.mobile': 'Mobile Apps',
    'product.tab.platform': 'SaaS Platform & Landing',
    'product.clientApp.title': 'Client App',
    'product.clientApp.description': 'Allows your clients to schedule appointments, make payments, and access their service history.',
    'product.employeeApp.title': 'Employee App',
    'product.employeeApp.description': 'Helps your employees manage their schedules, clients, and services from anywhere.',
    'product.saas.title': 'SaaS Platform',
    'product.saas.description': 'Complete control center to manage all aspects of your business.',
    'product.landing.title': 'Private Landing',
    'product.landing.description': 'Customized website for your business that allows your clients to learn about your services and book appointments.',
    'product.video.title': 'See how it works',
    'product.video.description': 'Our integrated system allows you to manage all aspects of your business from the same platform - reservations, payments, inventory, and more.',
    'product.pricing.title': 'Plans and Pricing',
    'product.pricing.features': 'Features',
    'product.pricing.free': 'Freemium',
    'product.pricing.standard': 'Standard',
    'product.pricing.franchise': 'Franchise',
    'product.pricing.enterprise': 'Enterprise',
    'product.pricing.cta': 'Request Demo',
    'product.addons.title': 'Add-ons',
    
    // Partners
    'partners.title': 'Companies that Trust Us',
    'partners.subtitle': 'More than 40 leading companies in their industries already use Te Ayudo to optimize their operations and improve their customer experience.',
    'partners.companies': 'Satisfied Companies',
    'partners.filter': 'Filter by Industry',
    'partners.industry.all': 'All',
    'partners.industry.home': 'Home',
    'partners.industry.vehicles': 'Vehicles',
    'partners.industry.health': 'Health',
    'partners.industry.beauty': 'Beauty',
    'partners.view.all': 'View All',
    'partners.view.carousel': 'View Carousel',
    'partners.cta': 'Want to be part of our satisfied customers?',
    'partners.cta.button': 'Contact Us Now',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to optimize your business? Send us a message and our team will get in touch with you in less than 24 hours.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.industry': 'Industry',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.hours': 'Working Hours',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',
  }
};

// Create context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with a default language, preferring from localStorage if available
  const getSavedLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
        return savedLanguage;
      }
    }
    return 'es'; // Default to Spanish
  };
  
  const [language, setLanguageState] = useState<Language>(getSavedLanguage());

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    try {
      const currentTranslations = translations[language] || translations['es'];
      return (currentTranslations as Record<string, string>)[key] || key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};