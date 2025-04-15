import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sparkles, Zap, Users, Layers } from "lucide-react";
import { 
  AnimatedSection, 
  AnimatedTextReveal, 
  AnimatedStaggerContainer, 
  AnimatedStaggerItem 
} from "@/components/ui/animated-section";
import { GlassCard, TechGridBackground, GlowingCircle } from "@/components/ui/glass-card";
import { FuturisticButton } from "@/components/ui/futuristic-button";
import clientAppImage from "@assets/Post & Imagenes_20250415_134221_0001.png";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  // Usar el contexto global de idiomas
  const { t } = useLanguage();
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-white via-teayudo-orange-light/30 to-white relative overflow-hidden">
      {/* Tech background grid */}
      <TechGridBackground />
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teayudo-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teayudo-orange/5 rounded-full blur-3xl -z-10" />
      
      {/* Animated floating circles */}
      <motion.div 
        className="absolute top-32 right-16 w-8 h-8 rounded-full bg-teayudo-orange/30 blur-sm -z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-16 left-32 w-10 h-10 rounded-full bg-teayudo-blue/20 blur-sm -z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center relative">
          
          {/* Left Content */}
          <AnimatedSection className="md:w-1/2 mb-10 md:mb-0 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="relative">
                <AnimatedTextReveal text={t('hero.title')} />
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-teayudo-orange"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </span>
              <br />
              <span className="bg-gradient-to-r from-teayudo-orange to-teayudo-orange/80 bg-clip-text text-transparent inline-block mt-2">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  {t('hero.subtitle')}
                </motion.span>
              </span>
            </h1>
            
            <motion.p 
              className="text-lg mb-8 text-gray-600 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.5 }}
            >
              <FuturisticButton 
                variant="neon"
                size="lg"
                animation="bounce"
                showArrow
                onClick={() => scrollToSection('product')}
              >
                {t('hero.cta.product')}
              </FuturisticButton>
              
              <FuturisticButton
                variant="outline"
                size="lg"
                animation="pulse"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.cta.contact')}
              </FuturisticButton>
            </motion.div>
            
            {/* Feature badges */}
            <AnimatedStaggerContainer className="mt-10 grid grid-cols-2 gap-3" delay={2.8}>
              <AnimatedStaggerItem>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="h-4 w-4 text-teayudo-orange" />
                  <span>{t('hero.feature.automation')}</span>
                </div>
              </AnimatedStaggerItem>
              
              <AnimatedStaggerItem>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Sparkles className="h-4 w-4 text-teayudo-blue" />
                  <span>{t('hero.feature.ai')}</span>
                </div>
              </AnimatedStaggerItem>
              
              <AnimatedStaggerItem>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4 text-teayudo-orange" />
                  <span>{t('hero.feature.customers')}</span>
                </div>
              </AnimatedStaggerItem>
              
              <AnimatedStaggerItem>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Layers className="h-4 w-4 text-teayudo-blue" />
                  <span>{t('hero.feature.analytics')}</span>
                </div>
              </AnimatedStaggerItem>
            </AnimatedStaggerContainer>
          </AnimatedSection>
          
          {/* Right Image */}
          <AnimatedSection className="md:w-1/2" delay={0.5}>
            <div className="relative">
              <GlassCard 
                variant="orange" 
                size="lg" 
                className="rounded-lg overflow-hidden p-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src={clientAppImage} 
                  alt={t('hero.title') + " " + t('hero.subtitle')} 
                  className="rounded-lg w-full h-auto object-contain"
                />
                
                {/* Floating accent elements */}
                <GlowingCircle className="top-0 right-0 transform translate-x-1/4 -translate-y-1/4" />
                <GlowingCircle color="teayudo-blue" className="bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4" />
              </GlassCard>
              
              {/* Stats floating card */}
              <AnimatedSection 
                className="absolute -bottom-5 -left-5 z-10"
                delay={1.2}
              >
                <GlassCard 
                  variant="blue" 
                  size="sm" 
                  className="shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teayudo-blue/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-teayudo-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{t('hero.stats.users')}</p>
                      <p className="text-lg font-bold text-gray-800">120,000+</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
              
              {/* Efficiency floating card */}
              <AnimatedSection
                className="absolute -top-5 -right-5 z-10"
                delay={1.5}
              >
                <GlassCard 
                  variant="default" 
                  size="sm"
                  className="shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teayudo-orange/20 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-teayudo-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Eficiencia</p>
                      <p className="text-lg font-bold text-gray-800">+40%</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
