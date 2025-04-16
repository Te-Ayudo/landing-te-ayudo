import { useState, useEffect } from "react";
import { 
  Users, 
  Globe, 
  Monitor, 
  CheckCircle2, 
  X, 
  MessageSquare, 
  Lightbulb,
  ClipboardList,
  PlayCircle
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

// Imágenes reales
import clientAppImage from "@assets/Post & Imagenes_20250415_134221_0001.png";
import employeeAppImage from "@assets/Post & Imagenes_20250415_134221_0002.png";
import saasImage from "@assets/Post & Imagenes_20250415_134221_0003.png";
import landingImage from "@assets/Post & Imagenes_20250415_135616_0000.png";

// Pricing plans data
const pricingPlans = [
  {
    name: "Freemium",
    price: "$0",
    features: {
      calendar: true,
      crm: false,
      landing: false,
      branches: false,
      inventory: false,
      promotions: false
    },
    buttonVariant: "outline"
  },
  {
    name: "Standard",
    price: "$499/año",
    features: {
      calendar: true,
      crm: true,
      landing: true,
      branches: false,
      inventory: false,
      promotions: false
    },
    buttonVariant: "default"
  },
  {
    name: "Franchise",
    price: "Contactar",
    description: "Requiere reunión previa",
    features: {
      calendar: true,
      crm: true,
      landing: true,
      branches: true,
      inventory: false,
      promotions: false
    },
    buttonVariant: "default"
  },
  {
    name: "Enterprise",
    price: "Contactar",
    description: "Requiere reunión previa",
    features: {
      calendar: true,
      crm: true,
      landing: true,
      branches: true,
      inventory: true,
      promotions: true
    },
    buttonVariant: "default"
  }
];

const ProductPricing = () => {
  const [activeTab, setActiveTab] = useState<"mobile" | "platform">("mobile");
  const { t, language } = useLanguage();
  
  // Volver a renderizar cuando cambie el idioma
  useEffect(() => {
    const handleLanguageChange = () => {
      // Forzar actualización del componente
      setActiveTab(prev => prev === "mobile" ? "mobile" : "platform");
    };
    
    document.addEventListener('languageChanged', handleLanguageChange);
    return () => document.removeEventListener('languageChanged', handleLanguageChange);
  }, [language]);

  return (
    <section id="product" className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('product.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('product.description')}
          </p>
          <div className="w-24 h-1 bg-[#ff770f] mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Mobile Apps Section */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveTab("mobile")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "mobile" 
                    ? "bg-[#ff770f] text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {t('product.tabs.mobile')}
              </button>
              <button
                onClick={() => setActiveTab("platform")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "platform" 
                    ? "bg-[#ff770f] text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {t('product.tabs.platform')}
              </button>
            </div>
          </div>

          {activeTab === "mobile" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <Users className="h-6 w-6 text-[#ff770f] mr-2" />
                    {t('product.client_app.title')}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t('product.client_app.description')}
                  </p>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={clientAppImage} 
                      alt="Te Ayudo App para Clientes" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.client_app.feature1')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.client_app.feature2')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.client_app.feature3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <Users className="h-6 w-6 text-[#5ccdcc] mr-2" />
                    {t('product.employee_app.title')}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t('product.employee_app.description')}
                  </p>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={employeeAppImage} 
                      alt="Te Ayudo App para Empleados" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.employee_app.feature1')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.employee_app.feature2')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.employee_app.feature3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "platform" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <Monitor className="h-6 w-6 text-[#ff770f] mr-2" />
                    {t('product.saas.title')}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t('product.saas.description')}
                  </p>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={saasImage} 
                      alt="Te Ayudo Plataforma SaaS" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.saas.feature1')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.saas.feature2')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.saas.feature3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <Globe className="h-6 w-6 text-[#5ccdcc] mr-2" />
                    {t('product.landing.title')}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t('product.landing.description')}
                  </p>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={landingImage} 
                      alt="Te Ayudo Landing Privado" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.landing.feature1')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.landing.feature2')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t('product.landing.feature3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Video Demo Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">{t('product.video.title')}</h3>
          <div className="bg-gradient-to-r from-[#ff770f]/10 to-[#5ccdcc]/10 p-6 rounded-xl">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl mx-auto">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/ORvJSONNFDE" 
                title="Te Ayudo - Cómo funciona" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('product.video.description')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Pricing Table Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">{t('product.pricing.title')}</h3>
          
          {/* Desktop Pricing Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="min-w-full shadow-lg rounded-xl overflow-hidden">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">Características</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.name} className="py-4 px-6 text-center font-semibold text-gray-700 border-b">
                        <span className="block text-lg">{plan.name}</span>
                        <span className="text-[#ff770f] font-bold text-xl mt-1 block">{plan.price}</span>
                        {plan.description && <span className="text-gray-500 text-xs block">{plan.description}</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Calendar & Config */}
                  <tr>
                    <td className="py-3 px-6 border-b">{t('product.pricing.feature.calendar')}</td>
                    {pricingPlans.map((plan) => (
                      <td key={`${plan.name}-calendar`} className="py-3 px-6 text-center border-b">
                        {plan.features.calendar ? (
                          <CheckCircle2 className="h-5 w-5 text-[#ff770f] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  
                  {/* CRM */}
                  <tr className="bg-gray-50">
                    <td className="py-3 px-6 border-b">{t('product.pricing.feature.crm')}</td>
                    {pricingPlans.map((plan) => (
                      <td key={`${plan.name}-crm`} className="py-3 px-6 text-center border-b">
                        {plan.features.crm ? (
                          <CheckCircle2 className="h-5 w-5 text-[#ff770f] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Landing Privado */}
                  <tr>
                    <td className="py-3 px-6 border-b">{t('product.pricing.feature.landing')}</td>
                    {pricingPlans.map((plan) => (
                      <td key={`${plan.name}-landing`} className="py-3 px-6 text-center border-b">
                        {plan.features.landing ? (
                          <CheckCircle2 className="h-5 w-5 text-[#ff770f] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Branches */}
                  <tr className="bg-gray-50">
                    <td className="py-3 px-6 border-b">{t('product.pricing.feature.branches')}</td>
                    {pricingPlans.map((plan) => (
                      <td key={`${plan.name}-branches`} className="py-3 px-6 text-center border-b">
                        {plan.features.branches ? (
                          <CheckCircle2 className="h-5 w-5 text-[#ff770f] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Inventory */}
                  <tr>
                    <td className="py-3 px-6 border-b">{t('product.pricing.feature.inventory')}</td>
                    {pricingPlans.map((plan) => (
                      <td key={`${plan.name}-inventory`} className="py-3 px-6 text-center border-b">
                        {plan.features.inventory ? (
                          <CheckCircle2 className="h-5 w-5 text-[#ff770f] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Promotions */}
                  <tr className="bg-gray-50">
                    <td className="py-3 px-6 border-b">{t('product.pricing.feature.promotions')}</td>
                    {pricingPlans.map((plan) => (
                      <td key={`${plan.name}-promotions`} className="py-3 px-6 text-center border-b">
                        {plan.features.promotions ? (
                          <CheckCircle2 className="h-5 w-5 text-[#ff770f] mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Action Buttons */}
                  <tr>
                    <td className="py-5 px-6"></td>
                    {pricingPlans.map((plan) => (
                      <td key={`${plan.name}-action`} className="py-5 px-6 text-center">
                        <button
                          onClick={() => scrollToSection('contact')}
                          className={`${
                            plan.buttonVariant === 'outline' 
                              ? "bg-white border-2 border-[#ff770f] text-[#ff770f]" 
                              : "bg-[#ff770f] text-white"
                          } px-4 py-2 rounded-md font-medium hover:opacity-90 transition-colors text-sm`}
                        >
                          {t('product.pricing.contact')}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Mobile Pricing Cards */}
          <div className="md:hidden space-y-6">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="bg-[#ff770f]/10 p-4 text-center">
                  <h4 className="text-xl font-semibold">{plan.name}</h4>
                  <p className="text-[#ff770f] font-bold text-2xl mt-1">{plan.price}</p>
                  {plan.description && <p className="text-gray-500 text-xs mt-1">{plan.description}</p>}
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      {plan.features.calendar ? (
                        <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2" />
                      )}
                      <span className={!plan.features.calendar ? "text-gray-400" : ""}>
                        {t('product.pricing.feature.calendar')}
                      </span>
                    </li>
                    <li className="flex items-center">
                      {plan.features.crm ? (
                        <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2" />
                      )}
                      <span className={!plan.features.crm ? "text-gray-400" : ""}>
                        {t('product.pricing.feature.crm')}
                      </span>
                    </li>
                    <li className="flex items-center">
                      {plan.features.landing ? (
                        <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2" />
                      )}
                      <span className={!plan.features.landing ? "text-gray-400" : ""}>
                        {t('product.pricing.feature.landing')}
                      </span>
                    </li>
                    <li className="flex items-center">
                      {plan.features.branches ? (
                        <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2" />
                      )}
                      <span className={!plan.features.branches ? "text-gray-400" : ""}>
                        {t('product.pricing.feature.branches')}
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className={`block w-full ${
                        plan.buttonVariant === 'outline' 
                          ? "bg-white border-2 border-[#ff770f] text-[#ff770f] hover:bg-[#ffeeda]" 
                          : "bg-[#ff770f] text-white hover:bg-[#ff770f]/90"
                      } px-4 py-2 rounded-md font-medium transition-colors text-center`}
                    >
                      {t('product.pricing.contact')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add-ons Section */}
          <div className="mt-12">
            <h4 className="text-xl font-semibold mb-4 text-center">{t('product.addons.title') || 'Extras'}</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-3">
                  <MessageSquare className="h-6 w-6 text-green-500 mr-2" />
                  <h5 className="font-medium">{t('product.addons.whatsapp.title') || 'WhatsApp Ilimitado'}</h5>
                </div>
                <p className="text-sm text-gray-600">
                  {t('product.addons.whatsapp.description') || 'Envía mensajes ilimitados a tus clientes desde la plataforma.'}
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-3">
                  <Lightbulb className="h-6 w-6 text-blue-500 mr-2" />
                  <h5 className="font-medium">{t('product.addons.ai.title') || 'IA en WhatsApp'}</h5>
                </div>
                <p className="text-sm text-gray-600">
                  {t('product.addons.ai.description') || 'Asistente virtual con IA para responder consultas de tus clientes.'}
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-3">
                  <ClipboardList className="h-6 w-6 text-purple-500 mr-2" />
                  <h5 className="font-medium">{t('product.addons.billing.title') || 'Sistema de Facturación'}</h5>
                </div>
                <p className="text-sm text-gray-600">
                  {t('product.addons.billing.description') || 'Genera facturas electrónicas y gestiona impuestos automáticamente.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPricing;
