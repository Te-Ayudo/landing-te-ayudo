import { useState } from "react";
import { 
  CheckCircle2, 
  X, 
  MessageSquare, 
  Lightbulb,
  ClipboardList
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Definición de los planes de precios
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
    buttonVariant: 'outline' as const
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
    buttonVariant: 'primary' as const
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
      inventory: true,
      promotions: false
    },
    buttonVariant: 'primary' as const
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
    buttonVariant: 'primary' as const
  }
];

const PriceCards = () => {
  const { t } = useLanguage();
  
  // Referencias para detectar cuando elementos entran en viewport
  const titleRef = useRef(null);
  const tableRef = useRef(null);
  const mobileCardsRef = useRef(null);
  const addonsRef = useRef(null);

  // Detectar si los elementos están en la vista
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const tableInView = useInView(tableRef, { once: true, amount: 0.1 });
  const mobileCardsInView = useInView(mobileCardsRef, { once: true, amount: 0.1 });
  const addonsInView = useInView(addonsRef, { once: true, amount: 0.2 });
  
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={titleRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">{t('product.title') || 'Nuestros Productos'}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('product.description') || 'Soluciones diseñadas para diferentes necesidades y tamaños de negocios.'}
          </p>
        </motion.div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">{t('product.pricing.title') || 'Planes y Precios'}</h3>
          
          {/* Desktop Pricing Table */}
          <div className="hidden md:block overflow-x-auto">
            <motion.div 
              ref={tableRef}
              className="min-w-full shadow-lg rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={tableInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">
                      Características
                    </th>
                    {pricingPlans.map((plan, index) => (
                      <motion.th 
                        key={plan.name} 
                        className="py-4 px-6 text-center font-semibold text-gray-700 border-b"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        <div>
                          <span className="block text-lg">{plan.name}</span>
                          <motion.span 
                            className="text-[#ff770f] font-bold text-xl mt-1 block"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.3 + index * 0.1,
                              type: "spring",
                              stiffness: 300
                            }}
                          >
                            {plan.price}
                          </motion.span>
                          {plan.description && (
                            <motion.span 
                              className="text-gray-500 text-xs block"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                            >
                              {plan.description}
                            </motion.span>
                          )}
                        </div>
                      </motion.th>
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
                        <motion.button
                          onClick={() => scrollToSection('contact')}
                          className={`${
                            plan.buttonVariant === 'outline' 
                              ? "bg-white border-2 border-[#ff770f] text-[#ff770f] hover:bg-[#ffeeda]" 
                              : "bg-[#ff770f] text-white hover:bg-[#ff770f]/90"
                          } px-4 py-2 rounded-md font-medium transition-colors text-sm`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {t('product.pricing.contact')}
                        </motion.button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
          
          {/* Mobile Pricing Cards */}
          <div ref={mobileCardsRef} className="md:hidden space-y-6">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={`plan-mobile-${plan.name}`}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={mobileCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="bg-[#ff770f]/10 p-4 text-center">
                  <h4 className="text-xl font-semibold">{plan.name}</h4>
                  <motion.p 
                    className="text-[#ff770f] font-bold text-2xl mt-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    {plan.price}
                  </motion.p>
                  {plan.description && (
                    <p className="text-gray-500 text-xs mt-1">{plan.description}</p>
                  )}
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
                    <motion.button
                      onClick={() => scrollToSection('contact')}
                      className={`block w-full ${
                        plan.buttonVariant === 'outline' 
                          ? "bg-white border-2 border-[#ff770f] text-[#ff770f] hover:bg-[#ffeeda]" 
                          : "bg-[#ff770f] text-white hover:bg-[#ff770f]/90"
                      } px-4 py-2 rounded-md font-medium transition-colors text-center`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {t('product.pricing.contact')}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Add-ons Section */}
          <motion.div 
            ref={addonsRef}
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-center">{t('product.addons.title')}</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={addonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-center mb-3">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={addonsInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <MessageSquare className="h-6 w-6 text-green-500 mr-2" />
                  </motion.div>
                  <h5 className="font-medium">{t('product.addons.whatsapp.title')}</h5>
                </div>
                <p className="text-sm text-gray-600">
                  {t('product.addons.whatsapp.description')}
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={addonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-center mb-3">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={addonsInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Lightbulb className="h-6 w-6 text-blue-500 mr-2" />
                  </motion.div>
                  <h5 className="font-medium">{t('product.addons.ai.title')}</h5>
                </div>
                <p className="text-sm text-gray-600">
                  {t('product.addons.ai.description')}
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={addonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-center mb-3">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={addonsInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <ClipboardList className="h-6 w-6 text-purple-500 mr-2" />
                  </motion.div>
                  <h5 className="font-medium">{t('product.addons.billing.title')}</h5>
                </div>
                <p className="text-sm text-gray-600">
                  {t('product.addons.billing.description')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PriceCards;