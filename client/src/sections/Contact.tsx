import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here in a real implementation
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
    // Show a success message (in a real implementation)
    alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros servicios? Estamos aquí para ayudarte.
          </p>
          <div className="w-24 h-1 bg-[#ff770f] mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#ff770f]/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#ff770f]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Teléfono</h4>
                    <p className="text-gray-600">+591 78104295</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#ff770f]/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#ff770f]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@teayudo.com.bo</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#ff770f]/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#ff770f]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Dirección</h4>
                    <p className="text-gray-600">La Paz, Bolivia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://wa.me/59178104295" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Contáctanos por WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md overflow-hidden p-8">
              <h3 className="text-xl font-semibold mb-6">Envíanos un Mensaje</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff770f] focus:border-[#ff770f]" 
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff770f] focus:border-[#ff770f]" 
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <input 
                    type="text" 
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff770f] focus:border-[#ff770f]" 
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ff770f] focus:border-[#ff770f]" 
                    placeholder="¿Cómo podemos ayudarte?"
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6">
                <button 
                  type="submit" 
                  className="w-full bg-[#ff770f] text-white px-6 py-3 rounded-md font-medium hover:bg-[#ff770f]/90 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
