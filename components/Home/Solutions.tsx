
import React from 'react';
import { COLORS, ASSETS } from '../../constants';
import { ParallaxBackground } from '../Common/ParallaxShapes';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      <ParallaxBackground>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight" style={{ color: COLORS.primary }}>
                Soluções Ergonômicas <br />
                <span className="text-rose-500">Sob Medida</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                A falta de boas práticas e de atenção ao se sentar e trabalhar, aliar a isso postos de trabalho mal planejados, 
                sem mobiliário ergonômico e sem orientação quanto ao uso/ajuste podem causar vários problemas de saúde. 
                Nosso foco é transformar seu ambiente em um espaço de alta produtividade e bem-estar, eliminando riscos invisíveis.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-5 rounded-full text-white font-black text-lg transition-all hover:brightness-110 shadow-[0_15px_40px_rgba(244,63,94,0.3)] hover:-translate-y-1" style={{ backgroundColor: COLORS.accent }}>
                  Fale Conosco Agora
                </button>
                <button className="px-10 py-5 rounded-full text-blue-900 font-black text-lg border-2 border-blue-900 hover:bg-blue-50 transition-all">
                  Conheça a NR-17
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
               {/* Decorative floating elements specifically for the image */}
               <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
               
               <img 
                 src={ASSETS.solutionsMain} 
                 alt="Ergonomia Profissional" 
                 className="rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative z-10 w-full aspect-video object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
               />
               <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden lg:block transform group-hover:translate-x-2 transition-transform">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <i className="fas fa-check-circle text-2xl"></i>
                    </div>
                    <div>
                      <p className="font-black text-blue-900">100% Conforme</p>
                      <p className="text-sm text-gray-500">Laudos Técnicos NR-17</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </ParallaxBackground>
    </section>
  );
};

export default Solutions;
