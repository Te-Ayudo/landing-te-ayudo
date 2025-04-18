import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Mantenemos estas traducciones solo para el manejo de los nombres de industrias
// El resto de textos se maneja a través del contexto global de idioma
const translations = {
  es: {
    title: 'Empresas que Confían en Nosotros',
    subtitle: 'Más de 40 empresas líderes en sus industrias ya utilizan Te Ayudo para optimizar sus operaciones y mejorar la experiencia de sus clientes.',
    companies: 'Empresas Satisfechas',
    filter: 'Filtrar por Industria',
    viewAll: 'Ver Todos',
    viewCarousel: 'Ver Carrusel',
    cta: '¿Quieres ser parte de nuestros clientes satisfechos?',
    ctaButton: 'Contáctanos Ahora',
    previous: 'Anterior',
    next: 'Siguiente',
    scrollLeft: 'Desplazar a la izquierda',
    scrollRight: 'Desplazar a la derecha'
  },
  en: {
    title: 'Companies that Trust Us',
    subtitle: 'More than 40 leading companies in their industries already use Te Ayudo to optimize their operations and improve their customer experience.',
    companies: 'Satisfied Companies',
    filter: 'Filter by Industry',
    viewAll: 'View All',
    viewCarousel: 'View Carousel',
    cta: 'Want to be part of our satisfied customers?',
    ctaButton: 'Contact Us Now',
    previous: 'Previous',
    next: 'Next',
    scrollLeft: 'Scroll left',
    scrollRight: 'Scroll right'
  }
};

// Company logos data
const partnerLogos = [
  // Hogar
  {
    name: "Clean House",
    logo: "https://img.icons8.com/fluency/96/000000/vacuum-cleaner.png",
    industry: "Hogar"
  },
  {
    name: "Plomeros Express",
    logo: "https://img.icons8.com/fluency/96/000000/plumbing.png",
    industry: "Hogar"
  },
  {
    name: "Electricistas 24/7",
    logo: "https://img.icons8.com/fluency/96/000000/electrical.png",
    industry: "Hogar"
  },
  {
    name: "Jardinería Verde",
    logo: "https://img.icons8.com/fluency/96/000000/garden-shears.png",
    industry: "Hogar"
  },
  {
    name: "Pintores Pro",
    logo: "https://img.icons8.com/fluency/96/000000/paint-roller.png",
    industry: "Hogar"
  },
  {
    name: "Carpinteros Premium",
    logo: "https://img.icons8.com/fluency/96/000000/saw.png",
    industry: "Hogar"
  },
  {
    name: "Aire Fresco",
    logo: "https://img.icons8.com/fluency/96/000000/air-conditioner.png",
    industry: "Hogar"
  },
  {
    name: "Decoración Interior",
    logo: "https://img.icons8.com/fluency/96/000000/interior-design.png",
    industry: "Hogar"
  },
  
  // Vehículos
  {
    name: "Mecánica Rápida",
    logo: "https://img.icons8.com/fluency/96/000000/car-service.png", 
    industry: "Vehículos"
  },
  {
    name: "Lavado Express",
    logo: "https://img.icons8.com/fluency/96/000000/car-wash.png", 
    industry: "Vehículos"
  },
  {
    name: "Grúas 24 Horas",
    logo: "https://img.icons8.com/fluency/96/000000/tow-truck.png", 
    industry: "Vehículos"
  },
  {
    name: "Neumáticos Seguros",
    logo: "https://img.icons8.com/fluency/96/000000/tire.png", 
    industry: "Vehículos"
  },
  {
    name: "Pintura Automotriz",
    logo: "https://img.icons8.com/fluency/96/000000/spray-paint.png", 
    industry: "Vehículos"
  },
  {
    name: "Electricidad Automotriz",
    logo: "https://img.icons8.com/fluency/96/000000/car-battery.png", 
    industry: "Vehículos"
  },
  {
    name: "Motor Tech",
    logo: "https://img.icons8.com/fluency/96/000000/engine.png", 
    industry: "Vehículos"
  },
  {
    name: "Vidrios y Polarizados",
    logo: "https://img.icons8.com/fluency/96/000000/windshield.png", 
    industry: "Vehículos"
  },
  
  // Salud
  {
    name: "Médicos a Domicilio",
    logo: "https://img.icons8.com/fluency/96/000000/doctor-male.png",
    industry: "Salud"
  },
  {
    name: "Fisioterapia Pro",
    logo: "https://img.icons8.com/fluency/96/000000/physical-therapy.png",
    industry: "Salud"
  },
  {
    name: "Nutrición Esencial",
    logo: "https://img.icons8.com/fluency/96/000000/healthy-food.png",
    industry: "Salud"
  },
  {
    name: "Enfermería 24/7",
    logo: "https://img.icons8.com/fluency/96/000000/nurse-female.png",
    industry: "Salud"
  },
  {
    name: "Ambulancias Rápidas",
    logo: "https://img.icons8.com/fluency/96/000000/ambulance.png",
    industry: "Salud"
  },
  {
    name: "Laboratorio Móvil",
    logo: "https://img.icons8.com/fluency/96/000000/test-tube.png",
    industry: "Salud"
  },
  {
    name: "Odontología Express",
    logo: "https://img.icons8.com/fluency/96/000000/tooth.png",
    industry: "Salud"
  },
  {
    name: "Psicología Online",
    logo: "https://img.icons8.com/fluency/96/000000/mental-health.png",
    industry: "Salud"
  },
  
  // Belleza
  {
    name: "Estilistas Premium",
    logo: "https://img.icons8.com/fluency/96/000000/scissors.png",
    industry: "Belleza"
  },
  {
    name: "Maquillaje Profesional",
    logo: "https://img.icons8.com/fluency/96/000000/makeup.png",
    industry: "Belleza"
  },
  {
    name: "Uñas Perfectas",
    logo: "https://img.icons8.com/fluency/96/000000/nail-polish.png",
    industry: "Belleza"
  },
  {
    name: "Masajes Relajantes",
    logo: "https://img.icons8.com/fluency/96/000000/massage.png",
    industry: "Belleza"
  },
  {
    name: "Belleza Móvil",
    logo: "https://img.icons8.com/fluency/96/000000/barbershop.png",
    industry: "Belleza"
  },
  {
    name: "SPA Express",
    logo: "https://img.icons8.com/fluency/96/000000/spa-flower.png",
    industry: "Belleza"
  },
  {
    name: "Pestañas y Cejas",
    logo: "https://img.icons8.com/fluency/96/000000/eyelash.png",
    industry: "Belleza"
  },
  {
    name: "Tratamientos Faciales",
    logo: "https://img.icons8.com/fluency/96/000000/face-mask.png",
    industry: "Belleza"
  }
];

// Industries with colors for filtering
const industriesEs = [
  { name: "Todos", color: "#ff770f" },
  { name: "Hogar", color: "#5ccdcc" },
  { name: "Vehículos", color: "#ff770f" },
  { name: "Salud", color: "#5ccdcc" },
  { name: "Belleza", color: "#ff770f" }
];

const industriesEn = [
  { name: "All", color: "#ff770f" },
  { name: "Home", color: "#5ccdcc" },
  { name: "Vehicles", color: "#ff770f" },
  { name: "Health", color: "#5ccdcc" },
  { name: "Beauty", color: "#ff770f" }
];

const Partners = () => {
  // Usar el contexto global de idioma
  const { language, t } = useLanguage();

  const defaultIndustry = language === 'es' ? "Todos" : "All";
  const [activeIndustry, setActiveIndustry] = useState(defaultIndustry);
  const [companyCount, setCompanyCount] = useState(0);
  const [showAllLogos, setShowAllLogos] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const filtersRef = useRef<HTMLDivElement>(null);
  
  // Use the correct industries based on language
  const industries = language === 'es' ? industriesEs : industriesEn;
  
  // Animate the company count
  useEffect(() => {
    const totalCompanies = 40;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(totalCompanies / (duration / 50)); // Update every 50ms
    
    if (companyCount < totalCompanies) {
      const timer = setTimeout(() => {
        setCompanyCount(prev => Math.min(prev + increment, totalCompanies));
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [companyCount]);
  
  // Filter logos based on selected industry
  const isAllFilter = activeIndustry === "Todos" || activeIndustry === "All";
  const filteredLogos = isAllFilter
    ? partnerLogos
    : partnerLogos.filter(logo => {
        // Map English industry names to Spanish ones if needed
        if (language === 'en') {
          const industryMap: Record<string, string> = {
            'Home': 'Hogar',
            'Vehicles': 'Vehículos',
            'Health': 'Salud',
            'Beauty': 'Belleza'
          };
          return logo.industry === industryMap[activeIndustry as keyof typeof industryMap];
        }
        return logo.industry === activeIndustry;
      });
    
  // Function to organize logos into a 2D array: rows and columns
  // Each row has 6 logos (for larger screens), fewer on smaller screens
  const organizeLogosIntoRows = useCallback(() => {
    const logosPerRow = 6;
    const rowsToShow = 2; // Show 2 rows at a time
    const result = [];
    
    // Create rows of logos
    for (let i = 0; i < filteredLogos.length; i += logosPerRow) {
      result.push(filteredLogos.slice(i, i + logosPerRow));
    }
    
    // Group rows into pages (2 rows per page)
    const pages = [];
    for (let i = 0; i < result.length; i += rowsToShow) {
      pages.push(result.slice(i, i + rowsToShow));
    }
    
    return pages;
  }, [filteredLogos]);
  
  const organizedLogos = organizeLogosIntoRows();
  const totalSlides = organizedLogos.length;
  
  // Auto-scroll carousel
  useEffect(() => {
    if (!showAllLogos && totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [currentSlide, totalSlides, showAllLogos]);
  
  // Handle next/prev slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  // Scroll the filters into view if needed
  const scrollFilters = (direction: 'left' | 'right') => {
    if (filtersRef.current) {
      const scrollAmount = 150;
      const currentScroll = filtersRef.current.scrollLeft;
      filtersRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="partners" className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('partners.title')}</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="bg-[#ff770f]/10 rounded-lg px-4 py-2 inline-flex items-center justify-center">
              <span className="text-3xl font-bold text-[#ff770f]">{companyCount}+</span>
            </div>
            <span className="text-xl font-medium text-gray-700">{t('partners.companies')}</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#ff770f] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Industry filters */}
        <div className="mb-6 relative">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold flex items-center">
              <Filter className="h-5 w-5 mr-2 text-[#ff770f]" />
              {t('partners.filter')}
            </h3>
            
            <div className="flex space-x-2 md:hidden">
              <button 
                onClick={() => scrollFilters('left')}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label={language === 'es' ? "Desplazar a la izquierda" : "Scroll left"}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollFilters('right')}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label={language === 'es' ? "Desplazar a la derecha" : "Scroll right"}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div 
            ref={filtersRef}
            className="flex overflow-x-auto md:flex-wrap scrollbar-hide pb-2 gap-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map(industry => (
              <button
                key={industry.name}
                onClick={() => setActiveIndustry(industry.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors ${
                  activeIndustry === industry.name
                    ? "text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{ 
                  backgroundColor: activeIndustry === industry.name ? industry.color : undefined
                }}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Partners display toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowAllLogos(!showAllLogos)}
            className="text-sm font-medium text-[#ff770f] bg-[#ff770f]/10 px-4 py-2 rounded-md hover:bg-[#ff770f]/20 transition-colors"
          >
            {showAllLogos ? t('partners.viewCarousel') : t('partners.viewAll')}
          </button>
        </div>

        {/* Partners carousel view */}
        {!showAllLogos && (
          <div className="relative">
            <div 
              ref={carouselRef}
              className="overflow-hidden rounded-xl border border-gray-100 shadow-sm bg-white p-6"
            >
              <div className="relative" style={{ height: "250px" }}> {/* Fixed height container */}
                {organizedLogos.map((page, pageIndex) => (
                  <div 
                    key={`page-${pageIndex}`}
                    className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${
                      pageIndex === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    {page.map((row, rowIndex) => (
                      <div 
                        key={`row-${pageIndex}-${rowIndex}`} 
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full mb-6"
                      >
                        {row.map((partner, partnerIndex) => (
                          <div
                            key={`${partner.name}-${pageIndex}-${rowIndex}-${partnerIndex}`}
                            className="flex flex-col items-center justify-center p-3 hover:scale-110 transition-transform duration-300 cursor-pointer"
                          >
                            <div className="bg-gray-50 p-3 rounded-full mb-2 hover:bg-[#fff8f0] transition-colors flex items-center justify-center" style={{ width: '70px', height: '70px' }}>
                              <img
                                src={partner.logo}
                                alt={`Logo de ${partner.name}`}
                                className="h-12 w-12 object-contain"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-sm font-medium text-center hover:text-[#ff770f] transition-colors line-clamp-1 w-full">{partner.name}</span>
                              <span className="text-xs text-gray-500 line-clamp-1">{partner.industry}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel controls */}
            {totalSlides > 1 && (
              <>
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button 
                    onClick={goToPrevSlide}
                    className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-[#ff770f] transition-colors -ml-3"
                    aria-label={language === 'es' ? "Anterior" : "Previous"}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button 
                    onClick={goToNextSlide}
                    className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-[#ff770f] transition-colors -mr-3"
                    aria-label={language === 'es' ? "Siguiente" : "Next"}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Carousel indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={`indicator-${index}`}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        currentSlide === index ? "bg-[#ff770f]" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Ir a página ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        
        {/* Partners grid view */}
        {showAllLogos && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {filteredLogos.map((partner, index) => (
              <div
                key={`grid-${partner.name}-${index}`}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-[#ff770f]/30 hover:scale-105 group cursor-pointer"
              >
                <div className="bg-gray-50 p-3 rounded-full mb-3 group-hover:bg-[#fff8f0] transition-colors flex items-center justify-center" style={{ width: '80px', height: '80px' }}>
                  <img
                    src={partner.logo}
                    alt={`Logo de ${partner.name}`}
                    className="h-14 w-14 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-center w-full">
                  <span className="text-sm font-medium text-center group-hover:text-[#ff770f] transition-colors line-clamp-1 w-full">{partner.name}</span>
                  <span className="text-xs text-gray-500 mt-1 line-clamp-1">{partner.industry}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">{t('partners.cta')}</p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center bg-[#ff770f] text-white px-6 py-3 rounded-md font-medium hover:bg-[#ff770f]/90 transition-colors"
          >
            {t('partners.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;