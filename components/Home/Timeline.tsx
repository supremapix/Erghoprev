
import React from 'react';
import { TIMELINE_STEPS, COLORS } from '../../constants';

const Timeline: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: COLORS.primary }}>
            Como podemos ajudar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O início da relação trabalhista é a demonstração clara do zelo da empresa com seu colaborador.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {TIMELINE_STEPS.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                   <div className={`p-8 rounded-3xl shadow-xl border-l-8 transition-transform hover:scale-[1.02] bg-white`} style={{ borderColor: COLORS.primary }}>
                     <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-blue-50 text-blue-900">
                       {step.label}
                     </span>
                     <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.primary }}>{step.title}</h3>
                     <p className="text-gray-600 leading-relaxed">{step.description}</p>
                   </div>
                </div>
                
                {/* Dot */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-blue-900 shadow-lg hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-900 animate-pulse"></div>
                </div>

                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
