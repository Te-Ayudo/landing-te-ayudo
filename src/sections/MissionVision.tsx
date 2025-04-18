import { Zap, Globe, Users, Shield, Lightbulb } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MissionVision = () => {
  const { t } = useLanguage();
  return (
    <section id="mission" className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('mission.title')}</h2>
          <div className="w-24 h-1 bg-[#ff770f] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#ffffff] p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-[#fff8f0] inline-block p-3 rounded-full">
              <Zap className="h-8 w-8 text-[#ff770f]" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{t('mission.our_mission')}</h3>
            <p className="text-gray-700">
              {t('mission.our_mission_text')}
            </p>
          </div>
          
          <div className="bg-[#ffffff] p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-[#fff8f0] inline-block p-3 rounded-full">
              <Globe className="h-8 w-8 text-[#ff770f]" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{t('mission.our_vision')}</h3>
            <p className="text-gray-700">
              {t('mission.our_vision_text')}
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-[#ff770f]/5 to-[#5ccdcc]/5 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">{t('mission.our_values')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-[#ff770f] mr-2 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">{t('mission.value.trust')}</h4>
                <p className="text-sm text-gray-600">{t('mission.value.trust_text')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Lightbulb className="h-6 w-6 text-[#ff770f] mr-2 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">{t('mission.value.innovation')}</h4>
                <p className="text-sm text-gray-600">{t('mission.value.innovation_text')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="h-6 w-6 text-[#ff770f] mr-2 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">{t('mission.value.community')}</h4>
                <p className="text-sm text-gray-600">{t('mission.value.community_text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
