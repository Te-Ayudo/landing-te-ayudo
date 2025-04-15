import { useState } from "react";
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
    price: "$49",
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
    price: "$99",
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
    price: "$199",
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

  return (
    <section id="product" className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Producto & Precios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra plataforma integral para empresas de servicios y encuentra el plan que mejor se adapte a tus necesidades.
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
                Aplicaciones Móviles
              </button>
              <button
                onClick={() => setActiveTab("platform")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "platform" 
                    ? "bg-[#ff770f] text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Plataforma SaaS & Landing
              </button>
            </div>
          </div>

          {activeTab === "mobile" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <Users className="h-6 w-6 text-[#ff770f] mr-2" />
                    Aplicación para Clientes
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Permite a tus clientes agendar citas, realizar pagos y acceder a su historial de servicios.
                  </p>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1517705600644-a016b9dcadef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Te Ayudo App para Clientes" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Reserva de citas en tiempo real</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Pagos integrados y seguros</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Notificaciones y recordatorios</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <Users className="h-6 w-6 text-[#5ccdcc] mr-2" />
                    Aplicación para Empleados
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Ayuda a tus empleados a gestionar sus horarios, clientes y servicios desde cualquier lugar.
                  </p>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Te Ayudo App para Empleados" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Gestión de horarios y disponibilidad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Seguimiento de clientes y servicios</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Comunicación con el equipo</span>
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
                    Plataforma SaaS
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Centro de control completo para administrar todos los aspectos de tu negocio.
                  </p>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Te Ayudo Plataforma SaaS" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Panel de control centralizado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Análisis de datos y reportes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Gestión completa de personal y clientes</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <Globe className="h-6 w-6 text-[#5ccdcc] mr-2" />
                    Landing Privado
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Página web personalizada para tu negocio que permite a tus clientes conocer tus servicios y reservar.
                  </p>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Te Ayudo Landing Privado" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Diseño personalizado con tu marca</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Catálogo de servicios con reservas online</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#5ccdcc] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Formularios de contacto y testimonios</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Video Demo Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Mira cómo funciona</h3>
          <div className="bg-gradient-to-r from-[#ff770f]/10 to-[#5ccdcc]/10 p-6 rounded-xl">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl mx-auto">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Te Ayudo - Cómo funciona" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 max-w-3xl mx-auto">
                Nuestro sistema integrado permite administrar todos los aspectos de tu negocio
                desde la misma plataforma - reservaciones, pagos, inventario y más.
              </p>
            </div>
          </div>
        </div>
        
        {/* Pricing Table Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Planes y Precios</h3>
          
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
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Calendar & Config */}
                  <tr>
                    <td className="py-3 px-6 border-b">Calendario & Configuraciones</td>
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
                    <td className="py-3 px-6 border-b">CRM</td>
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
                    <td className="py-3 px-6 border-b">Landing Privado</td>
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
                    <td className="py-3 px-6 border-b">Sucursales</td>
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
                    <td className="py-3 px-6 border-b">Inventario</td>
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
                    <td className="py-3 px-6 border-b">Promociones</td>
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
                          Solicitar Demo
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
                        Calendario & Configuraciones
                      </span>
                    </li>
                    <li className="flex items-center">
                      {plan.features.crm ? (
                        <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2" />
                      )}
                      <span className={!plan.features.crm ? "text-gray-400" : ""}>
                        CRM
                      </span>
                    </li>
                    <li className="flex items-center">
                      {plan.features.landing ? (
                        <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2" />
                      )}
                      <span className={!plan.features.landing ? "text-gray-400" : ""}>
                        Landing Privado
                      </span>
                    </li>
                    <li className="flex items-center">
                      {plan.features.branches ? (
                        <CheckCircle2 className="h-5 w-5 text-[#ff770f] mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2" />
                      )}
                      <span className={!plan.features.branches ? "text-gray-400" : ""}>
                        Sucursales
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
                      Solicitar Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add-ons Section */}
          <div className="mt-12">
            <h4 className="text-xl font-semibold mb-4 text-center">Extras</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-3">
                  <MessageSquare className="h-6 w-6 text-green-500 mr-2" />
                  <h5 className="font-medium">WhatsApp Ilimitado</h5>
                </div>
                <p className="text-sm text-gray-600">
                  Envía mensajes ilimitados a tus clientes desde la plataforma.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-3">
                  <Lightbulb className="h-6 w-6 text-blue-500 mr-2" />
                  <h5 className="font-medium">IA en WhatsApp</h5>
                </div>
                <p className="text-sm text-gray-600">
                  Asistente virtual con IA para responder consultas de tus clientes.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-3">
                  <ClipboardList className="h-6 w-6 text-purple-500 mr-2" />
                  <h5 className="font-medium">Sistema de Facturación</h5>
                </div>
                <p className="text-sm text-gray-600">
                  Genera facturas electrónicas y gestiona impuestos automáticamente.
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
