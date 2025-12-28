
import React, { useState } from 'react';
import { SERVICES, COLORS, CONTACT_INFO, ASSETS } from '../../constants';
import { Service } from '../../types';
import { X, ChevronDown, Activity, ShieldCheck, Zap } from 'lucide-react';

const SpinalColumnAnimation = () => (
  <div className="relative w-full max-w-[200px] mx-auto mb-8 animate-pulse">
    <svg viewBox="0 0 100 200" className="w-full h-auto drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
      <defs>
        <linearGradient id="spineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      {/* Representação estilizada de vértebras animadas */}
      {[...Array(12)].map((_, i) => (
        <rect 
          key={i} 
          x="35" 
          y={20 + i * 14} 
          width="30" 
          height="8" 
          rx="4" 
          fill="url(#spineGradient)"
          className="animate-bounce"
          style={{ animationDelay: `${i * 0.1}s`, animationDuration: '3s' }}
        />
      ))}
      {/* Linha da medula pulsante */}
      <line x1="50" y1="10" x2="50" y2="190" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" className="animate-[pulse_2s_infinite]" />
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/20 blur-3xl rounded-full"></div>
  </div>
);

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
    <section id="solutions" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#93c5fd' }}>
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400 opacity-20 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <SpinalColumnAnimation />
          <h2 className="text-4xl lg:text-7xl font-black mb-8 text-blue-950 tracking-tighter leading-[1.1] animate-fade-in-up">
            Otimize o fluxo de trabalho da sua empresa e a torne mais segura e eficiente.
          </h2>
          <p className="text-xl lg:text-2xl text-blue-900/80 font-bold mb-12 max-w-3xl mx-auto">
            Soluções completas em Ergonomia NR-17 para reduzir passivos e aumentar a performance.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Vertical List of Services emulando a imagem */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {SERVICES.slice(0, 4).map((service, idx) => (
              <button 
                key={service.id}
                onClick={() => openModal(service)}
                className="flex items-center justify-between w-full p-6 lg:p-8 bg-[#1e293b] text-white rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.3)] hover:bg-[#0f172a] transition-all duration-300 group text-left border-l-8 border-transparent hover:border-rose-500 transform hover:scale-[1.02]"
              >
                <div className="flex items-center gap-6">
                  <ChevronDown className="text-rose-500 group-hover:rotate-180 transition-transform" size={28} />
                  <h3 className="text-xl lg:text-3xl font-black tracking-tight">{service.title}</h3>
                </div>
              </button>
            ))}

            {/* CTA Extra Forte Abaixo da Lista */}
            <div className="mt-8 p-8 bg-white/30 backdrop-blur-md rounded-[2.5rem] border border-white/50 shadow-xl">
              <h4 className="text-2xl font-black text-blue-950 mb-4 flex items-center gap-2">
                <Zap className="text-amber-500" fill="currentColor" /> 
                Pronto para a Transformação?
              </h4>
              <p className="text-blue-900 font-bold mb-6">
                Evite multas e processos. Implemente a NR-17 com quem é autoridade no assunto.
              </p>
              <a 
                href={CONTACT_INFO.whatsappBase}
                className="block w-full py-5 bg-[#1e3a8a] text-white text-center font-black text-xl rounded-2xl hover:bg-blue-900 shadow-lg transition-all"
              >
                Solicitar Diagnóstico Gratuito
              </a>
            </div>
          </div>
          
          {/* Right: Illustration Image com Legenda e Layout solicitados */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="relative z-10 p-2">
                <div className="rounded-[4rem] overflow-hidden bg-white/20 backdrop-blur-sm border-8 border-white/30 shadow-[0_60px_100px_rgba(0,0,0,0.2)]">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                    alt="Equipe ErghoPrev em análise ergonômica corporativa" 
                    className="w-full h-auto object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="p-6 bg-white/90 backdrop-blur-md">
                    <p className="text-right text-blue-900 font-black text-sm lg:text-base italic">
                      Analises Ergonômicas ErghoPrev – Curitiba – Paraná
                    </p>
                  </div>
                </div>
              </div>
              {/* Brilho de fundo */}
              <div className="absolute inset-0 bg-blue-100 blur-[150px] -z-10 rounded-full animate-pulse-slow opacity-50"></div>
              
              {/* Badges Flutuantes para autoridade */}
              <div className="absolute -top-10 -right-10 bg-rose-600 text-white p-6 rounded-3xl shadow-2xl rotate-6 animate-bounce-slow">
                <ShieldCheck size={40} className="mx-auto mb-2" />
                <p className="font-black text-xs uppercase tracking-widest text-center">100% Legal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detalhes */}
      {selectedService && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0f172a]/95 backdrop-blur-2xl" onClick={closeModal}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-[3.5rem] shadow-2xl overflow-hidden animate-scale-in border-4 border-white">
            <button onClick={closeModal} className="absolute top-8 right-8 p-4 rounded-full bg-gray-100 text-gray-500 hover:bg-rose-500 hover:text-white transition-all z-20">
              <X size={28} />
            </button>
            <div className="p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-6">
                 <Activity className="text-rose-500" size={32} />
                 <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest">NR-17 Especializada</span>
              </div>
              <h3 className="text-3xl lg:text-5xl font-black text-[#0f172a] mb-8 leading-tight tracking-tighter">
                {selectedService.title}
              </h3>
              <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed mb-12 font-medium">
                {selectedService.detailedContent}
              </p>
              <a 
                href={CONTACT_INFO.whatsappBase + encodeURIComponent(` Gostaria de saber mais sobre: ${selectedService.title}`)}
                target="_blank" rel="noopener noreferrer"
                className="block w-full py-6 bg-emerald-500 text-white font-black text-2xl rounded-2xl shadow-xl hover:bg-emerald-600 text-center transition-all flex items-center justify-center gap-4"
              >
                <i className="fab fa-whatsapp"></i> Solicitar Orçamento Grátis
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesGrid;
