import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-[#ff770f] font-bold text-2xl">Te Ayudo</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleNavLinkClick('mission')} className="text-dark hover:text-[#ff770f] font-medium transition-colors">
              Misión & Visión
            </button>
            <button onClick={() => handleNavLinkClick('roadmap')} className="text-dark hover:text-[#ff770f] font-medium transition-colors">
              Roadmap
            </button>
            <button onClick={() => handleNavLinkClick('product')} className="text-dark hover:text-[#ff770f] font-medium transition-colors">
              Producto & Precios
            </button>
            <button onClick={() => handleNavLinkClick('contact')} className="text-dark hover:text-[#ff770f] font-medium transition-colors">
              Contacto
            </button>
            <a href="https://app.teayudo.com.bo/#/login" target="_blank" rel="noopener noreferrer" className="bg-[#ff770f] text-white px-4 py-2 rounded-md font-medium hover:bg-[#ff770f]/90 transition-colors">
              Afiliados
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
            Misión & Visión
          </button>
          <button 
            onClick={() => handleNavLinkClick('roadmap')} 
            className="text-dark hover:text-[#ff770f] font-medium py-2 transition-colors text-left"
          >
            Roadmap
          </button>
          <button 
            onClick={() => handleNavLinkClick('product')} 
            className="text-dark hover:text-[#ff770f] font-medium py-2 transition-colors text-left"
          >
            Producto & Precios
          </button>
          <button 
            onClick={() => handleNavLinkClick('contact')} 
            className="text-dark hover:text-[#ff770f] font-medium py-2 transition-colors text-left"
          >
            Contacto
          </button>
          <a
            href="https://app.teayudo.com.bo/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff770f] text-white px-4 py-2 rounded-md font-medium hover:bg-[#ff770f]/90 transition-colors text-center"
          >
            Afiliados
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
