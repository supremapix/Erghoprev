
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

  const btnClass = "fixed w-14 h-14 lg:w-16 lg:h-16 rounded-2xl lg:rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 z-[500] active:scale-90";

  return (
    <>
      {/* WhatsApp Button - High priority */}
      <a 
        href={CONTACT_INFO.whatsappBase} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${btnClass} bg-emerald-500 bottom-6 right-6 lg:bottom-10 lg:right-10`}
        title="WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl lg:text-3xl"></i>
        <span className="absolute -top-1 -left-1 w-4 h-4 bg-rose-500 rounded-full animate-ping"></span>
      </a>
      
      {/* Scroll Top Button - Hidden on small mobile to avoid clutter, shown on larger mobile/desktop */}
      {showTop && (
        <button 
          onClick={scrollToTop}
          className={`fixed w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-full bg-gray-900/80 backdrop-blur-md text-white shadow-xl transition-all duration-300 hover:bg-black bottom-6 left-6 lg:bottom-10 lg:left-10 z-[500] active:scale-90 animate-fade-in flex items-center justify-center`}
          title="Voltar ao Topo"
        >
          <i className="fas fa-arrow-up text-lg lg:text-xl"></i>
        </button>
      )}

      {/* Hidden Secondary contact info that can be shown on hover/click or stays hidden to avoid visual noise */}
      <div className="hidden lg:flex flex-col gap-4 fixed bottom-32 right-10 z-[500]">
        <a 
          href={`tel:${CONTACT_INFO.phoneRaw}`} 
          className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
          title="Ligar Agora"
        >
          <i className="fas fa-phone-alt text-lg"></i>
        </a>
        <a 
          href={`mailto:${CONTACT_INFO.email}`} 
          className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
          title="Enviar E-mail"
        >
          <i className="fas fa-envelope text-lg"></i>
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
