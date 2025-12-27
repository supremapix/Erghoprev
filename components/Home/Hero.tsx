
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
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 to-blue-200 py-20 lg:py-32">
      <ParallaxBackground>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mb-8 inline-block px-4 py-1 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 text-blue-900 text-sm font-bold uppercase tracking-widest animate-bounce">
            Expertise em NR-17
          </div>
          
          <h2 className="text-4xl lg:text-8xl font-black mb-8 min-h-[1.5em] leading-tight" style={{ color: COLORS.primary }}>
            {displayText}<span className="text-rose-500 animate-pulse">|</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Proteção e saúde ocupacional com foco na ergonomia. Diminua o fluxo de passivos de sua empresa da forma mais segura e eficiente.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/50 shadow-xl hover:scale-105 transition-transform"
              >
                <span className="text-3xl">📞</span>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Ligue Agora</p>
                  <p className="text-2xl font-black" style={{ color: COLORS.primary }}>{CONTACT_INFO.phone}</p>
                </div>
              </a>
            </div>
            
            <a 
              href={CONTACT_INFO.whatsappBase}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-white text-xl transition-all duration-300 bg-emerald-500 rounded-full hover:bg-emerald-600 shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.5)] hover:-translate-y-2"
            >
              Solicite uma Proposta!
              <i className="fas fa-chevron-right ml-3 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </ParallaxBackground>
    </section>
  );
};

export default Hero;
