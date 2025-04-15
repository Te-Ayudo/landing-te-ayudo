import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Definición de tipos para la traducción
export type Language = 'es' | 'en';

// Textos generales compartidos entre todos los componentes
export const translations = {
  es: {
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
    'footer.links': 'Enlaces',
    'footer.mission': 'Misión & Visión',
    'footer.roadmap': 'Roadmap',
    'footer.product': 'Producto & Precios',
    'footer.contact': 'Contacto',
    'footer.contactInfo': 'Contacto',
    'footer.followUs': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.terms': 'Términos y Condiciones',
    'footer.privacy': 'Política de Privacidad',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Ha ocurrido un error',
    'common.tryAgain': 'Intentar nuevamente',
    'common.affiliate': 'Afiliados',
  },
  en: {
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
    'footer.links': 'Links',
    'footer.mission': 'Mission & Vision',
    'footer.roadmap': 'Roadmap',
    'footer.product': 'Product & Pricing',
    'footer.contact': 'Contact',
    'footer.contactInfo': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    
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
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
      // Evento para sincronizar el idioma entre diferentes componentes
      window.dispatchEvent(new CustomEvent('language-change', { detail: { language: lang } }));
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
      setLanguageState(lang);
      try {
        localStorage.setItem('language', lang);
        window.dispatchEvent(new CustomEvent('language-change', { detail: { language: lang } }));
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
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
      window.dispatchEvent(new CustomEvent('language-change', { detail: { language: lang } }));
    } catch (e) {
      console.error('Error saving language preference', e);
    }
  };
  
  return { language, setLanguage };
};

export default LanguageContext;