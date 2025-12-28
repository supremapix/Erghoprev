
import React from 'react';
import { COLORS, CONTACT_INFO } from '../../constants';
import { ParallaxBackground } from '../Common/ParallaxShapes';

const Solutions: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      <ParallaxBackground>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Texto e CTA */}
            <div className="lg:w-1/2 relative z-10 space-y-8">
              <div className="space-y-2">
                <h4 className="text-rose-600 font-black text-lg lg:text-xl tracking-[0.3em] uppercase animate-fade-in-up">
                  Soluções Ergonômicas
                </h4>
                <div className="h-1.5 w-20 bg-blue-900 rounded-full"></div>
              </div>

              <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tighter" style={{ color: COLORS.primary }}>
                Garanta a Saúde da sua Equipe e a <span className="text-rose-600">Segurança Jurídica</span> da sua Empresa
              </h2>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
                A ErghoPrev oferece uma consultoria completa pautada na <strong>NR-17</strong>, transformando postos de trabalho em ambientes de alta performance. Reduza passivos trabalhistas, elimine riscos de LER/DORT e impulsione a produtividade através de uma gestão ergonômica científica e eficiente.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <a 
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="px-12 py-6 rounded-full text-white font-black text-xl transition-all hover:brightness-110 shadow-[0_20px_50px_rgba(225,29,72,0.3)] hover:-translate-y-2 active:scale-95 text-center flex-grow sm:flex-grow-0 group flex items-center justify-center gap-3" 
                  style={{ backgroundColor: COLORS.accent }}
                >
                  Falar com Especialista
                  <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a 
                  href={CONTACT_INFO.whatsappBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 rounded-full text-blue-900 font-black text-xl border-4 border-blue-900 hover:bg-blue-900 hover:text-white transition-all active:scale-95 text-center flex-grow sm:flex-grow-0"
                >
                  Ver Laudos NR-17
                </a>
              </div>

              <div className="pt-8 border-t border-gray-100 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-black text-blue-900">100%</p>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Conformidade Legal</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-rose-600">-40%</p>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Absenteísmo</p>
                </div>
              </div>
            </div>

            {/* Imagem Emulada */}
            <div className="lg:w-1/2 relative">
              <div className="relative group perspective-1000">
                <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full animate-pulse-slow"></div>
                <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-8 border-white transform transition-all duration-700 group-hover:rotate-2 group-hover:scale-[1.05]">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" 
                    alt="Ergonomia e Postura Profissional" 
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-900 shrink-0">
                        <i className="fas fa-stethoscope text-3xl"></i>
                      </div>
                      <div>
                        <h5 className="font-black text-blue-950 text-xl">Análise Biomecânica</h5>
                        <p className="text-gray-500 font-medium">Mapeamento preciso de tensões musculares e posturais.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-60 animate-bounce-slow"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-60 animate-bounce-slow delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBackground>
    </section>
  );
};

export default Solutions;
