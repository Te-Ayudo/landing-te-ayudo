import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Company logos data
const partnerLogos = [
  {
    name: "Empresa 1",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Salud"
  },
  {
    name: "Empresa 2",
    logo: "https://img.icons8.com/color/96/000000/company.png", 
    industry: "Tecnología"
  },
  {
    name: "Empresa 3",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Financiero"
  },
  {
    name: "Empresa 4",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Retail"
  },
  {
    name: "Empresa 5",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Educación"
  },
  {
    name: "Empresa 6",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Hospitalidad"
  },
  {
    name: "Empresa 7",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Marketing"
  },
  {
    name: "Empresa 8",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Consultoría"
  },
  {
    name: "Empresa 9",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Inmobiliaria"
  },
  {
    name: "Empresa 10",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Turismo"
  },
  {
    name: "Empresa 11",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Automotriz"
  },
  {
    name: "Empresa 12",
    logo: "https://img.icons8.com/color/96/000000/company.png",
    industry: "Logística"
  }
];

// Industries with colors for filtering
const industries = [
  { name: "Todos", color: "#6c757d" },
  { name: "Salud", color: "#198754" },
  { name: "Tecnología", color: "#0d6efd" },
  { name: "Financiero", color: "#fd7e14" },
  { name: "Retail", color: "#dc3545" },
  { name: "Educación", color: "#6f42c1" },
  { name: "Hospitalidad", color: "#20c997" },
  { name: "Marketing", color: "#0dcaf0" },
  { name: "Consultoría", color: "#adb5bd" },
  { name: "Inmobiliaria", color: "#fd7e14" },
  { name: "Turismo", color: "#6610f2" },
  { name: "Automotriz", color: "#d63384" },
  { name: "Logística", color: "#ffc107" }
];

const Partners = () => {
  const [activeIndustry, setActiveIndustry] = useState("Todos");
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <img
                src={partner.logo}
                alt={`Logo de ${partner.name}`}
                className="h-16 w-16 object-contain mb-2"
              />
              <span className="text-sm font-medium text-center">{partner.name}</span>
              <span className="text-xs text-gray-500">{partner.industry}</span>
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