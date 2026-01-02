
import React, { useState, useEffect } from 'react';
import { TYPEWRITER_PHRASES, COLORS, CONTACT_INFO } from '../../constants';
import { ParallaxBackground } from '../Common/ParallaxShapes';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setDisplayText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 to-blue-200 py-16 lg:py-32">
      <ParallaxBackground>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mb-6 lg:mb-8 inline-block px-6 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-blue-900 text-xs lg:text-sm font-black uppercase tracking-[0.2em] animate-bounce shadow-sm">
            Autoridade Absoluta em NR-17
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-8xl font-black mb-6 lg:mb-10 min-h-[2.5em] sm:min-h-[1.5em] leading-[1.1] tracking-tighter px-2" style={{ color: COLORS.primary }}>
            {displayText}<span className="text-rose-500 animate-pulse">|</span>
          </h1>
          
          <p className="text-lg lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 lg:mb-16 font-medium leading-relaxed px-4">
            Pare de perder dinheiro com multas e processos. Proteja seu patrimônio e garanta a produtividade máxima com a gestão ergonômica da ErghoPrev.
          </p>

          <div className="flex flex-col items-center gap-6 lg:gap-10">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 w-full max-w-xl">
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-3 lg:gap-4 bg-white/70 backdrop-blur-md px-6 py-4 lg:px-8 lg:py-5 rounded-2xl border border-white/50 shadow-lg hover:scale-105 transition-all w-full sm:w-auto justify-center"
              >
                <div className="text-2xl lg:text-3xl bg-blue-100 w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center">📞</div>
                <div className="text-left">
                  <p className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-widest">Falar com Especialista</p>
                  <p className="text-xl lg:text-2xl font-black whitespace-nowrap" style={{ color: COLORS.primary }}>{CONTACT_INFO.phone}</p>
                </div>
              </a>
            </div>
            
            <a 
              href={CONTACT_INFO.whatsappBase}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center w-full sm:w-auto px-10 lg:px-14 py-5 lg:py-7 font-black text-white text-lg lg:text-2xl transition-all duration-300 bg-emerald-500 rounded-2xl lg:rounded-full hover:bg-emerald-600 shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.5)] hover:-translate-y-2 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] skew-x-[-25deg] group-hover:animate-[glint_1.5s_ease-in-out_infinite]"></div>
              Garantir Diagnóstico Gratuito Agora
              <i className="fas fa-chevron-right ml-4 group-hover:translate-x-2 transition-transform"></i>
            </a>
          </div>
        </div>
      </ParallaxBackground>
    </section>
  );
};

export default Hero;
