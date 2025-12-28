
import React, { useState } from 'react';
import { SERVICES, COLORS, CONTACT_INFO, ASSETS } from '../../constants';
import { Service } from '../../types';
import { X, ChevronDown, ChevronRight } from 'lucide-react';

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
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-6xl font-black mb-8 text-blue-900 tracking-tight leading-tight max-w-5xl mx-auto">
            Otimize o fluxo de trabalho da sua empresa e a torne mais segura e eficiente.
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-7xl mx-auto">
          {/* Left: Vertical List of Services */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {SERVICES.map((service, idx) => (
              <button 
                key={service.id}
                onClick={() => openModal(service)}
                className="flex items-center justify-between w-full p-6 lg:p-7 bg-[#1a365d] text-white rounded-lg shadow-lg hover:bg-blue-900 transition-all duration-300 group text-left border border-white/10 transform hover:scale-[1.01]"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center gap-6">
                  <ChevronDown className="text-white/60 group-hover:text-white transition-colors" size={24} />
                  <span className="text-lg lg:text-2xl font-bold tracking-tight">{service.title}</span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Right: Illustration Image */}
          <div className="w-full lg:w-1/2 animate-scale-in">
            <div className="relative group">
              <div className="relative z-10 p-2">
                <div className="rounded-[3rem] overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 shadow-2xl p-4">
                  <img 
                    src={ASSETS.servicesSide} 
                    alt="Analises Ergonômicas ErghoPrev – Curitiba – Paraná" 
                    className="w-full h-auto rounded-[2.5rem] object-cover shadow-inner transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-10 right-10 text-right opacity-60 text-blue-900 font-bold text-sm pointer-events-none italic">
                    Analises Ergonômicas ErghoPrev – Curitiba – Paraná
                  </div>
                </div>
              </div>
              {/* Backglow for the image */}
              <div className="absolute inset-0 bg-blue-400/20 blur-[120px] -z-10 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes do Serviço */}
      {selectedService && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-xl" onClick={closeModal}></div>
          
          <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-scale-in border-4 border-white">
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 p-3 rounded-full bg-gray-100 text-gray-500 hover:bg-rose-500 hover:text-white transition-all z-20 shadow-md"
            >
              <X size={24} />
            </button>
            
            <div className="p-10 lg:p-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest mb-6">
                Consultoria e Gestão
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-[#1a365d] mb-6 leading-tight tracking-tighter">
                {selectedService.title}
              </h2>
              <div className="w-20 h-2 bg-rose-500 rounded-full mb-8"></div>
              
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-10 font-medium">
                {selectedService.detailedContent}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={CONTACT_INFO.whatsappBase + encodeURIComponent(` Gostaria de saber mais sobre: ${selectedService.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow py-5 bg-emerald-500 text-white font-black text-xl rounded-2xl shadow-xl hover:bg-emerald-600 text-center transition-all flex items-center justify-center gap-3"
                >
                  <i className="fab fa-whatsapp"></i>
                  Solicitar Proposta
                </a>
                <button 
                  onClick={closeModal}
                  className="px-8 py-5 bg-gray-100 text-[#1a365d] font-black text-lg rounded-2xl hover:bg-gray-200 transition-all"
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
