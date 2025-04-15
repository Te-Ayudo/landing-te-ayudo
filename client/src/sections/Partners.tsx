import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Company logos data
const partnerLogos = [
  // Salud
  {
    name: "Hospital Premier",
    logo: "https://img.icons8.com/fluency/96/000000/hospital-3.png",
    industry: "Salud"
  },
  {
    name: "Clínica Vitalidad",
    logo: "https://img.icons8.com/fluency/96/000000/clinic.png",
    industry: "Salud"
  },
  {
    name: "Dental Sonrisa",
    logo: "https://img.icons8.com/fluency/96/000000/tooth.png",
    industry: "Salud"
  },
  {
    name: "Fisiocentro",
    logo: "https://img.icons8.com/fluency/96/000000/physical-therapy.png",
    industry: "Salud"
  },
  {
    name: "Laboratorio Análisis",
    logo: "https://img.icons8.com/fluency/96/000000/test-tube.png",
    industry: "Salud"
  },
  
  // Tecnología
  {
    name: "TechSolutions",
    logo: "https://img.icons8.com/fluency/96/000000/cloud-computing.png", 
    industry: "Tecnología"
  },
  {
    name: "DataCore",
    logo: "https://img.icons8.com/fluency/96/000000/database.png", 
    industry: "Tecnología"
  },
  {
    name: "InnovaTech",
    logo: "https://img.icons8.com/fluency/96/000000/circuit.png", 
    industry: "Tecnología"
  },
  {
    name: "DigitalWave",
    logo: "https://img.icons8.com/fluency/96/000000/code.png", 
    industry: "Tecnología"
  },
  {
    name: "BrainByte",
    logo: "https://img.icons8.com/fluency/96/000000/neural-connections.png", 
    industry: "Tecnología"
  },
  
  // Financiero
  {
    name: "Capital Finance",
    logo: "https://img.icons8.com/fluency/96/000000/bank-building.png",
    industry: "Financiero"
  },
  {
    name: "InverGroup",
    logo: "https://img.icons8.com/fluency/96/000000/money-bag.png",
    industry: "Financiero"
  },
  {
    name: "Crédito Amigo",
    logo: "https://img.icons8.com/fluency/96/000000/card-in-use.png",
    industry: "Financiero"
  },
  {
    name: "Aseguradora Nacional",
    logo: "https://img.icons8.com/fluency/96/000000/shield.png",
    industry: "Financiero"
  },
  {
    name: "Planifica Futuro",
    logo: "https://img.icons8.com/fluency/96/000000/stocks-growth.png",
    industry: "Financiero"
  },
  
  // Retail
  {
    name: "MegaStore",
    logo: "https://img.icons8.com/fluency/96/000000/shop.png",
    industry: "Retail"
  },
  {
    name: "Fashion Express",
    logo: "https://img.icons8.com/fluency/96/000000/t-shirt.png",
    industry: "Retail"
  },
  {
    name: "Electronics Pro",
    logo: "https://img.icons8.com/fluency/96/000000/smartphone-tablet.png",
    industry: "Retail"
  },
  {
    name: "Home & Decor",
    logo: "https://img.icons8.com/fluency/96/000000/furniture.png",
    industry: "Retail"
  },
  {
    name: "SuperMarket Plus",
    logo: "https://img.icons8.com/fluency/96/000000/shopping-cart.png",
    industry: "Retail"
  },
  
  // Educación
  {
    name: "Instituto Avanzado",
    logo: "https://img.icons8.com/fluency/96/000000/graduation-cap.png",
    industry: "Educación"
  },
  {
    name: "Colegio Futuro",
    logo: "https://img.icons8.com/fluency/96/000000/school-building.png",
    industry: "Educación"
  },
  {
    name: "Centro de Idiomas",
    logo: "https://img.icons8.com/fluency/96/000000/language.png",
    industry: "Educación"
  },
  {
    name: "Academia Tech",
    logo: "https://img.icons8.com/fluency/96/000000/laptop-coding.png",
    industry: "Educación"
  },
  {
    name: "Escuela de Artes",
    logo: "https://img.icons8.com/fluency/96/000000/paint-palette.png",
    industry: "Educación"
  },
  
  // Hospitalidad
  {
    name: "Hotel Estrella",
    logo: "https://img.icons8.com/fluency/96/000000/hotel-building.png",
    industry: "Hospitalidad"
  },
  {
    name: "Restaurante Sabor",
    logo: "https://img.icons8.com/fluency/96/000000/restaurant.png",
    industry: "Hospitalidad"
  },
  {
    name: "Café Aroma",
    logo: "https://img.icons8.com/fluency/96/000000/coffee-cup.png",
    industry: "Hospitalidad"
  },
  {
    name: "Resort Paradise",
    logo: "https://img.icons8.com/fluency/96/000000/palm-tree.png",
    industry: "Hospitalidad"
  },
  {
    name: "Event Center",
    logo: "https://img.icons8.com/fluency/96/000000/confetti.png",
    industry: "Hospitalidad"
  },
  
  // Marketing
  {
    name: "CreativeMarketing",
    logo: "https://img.icons8.com/fluency/96/000000/idea.png",
    industry: "Marketing"
  },
  {
    name: "Digital Growth",
    logo: "https://img.icons8.com/fluency/96/000000/line-chart.png",
    industry: "Marketing"
  },
  {
    name: "Social Impact",
    logo: "https://img.icons8.com/fluency/96/000000/like.png",
    industry: "Marketing"
  },
  {
    name: "BrandBuilders",
    logo: "https://img.icons8.com/fluency/96/000000/diversity.png",
    industry: "Marketing"
  },
  {
    name: "ContentCreators",
    logo: "https://img.icons8.com/fluency/96/000000/video.png",
    industry: "Marketing"
  },
  
  // Consultoría
  {
    name: "Asesores Inc",
    logo: "https://img.icons8.com/fluency/96/000000/businessman.png",
    industry: "Consultoría"
  },
  {
    name: "Business Pro",
    logo: "https://img.icons8.com/fluency/96/000000/briefcase.png",
    industry: "Consultoría"
  },
  {
    name: "Legal Solutions",
    logo: "https://img.icons8.com/fluency/96/000000/scales.png",
    industry: "Consultoría"
  },
  {
    name: "Tax Advisors",
    logo: "https://img.icons8.com/fluency/96/000000/tax.png",
    industry: "Consultoría"
  },
  {
    name: "Coaching Executive",
    logo: "https://img.icons8.com/fluency/96/000000/conference-call.png",
    industry: "Consultoría"
  },
  
  // Inmobiliaria
  {
    name: "Propiedades Top",
    logo: "https://img.icons8.com/fluency/96/000000/cottage.png",
    industry: "Inmobiliaria"
  },
  {
    name: "Urban Homes",
    logo: "https://img.icons8.com/fluency/96/000000/city.png",
    industry: "Inmobiliaria"
  },
  {
    name: "Construye Futuro",
    logo: "https://img.icons8.com/fluency/96/000000/crane.png",
    industry: "Inmobiliaria"
  },
  {
    name: "Bienes Raíces Plus",
    logo: "https://img.icons8.com/fluency/96/000000/building.png",
    industry: "Inmobiliaria"
  }
];

// Industries with colors for filtering
const industries = [
  { name: "Todos", color: "#ff770f" },
  { name: "Salud", color: "#5ccdcc" },
  { name: "Tecnología", color: "#ff770f" },
  { name: "Financiero", color: "#5ccdcc" },
  { name: "Retail", color: "#ff770f" },
  { name: "Educación", color: "#5ccdcc" },
  { name: "Hospitalidad", color: "#ff770f" },
  { name: "Marketing", color: "#5ccdcc" },
  { name: "Consultoría", color: "#ff770f" },
  { name: "Inmobiliaria", color: "#5ccdcc" }
];

const Partners = () => {
  const [activeIndustry, setActiveIndustry] = useState("Todos");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
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
  const filteredLogos = activeIndustry === "Todos"
    ? partnerLogos
    : partnerLogos.filter(logo => logo.industry === activeIndustry);

  // Scroll slider left
  const scrollLeft = () => {
    if (sliderRef.current) {
      const newPosition = Math.max(0, scrollPosition - 300);
      sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  // Scroll slider right
  const scrollRight = () => {
    if (sliderRef.current) {
      const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const newPosition = Math.min(maxScrollLeft, scrollPosition + 300);
      sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  // Update scroll position when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setScrollPosition(sliderRef.current.scrollLeft);
      }
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener("scroll", handleScroll);
      return () => sliderElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section id="partners" className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Empresas que Confían en Nosotros</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="bg-[#ff770f]/10 rounded-lg px-4 py-2 inline-flex items-center justify-center">
              <span className="text-3xl font-bold text-[#ff770f]">{companyCount}+</span>
            </div>
            <span className="text-xl font-medium text-gray-700">Empresas Satisfechas</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Más de 40 empresas líderes en sus industrias ya utilizan Te Ayudo para optimizar sus operaciones y mejorar la experiencia de sus clientes.
          </p>
          <div className="w-24 h-1 bg-[#ff770f] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Industry filters */}
        <div className="mb-10 relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Filtrar por Industria</h3>
            <div className="flex space-x-2">
              <button 
                onClick={scrollLeft}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Desplazar a la izquierda"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={scrollRight}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Desplazar a la derecha"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide pb-2 snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map(industry => (
              <button
                key={industry.name}
                onClick={() => setActiveIndustry(industry.name)}
                className={`px-4 py-2 rounded-full mr-2 text-sm font-medium whitespace-nowrap snap-start ${
                  activeIndustry === industry.name
                    ? `bg-[${industry.color}] text-white`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{ 
                  backgroundColor: activeIndustry === industry.name ? industry.color : undefined,
                  minWidth: 'fit-content'
                }}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {filteredLogos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-[#ff770f]/30 hover:scale-105 group cursor-pointer"
            >
              <div className="bg-gray-50 p-3 rounded-full mb-3 group-hover:bg-[#fff8f0] transition-colors">
                <img
                  src={partner.logo}
                  alt={`Logo de ${partner.name}`}
                  className="h-14 w-14 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-center group-hover:text-[#ff770f] transition-colors">{partner.name}</span>
              <span className="text-xs text-gray-500 mt-1">{partner.industry}</span>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿Quieres ser parte de nuestros clientes satisfechos?</p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center bg-[#ff770f] text-white px-6 py-3 rounded-md font-medium hover:bg-[#ff770f]/90 transition-colors"
          >
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;