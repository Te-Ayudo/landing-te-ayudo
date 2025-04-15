import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

// Define un tipo para los elementos de la línea de tiempo
interface TimelineItem {
  year: string;
  title: string;
  color: "primary" | "secondary";
  milestones: string[];
}

const Roadmap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();
  
  // Timeline data con traducciones
  const timelineItems: TimelineItem[] = [
    {
      year: "2024",
      title: t('roadmap.2024'),
      color: "primary",
      milestones: [
        t('roadmap.2024.milestone1'),
        t('roadmap.2024.milestone2')
      ]
    },
    {
      year: "2025",
      title: t('roadmap.2025'),
      color: "secondary",
      milestones: [
        t('roadmap.2025.milestone1'),
        t('roadmap.2025.milestone2')
      ]
    },
    {
      year: "2026",
      title: t('roadmap.2026'),
      color: "primary",
      milestones: [
        t('roadmap.2026.milestone1'),
        t('roadmap.2026.milestone2')
      ]
    },
    {
      year: "2027",
      title: t('roadmap.2027'),
      color: "secondary",
      milestones: [
        t('roadmap.2027.milestone1'),
        t('roadmap.2027.milestone2')
      ]
    },
    {
      year: "2028",
      title: t('roadmap.2028'),
      color: "primary",
      milestones: [
        t('roadmap.2028.milestone1'),
        t('roadmap.2028.milestone2')
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('roadmap');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="roadmap" className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('roadmap.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('roadmap.description')}
          </p>
          <div className="w-24 h-1 bg-[#ff770f] mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Horizontal Timeline (Desktop) */}
        <div className="relative mt-16 hidden md:block">
          {/* Timeline Bar */}
          <div className="absolute h-1 bg-gray-300 top-10 left-0 right-0"></div>
          
          {/* Timeline Items */}
          <div className="flex justify-between relative">
            {timelineItems.map((item, index) => (
              <div 
                key={item.year} 
                className={cn(
                  "relative flex flex-col items-center transform transition-all duration-1000",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  // Stagger the animation
                  isVisible && `transition-delay-${index * 200}`
                )}
                style={{ 
                  transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                }}
              >
                <div 
                  className={cn(
                    "w-20 h-20 flex items-center justify-center text-white font-bold z-10 transition-transform duration-500",
                    isVisible ? "scale-100" : "scale-0",
                    item.color === "primary" ? "bg-[#ff770f]" : "bg-[#5ccdcc]"
                  )}
                  style={{ 
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    transitionDelay: isVisible ? `${index * 200 + 200}ms` : '0ms'
                  }}
                >
                  {item.year}
                </div>
                <h3 className="mt-4 font-semibold text-lg text-center">{item.title}</h3>
                <div className={cn(
                  "mt-2 p-4 bg-white rounded-lg shadow-md max-w-xs transform transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ 
                  transitionDelay: isVisible ? `${index * 200 + 400}ms` : '0ms'
                }}>
                  <ul className="text-sm space-y-2">
                    {item.milestones.map((milestone, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className={cn(
                          "h-5 w-5 mr-1 flex-shrink-0",
                          item.color === "primary" ? "text-[#ff770f]" : "text-[#5ccdcc]"
                        )} />
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden space-y-8">
          {timelineItems.map((item, index) => (
            <div 
              key={item.year}
              className={cn(
                "flex transform transition-all duration-700",
                isVisible ? "translate-x-0 opacity-100" : "translate-x-[-50px] opacity-0"
              )}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
              }}
            >
              <div className="mr-4">
                <div 
                  className={cn(
                    "w-16 h-16 flex items-center justify-center text-white font-bold",
                    item.color === "primary" ? "bg-[#ff770f]" : "bg-[#5ccdcc]"
                  )}
                  style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                >
                  {item.year}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                  <ul className="text-sm space-y-2">
                    {item.milestones.map((milestone, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className={cn(
                          "h-5 w-5 mr-1 flex-shrink-0",
                          item.color === "primary" ? "text-[#ff770f]" : "text-[#5ccdcc]"
                        )} />
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;