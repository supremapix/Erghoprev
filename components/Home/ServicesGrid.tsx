
import React, { useState } from 'react';
import { SERVICES, COLORS, CONTACT_INFO, ASSETS } from '../../constants';
import { Service } from '../../types';
import { X, ChevronRight, Info } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: COLORS.secondary }}>
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-20 rounded-full -ml-48 -mb-48 blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-6 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 text-blue-900 text-sm font-black uppercase tracking-widest mb-6">
            Nossas Especialidades
          </div>
          <h2 className="text-4xl lg:text-7xl font-black mb-6 text-white tracking-tighter drop-shadow-sm">
            Soluções e Serviços
          </h2>
          <p className="text-xl lg:text-2xl text-blue-900 font-bold opacity-90 max-w-3xl mx-auto leading-relaxed">
            Otimize o fluxo de trabalho da sua empresa e a torne mais segura, eficiente e produtiva com quem entende de ergonomia.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-5 order-2 lg:order-1">
            {SERVICES.map((service, idx) => (
              <button 
                key={service.id}
                onClick={() => openModal(service)}
                className="group relative p-8 lg:p-10 text-left rounded-[2.5rem] transition-all duration-500 hover:translate-y-[-8px] shadow-2xl flex flex-col justify-between min-h-[200px] overflow-hidden animate-fade-in-up"
                style={{ backgroundColor: '#1a365d', animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                    <Info size={24} />
                  </div>
                  <h3 className="text-white font-black text-2xl lg:text-3xl leading-tight mb-4">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
                    Ver Detalhes <ChevronRight size={18} />
                  </div>
                </div>
                
                {/* Visual indicator at the bottom left */}
                <div className="w-12 h-2 bg-blue-500/50 rounded-full mt-6 group-hover:w-24 group-hover:bg-rose-500 transition-all duration-500"></div>

                {/* Subtle background number/icon */}
                <div className="absolute -bottom-10 -right-6 text-9xl font-black text-white/[0.03] italic group-hover:text-white/[0.07] transition-all duration-700">
                  0{service.id}
                </div>
              </button>
            ))}
          </div>
          
          {/* Right Image Container - Optimized for the new image */}
          <div className="lg:w-5/12 order-1 lg:order-2 animate-scale-in">
            <div className="relative group perspective-1000">
              <div className="relative z-10 transform transition-all duration-1000 group-hover:rotate-1 group-hover:scale-[1.02]">
                <div className="bg-white/10 p-4 rounded-[4rem] backdrop-blur-md border border-white/30 shadow-2xl">
                  <div className="rounded-[3rem] overflow-hidden bg-white shadow-inner flex items-center justify-center">
                    <img 
                      src={ASSETS.servicesSide} 
                      alt="Análises Ergonômicas ErghoPrev" 
                      className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-1000 p-2"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative Floating Card behind the image */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 hidden xl:block animate-bounce-slow border border-blue-50">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
                    <i className="fas fa-medal text-3xl"></i>
                  </div>
                  <div>
                    <p className="font-black text-blue-950 text-xl leading-none mb-1">Empresa Líder</p>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Excelência em SST</p>
                  </div>
                </div>
              </div>

              {/* Backglow */}
              <div className="absolute inset-0 bg-blue-400/30 blur-[100px] -z-10 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 lg:p-8">
          <div 
            className="absolute inset-0 bg-[#1a365d]/90 backdrop-blur-lg"
            onClick={closeModal}
          ></div>
          
          <div className="relative w-full max-w-2xl bg-white rounded-[3.5rem] shadow-2xl overflow-hidden animate-scale-in border-8 border-white/50">
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 p-3 rounded-full bg-gray-100 text-gray-500 hover:bg-rose-500 hover:text-white transition-all z-20 shadow-lg"
            >
              <X size={28} />
            </button>
            
            <div className="p-10 lg:p-16">
              <div className="inline-block px-5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-8">
                Consultoria Especializada
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-[#1a365d] mb-8 leading-tight tracking-tighter">
                {selectedService.title}
              </h2>
              <div className="w-24 h-2.5 bg-rose-500 rounded-full mb-10"></div>
              
              <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed mb-12 font-medium">
                {selectedService.detailedContent}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href={CONTACT_INFO.whatsappBase + encodeURIComponent(` Gostaria de saber mais sobre: ${selectedService.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow py-6 bg-emerald-500 text-white font-black text-2xl rounded-3xl shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-600 text-center transition-all hover:-translate-y-2 flex items-center justify-center gap-3"
                >
                  <i className="fab fa-whatsapp"></i>
                  Solicitar Proposta
                </a>
                <button 
                  onClick={closeModal}
                  className="px-10 py-6 bg-gray-100 text-[#1a365d] font-black text-xl rounded-3xl hover:bg-gray-200 transition-all"
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesGrid;
