
import React from 'react';
import Hero from '../components/Home/Hero';
import Solutions from '../components/Home/Solutions';
import ServicesGrid from '../components/Home/ServicesGrid';
import { ErgonomiaSection } from '../components/Home/ErgonomiaSection';
import Timeline from '../components/Home/Timeline';
import VideoSection from '../components/Home/VideoSection';
import GallerySlider from '../components/Home/GallerySlider';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import ContactForm from '../components/Home/ContactForm';
import Associations from '../components/Home/Associations';
import { COLORS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Solutions />
      
      {/* Productivity CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: COLORS.secondary }}>
         <div className="container mx-auto px-4 relative z-10">
            <div className="bg-white p-12 lg:p-20 rounded-[3rem] shadow-2xl text-center max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform">
               <h2 className="text-3xl lg:text-5xl font-black mb-8" style={{ color: COLORS.primary }}>
                 Descubra como tornar sua empresa mais produtiva!
               </h2>
               <button className="px-12 py-5 bg-emerald-500 text-white font-black text-xl rounded-full shadow-xl hover:bg-emerald-600 transition-all hover:shadow-2xl">
                 Solicite uma Proposta Agora
               </button>
            </div>
         </div>
         {/* Background Shapes */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400 opacity-20 rounded-full -mr-20 -mt-20"></div>
         <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300 opacity-20 rounded-full -ml-32 -mb-32"></div>
      </section>

      <ServicesGrid />
      <ErgonomiaSection />
      <Timeline />
      <VideoSection />
      <Testimonials />
      <GallerySlider />
      <FAQ />
      <Associations />
      <ContactForm />
    </div>
  );
};

export default HomePage;
