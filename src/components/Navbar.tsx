import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import teAyudoLogo from "@assets/Post & Imagenes.png";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  
  // Usar el contexto global de idioma
  const { language, setLanguage, t } = useLanguage();

  // Add scroll event listener to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close language menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#language-menu-container')) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const toggleLanguageMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowLanguageMenu(!showLanguageMenu);
  };

  const changeLanguage = (lang: 'es' | 'en') => {
    console.log(`Cambiando idioma desde Navbar a: ${lang}`);
    // Solo llamamos a setLanguage y cerramos el menú
    // El nuevo contexto ya maneja el resto de la lógica
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 py-5 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={teAyudoLogo} alt="Te Ayudo Logo" className="h-16" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <button onClick={() => handleNavLinkClick('mission')} className="text-dark hover:text-[#ff770f] font-medium transition-colors">
              {t('nav.mission')}
            </button>
            <button onClick={() => handleNavLinkClick('roadmap')} className="text-dark hover:text-[#ff770f] font-medium transition-colors">
              {t('nav.roadmap')}
            </button>
            <button onClick={() => handleNavLinkClick('product')} className="text-dark hover:text-[#ff770f] font-medium transition-colors">
              {t('nav.product')}
            </button>
            <button onClick={() => handleNavLinkClick('partners')} className="text-dark hover:text-[#ff770f] font-medium transition-colors">
              {t('nav.partners')}
            </button>
            <button onClick={() => handleNavLinkClick('contact')} className="text-dark hover:text-[#ff770f] font-medium transition-colors">
              {t('nav.contact')}
            </button>
            
            {/* Language selector removed as requested */}
            
            <a href="https://app.teayudo.com.bo/#/login" target="_blank" rel="noopener noreferrer" className="bg-[#ff770f] text-white px-4 py-2 rounded-md font-medium hover:bg-[#ff770f]/90 transition-colors">
              {t('common.affiliate')}
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-dark p-2" 
            aria-label="Menú"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <button 
            onClick={() => handleNavLinkClick('mission')} 
            className="text-dark hover:text-[#ff770f] font-medium py-2 transition-colors text-left"
          >
            {t('nav.mission')}
          </button>
          <button 
            onClick={() => handleNavLinkClick('roadmap')} 
            className="text-dark hover:text-[#ff770f] font-medium py-2 transition-colors text-left"
          >
            {t('nav.roadmap')}
          </button>
          <button 
            onClick={() => handleNavLinkClick('product')} 
            className="text-dark hover:text-[#ff770f] font-medium py-2 transition-colors text-left"
          >
            {t('nav.product')}
          </button>
          <button 
            onClick={() => handleNavLinkClick('partners')} 
            className="text-dark hover:text-[#ff770f] font-medium py-2 transition-colors text-left"
          >
            {t('nav.partners')}
          </button>
          <button 
            onClick={() => handleNavLinkClick('contact')} 
            className="text-dark hover:text-[#ff770f] font-medium py-2 transition-colors text-left"
          >
            {t('nav.contact')}
          </button>
          
          {/* Language selector for mobile removed as requested */}
          
          <a
            href="https://app.teayudo.com.bo/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff770f] text-white px-4 py-2 rounded-md font-medium hover:bg-[#ff770f]/90 transition-colors text-center"
          >
            {t('common.affiliate')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;