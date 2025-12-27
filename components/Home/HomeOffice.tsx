
import React from 'react';
import { COLORS } from '../../constants';

const HomeOffice: React.FC = () => {
  const stats = [
    { value: '86%', label: 'Palestras', desc: 'Informação clara e objetiva para SIPAT e treinamentos.', icon: '👩' },
    { value: '100%', label: 'Treinamentos', desc: 'Reciclagem e novas admissões conforme NR-17.', icon: '🎓' },
    { value: '95%', label: 'Projeto Ergonômico', desc: 'Layouts focados em produtividade e bem-estar.', icon: '📊' }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#fce7f3' }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: COLORS.primary }}>
            Análise ergonômica do trabalho em Home Office
          </h2>
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm mb-8">
            <span className="text-xl">📋</span>
            <span className="font-bold text-rose-500">Solicite uma Proposta!</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Serviços além da análise ergonômica do trabalho! Ao realizar conosco a AET, sua empresa terá os riscos mapeados para o GRO e PGR, seguindo as normas NR-17 e NR-01.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-xl text-center group hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-6">{stat.icon}</div>
              <div className="relative inline-block mb-4">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                  <circle 
                    cx="64" cy="64" r="58" stroke={COLORS.accent} strokeWidth="8" fill="transparent" 
                    strokeDasharray="364" strokeDashoffset={364 - (364 * parseInt(stat.value)) / 100}
                    className="transition-all duration-1000 delay-300"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-black text-3xl text-gray-800">
                  {stat.value}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.primary }}>{stat.label}</h3>
              <p className="text-gray-600 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOffice;
