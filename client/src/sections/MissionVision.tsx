import { Zap, Globe, Users, CheckCircle2, Shield, Lightbulb } from "lucide-react";

const MissionVision = () => {
  return (
    <section id="mission" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Misión & Visión</h2>
          <div className="w-24 h-1 bg-[#ff770f] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-[#ffeeda] inline-block p-3 rounded-full">
              <Zap className="h-8 w-8 text-[#ff770f]" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Nuestra Misión</h3>
            <p className="text-gray-700">
              Empoderar a las empresas de servicios en Latinoamérica con tecnología accesible que optimice sus operaciones, mejore la experiencia del cliente y potencie su crecimiento.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-[#ffeeda] inline-block p-3 rounded-full">
              <Globe className="h-8 w-8 text-[#ff770f]" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Nuestra Visión</h3>
            <p className="text-gray-700">
              Ser la plataforma líder de gestión empresarial en Latinoamérica, transformando la manera en que las empresas de servicios operan en la era digital y generando un impacto positivo en millones de negocios.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-[#ff770f]/5 to-[#5ccdcc]/5 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Nuestros Valores</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-[#ff770f] mr-2 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Confianza</h4>
                <p className="text-sm text-gray-600">Construimos relaciones a largo plazo basadas en la transparencia y honestidad.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Lightbulb className="h-6 w-6 text-[#ff770f] mr-2 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Innovación</h4>
                <p className="text-sm text-gray-600">Buscamos constantemente nuevas soluciones y mejoras para nuestros clientes.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="h-6 w-6 text-[#ff770f] mr-2 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Comunidad</h4>
                <p className="text-sm text-gray-600">Apoyamos el crecimiento de la economía local y el desarrollo de pequeños negocios.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
