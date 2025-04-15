import { scrollToSection } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-[#fff8f0] to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              El ERP definitivo para <span className="text-[#ff770f]">empresas de servicios</span>
            </h1>
            <p className="text-lg mb-8">
              La plataforma SaaS integral para gestionar todos los aspectos de tu negocio de servicios en LATAM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('product')}
                className="bg-[#ff770f] text-white px-6 py-3 rounded-md font-medium hover:bg-[#ff770f]/90 transition-colors text-center"
              >
                Ver Producto
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white border-2 border-[#ff770f] text-[#ff770f] px-6 py-3 rounded-md font-medium hover:bg-[#fff8f0] transition-colors text-center"
              >
                Contáctanos
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Equipo usando Te Ayudo" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
