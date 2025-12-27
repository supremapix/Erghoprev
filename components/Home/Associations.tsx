
import React, { useState } from 'react';

const Associations: React.FC = () => {
  const [clickedIdx, setClickedIdx] = useState<number | null>(null);

  const partners = [
    { 
      name: 'ESOCIAL', 
      fullName: 'Sistema de Escrituração Digital',
      logo: 'https://www.gov.br/esocial/pt-br/centrais-de-conteudo/imagens/esocial_logo_pos_cor.png',
      color: '#10b981' // Green
    },
    { 
      name: 'ABERGO', 
      fullName: 'Associação Brasileira de Ergonomia',
      logo: 'https://www.abergo.org.br/assets/images/logo_abergo_v2.png',
      color: '#1e3a8a' // Blue
    },
    { 
      name: 'ABNT', 
      fullName: 'Associação Brasileira de Normas Técnicas',
      logo: 'https://upload.wikimedia.org/wikipedia/pt/2/2a/Logotipo_da_ABNT.png',
      color: '#1a365d' // Navy
    },
    { 
      name: 'CREFITO', 
      fullName: 'Conselho Regional de Fisioterapia',
      logo: 'https://crefito8.org.br/wp-content/uploads/2021/03/logo-crefito-8.png',
      color: '#059669' // Emerald
    },
    { 
      name: 'IEA', 
      fullName: 'International Ergonomics Association',
      logo: 'https://iea.cc/wp-content/uploads/2019/04/IEA_logo_small.png',
      color: '#f43f5e' // Rose
    }
  ];

  // Repeat for infinite effect
  const scrollingPartners = [...partners, ...partners, ...partners];

  const handleImpact = (idx: number) => {
    setClickedIdx(idx);
    setTimeout(() => setClickedIdx(null), 500);
  };

  return (
    <section className="py-32 bg-white overflow-hidden relative border-t border-gray-100">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-assoc" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-assoc)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 mb-20 text-center relative z-10">
        <div className="inline-block px-8 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-[0.3em] mb-6 shadow-sm border border-blue-100">
          Reconhecimento e Conformidade
        </div>
        <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter mb-8">
          Certificações & <span className="text-rose-500">Parcerias</span>
        </h2>
        <p className="text-xl lg:text-2xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
          Nossa metodologia é rigorosamente alinhada aos padrões das maiores instituições reguladoras de ergonomia do mundo.
        </p>
      </div>

      <div className="relative group/container">
        {/* Soft edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling list */}
        <div className="flex animate-scroll-slower group-hover/container:pause-animation py-12">
          {scrollingPartners.map((p, idx) => (
            <div 
              key={idx} 
              onClick={() => handleImpact(idx)}
              className="flex-shrink-0 flex flex-col items-center justify-center px-10 transition-all duration-500 cursor-pointer"
            >
              <div 
                className={`
                  relative w-80 h-48 bg-white rounded-[2.5rem] shadow-[0_15px_45px_rgba(0,0,0,0.06)] 
                  flex items-center justify-center p-10
                  transition-all duration-700 transform
                  hover:-translate-y-6 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)]
                  hover:scale-105 group grayscale hover:grayscale-0
                  ${clickedIdx === idx ? 'animate-boom' : ''}
                `}
                style={{
                  border: clickedIdx === idx ? `3px solid ${p.color}` : '1px solid #f1f5f9'
                }}
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl -z-10" 
                  style={{ backgroundColor: p.color }}
                ></div>

                {/* Stylized Text Fallback (always present but hidden by image if image loads) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
                  <span 
                    className="text-3xl lg:text-4xl font-black tracking-widest text-center uppercase opacity-100"
                    style={{ color: p.color }}
                  >
                    {p.name}
                  </span>
                </div>
                
                {/* Image Overlay (hides text if successful) */}
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="relative z-10 max-h-full max-w-full object-contain transition-all duration-700 group-hover:scale-110 bg-white" 
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />

                {/* Impact Ripple Circle */}
                {clickedIdx === idx && (
                  <div className="absolute inset-0 border-4 border-rose-500 rounded-[2.5rem] animate-ping opacity-20"></div>
                )}
              </div>

              {/* Label below the card */}
              <div className="mt-8 flex flex-col items-center">
                <span className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] transition-all duration-500 group-hover:text-blue-900 group-hover:tracking-[0.3em]">
                  {p.name}
                </span>
                <div 
                  className="w-12 h-1.5 rounded-full mt-3 transition-all duration-500 group-hover:w-24" 
                  style={{ backgroundColor: p.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-slower {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes boom-impact {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0); }
          30% { transform: scale(1.25); box-shadow: 0 0 50px 20px rgba(244, 63, 94, 0.4); }
          100% { transform: scale(1.05); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0); }
        }
        .animate-scroll-slower {
          animation: scroll-slower 35s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-boom {
          animation: boom-impact 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
        }
        .pause-animation {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Associations;
