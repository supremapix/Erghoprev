
import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../../constants';

const FloatingButtons: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const btnClass = "fixed w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 z-[500]";

  return (
    <>
      <a 
        href={CONTACT_INFO.whatsappBase} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${btnClass} bg-emerald-500 bottom-[240px] right-6 md:right-10`}
        title="WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
      
      <a 
        href={`tel:${CONTACT_INFO.phoneRaw}`} 
        className={`${btnClass} bg-blue-900 bottom-[160px] right-6 md:right-10`}
        title="Ligar Agora"
      >
        <i className="fas fa-phone-alt text-2xl"></i>
      </a>
      
      <a 
        href={`mailto:${CONTACT_INFO.email}`} 
        className={`${btnClass} bg-rose-500 bottom-[80px] right-6 md:right-10`}
        title="Enviar E-mail"
      >
        <i className="fas fa-envelope text-2xl"></i>
      </a>

      {showTop && (
        <button 
          onClick={scrollToTop}
          className={`${btnClass} bg-gray-800 bottom-[20px] left-6 md:left-10 animate-fade-in`}
          title="Voltar ao Topo"
        >
          <i className="fas fa-arrow-up text-2xl"></i>
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
