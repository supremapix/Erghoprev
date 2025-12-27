
import React from 'react';
import Hero from '../components/Home/Hero';
import Solutions from '../components/Home/Solutions';
import ServicesGrid from '../components/Home/ServicesGrid';
import HomeOffice from '../components/Home/HomeOffice';
import { ErgonomiaSection } from '../components/Home/ErgonomiaSection';
import Timeline from '../components/Home/Timeline';
import VideoSection from '../components/Home/VideoSection';
import GallerySlider from '../components/Home/GallerySlider';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import ContactForm from '../components/Home/ContactForm';
import Associations from '../components/Home/Associations';
import { COLORS, BAIRROS, CIDADES_RMC } from '../constants';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Solutions />
      
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: COLORS.secondary }}>
         <div className="container mx-auto px-4 relative z-10">
            <div className="bg-white p-12 lg:p-20 rounded-[3rem] shadow-2xl text-center max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform">
               <h2 className="text-3xl lg:text-5xl font-black mb-8" style={{ color: COLORS.primary }}>
                 Descubra como tornar sua empresa mais produtiva!
               </h2>
               <a href="#contact" className="inline-block px-12 py-5 bg-emerald-500 text-white font-black text-xl rounded-full shadow-xl hover:bg-emerald-600 transition-all">
                 Solicite uma Proposta Agora
               </a>
            </div>
         </div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400 opacity-20 rounded-full -mr-20 -mt-20"></div>
         <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300 opacity-20 rounded-full -ml-32 -mb-32"></div>
      </section>

      <ServicesGrid />
      <HomeOffice />
      <ErgonomiaSection />
      <Timeline />
      <VideoSection />
      <Testimonials />
      <GallerySlider />
      <FAQ />
      <Associations />

      {/* SEO Locations Index */}
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
