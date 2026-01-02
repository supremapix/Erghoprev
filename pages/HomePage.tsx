
import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedServices from '../components/Home/FeaturedServices';
import Solutions from '../components/Home/Solutions';
import ServicesGrid from '../components/Home/ServicesGrid';
import Timeline from '../components/Home/Timeline';
import VideoSection from '../components/Home/VideoSection';
import GallerySlider from '../components/Home/GallerySlider';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import ContactForm from '../components/Home/ContactForm';
import Associations from '../components/Home/Associations';
import HomeOffice from '../components/Home/HomeOffice';
import { COLORS, BAIRROS, CIDADES_RMC, CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';
import { Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/Common/EnhancedSEO';

const HomePage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ErghoPrev",
    "url": "https://www.erghoprev.com.br",
    "logo": "https://www.erghoprev.com.br/logo-coreta.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-41-99780-1951",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.instagram.com/erghoprev",
      "https://www.facebook.com/erghoprev"
    ]
  };

  return (
    <div className="flex flex-col">
      <EnhancedSEO 
        title="ErghoPrev | Análise Ergonômica do Trabalho (AET) e NR-17 em Curitiba"
        description="Especialistas em Ergonomia, Laudos NR-17, AET e Saúde Ocupacional. Atendemos Curitiba e Região com soluções completas para evitar multas e melhorar a produtividade."
        canonicalUrl="https://www.erghoprev.com.br/"
        keywords="ergonomia curitiba, nr17, analise ergonomica do trabalho, laudo ergonomico, aet, saude ocupacional"
        schema={schema}
      />

      <Hero />
      <FeaturedServices />
      <Solutions />
      
      <section className="py-24 relative overflow-hidden bg-[#0f172a]">
         <div className="container mx-auto px-4 relative z-10">
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-12 lg:p-24 rounded-[4rem] shadow-2xl text-center max-w-6xl mx-auto border-t border-white/10 relative group">
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-rose-500 rounded-3xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <Zap className="text-white" size={48} fill="currentColor" />
               </div>
               
               <h2 className="text-3xl lg:text-6xl font-black mb-10 text-white leading-tight tracking-tighter">
                 Não deixe sua empresa no escuro. <br />
                 <span className="text-rose-500">Regularize sua Ergonomia hoje!</span>
               </h2>
               <p className="text-xl lg:text-3xl text-blue-200 mb-16 max-w-4xl mx-auto font-medium leading-relaxed">
                 Evite multas de até R$ 6.000,00 por funcionário. A ErghoPrev é o seu parceiro estratégico para garantir que cada detalhe da sua empresa esteja em conformidade com a lei.
               </p>
               
               <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                 <a 
                   href={CONTACT_INFO.whatsappBase} 
                   className="inline-flex items-center gap-4 px-14 py-7 bg-emerald-500 text-white font-black text-2xl rounded-3xl shadow-2xl hover:bg-emerald-600 transition-all hover:-translate-y-2 active:scale-95 group/btn"
                 >
                   Falar com Especialista Já
                   <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                 </a>
                 <a 
                   href="#contact" 
                   className="inline-flex items-center gap-4 px-14 py-7 bg-white/10 text-white font-black text-2xl rounded-3xl border-2 border-white/20 hover:bg-white hover:text-blue-900 transition-all active:scale-95"
                 >
                   Ver Serviços
                 </a>
               </div>

               <div className="mt-16 flex items-center justify-center gap-8 text-blue-300 opacity-60">
                 <div className="flex items-center gap-2"><ShieldCheck size={20}/> NR-17</div>
                 <div className="flex items-center gap-2"><ShieldCheck size={20}/> eSocial</div>
                 <div className="flex items-center gap-2"><ShieldCheck size={20}/> PGR/GRO</div>
               </div>
            </div>
         </div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
      </section>

      <ServicesGrid />
      
      <HomeOffice />

      <Timeline />
      <VideoSection />
      <Testimonials />
      <GallerySlider />
      <FAQ />
      <Associations />

      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 text-blue-900">Onde Atendemos</h2>
            <p className="text-xl text-gray-500 font-medium">Expertise ergonômica em toda Curitiba e Região Metropolitana.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-rose-500">
                <i className="fas fa-map-marker-alt"></i> Bairros de Curitiba
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
                {BAIRROS.map(bairro => (
                  <Link key={bairro} to={`/local/${encodeURIComponent(bairro)}`} className="text-gray-500 hover:text-blue-900 transition-colors truncate">
                    • {bairro}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-emerald-500">
                <i className="fas fa-city"></i> Região Metropolitana
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
                {CIDADES_RMC.map(cidade => (
                  <Link key={cidade} to={`/local/${encodeURIComponent(cidade)}`} className="text-gray-500 hover:text-blue-900 transition-colors truncate">
                    • {cidade}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default HomePage;
