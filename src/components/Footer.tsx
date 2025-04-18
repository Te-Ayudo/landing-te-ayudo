import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin 
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const handleLinkClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Te Ayudo</h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.links.title')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleLinkClick('mission')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.links.mission')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('roadmap')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.links.roadmap')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('product')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.links.product')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.links.contact')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">+591 78048223</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">contacto@teayudo.com.bo</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.social.title')}</h4>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@teayudobolivia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTiktok style={{ height: '1.5rem', width: '1.5rem' }} />
              </a>
              <a href="https://www.facebook.com/teayudo.bo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/teayudo.bo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/te-ayudo-bolivia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Te Ayudo. {t('footer.copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.legal.terms')}
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.legal.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
