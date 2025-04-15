import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import teAyudoLogo from "@assets/Post & Imagenes.png";
import { useLanguage } from "@/context/NewLanguageContext";

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
    setLanguage(lang);
    setShowLanguageMenu(false);
    
    // Forzar una actualización global
    document.documentElement.lang = lang;
    document.dispatchEvent(new Event('languageChanged'));
    
    // Este pequeño timeout ayuda a que los componentes se actualicen
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 10);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={teAyudoLogo} alt="Te Ayudo Logo" className="h-8" />
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
            
            {/* Language selector */}
            <div id="language-menu-container" className="relative inline-block text-left">
              <button
                type="button"
                onClick={toggleLanguageMenu}
                className="flex items-center text-gray-700 hover:text-[#ff770f] font-medium py-2 transition-colors"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <Globe className="h-5 w-5 mr-1" />
                <span>{language.toUpperCase()}</span>
              </button>

              {showLanguageMenu && (
                <div
                  className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <button
                      onClick={() => changeLanguage('es')}
                      className={`w-full text-left block px-4 py-2 text-sm ${
                        language === 'es' ? 'bg-gray-100 text-[#ff770f]' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      role="menuitem"
                    >
                      {t('nav.language.es')}
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full text-left block px-4 py-2 text-sm ${
                        language === 'en' ? 'bg-gray-100 text-[#ff770f]' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      role="menuitem"
                    >
                      {t('nav.language.en')}
                    </button>
                  </div>
                </div>
              )}
            </div>
            
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
          
          {/* Language selector for mobile */}
          <div className="flex items-center py-2">
            <Globe className="h-5 w-5 mr-2 text-gray-700" />
            <div className="flex space-x-4">
              <button 
                onClick={() => changeLanguage('es')} 
                className={`text-sm font-medium ${language === 'es' ? 'text-[#ff770f]' : 'text-gray-700'}`}
              >
                ESP
              </button>
              <span className="text-gray-400">|</span>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`text-sm font-medium ${language === 'en' ? 'text-[#ff770f]' : 'text-gray-700'}`}
              >
                ENG
              </button>
            </div>
          </div>
          
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