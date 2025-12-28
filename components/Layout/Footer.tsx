
import React, { useState, useEffect } from 'react';
import { COLORS, CONTACT_INFO, ASSETS } from '../../constants';
import { Link } from 'react-router-dom';
import { Clock, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const isBusinessDay = day >= 1 && day <= 5;
      const isBusinessHour = hour >= 8 && hour < 18;
      setIsOpenNow(isBusinessDay && isBusinessHour);
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleLogoClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            {/* Official Animated Logo for Footer */}
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className={`relative inline-block transition-all duration-500 transform ${isClicked ? 'scale-90 rotate-12' : 'hover:scale-110 active:scale-95'}`}
            >
              <img 
                src={ASSETS.logo} 
                alt="ErghoPrev Logo Footer" 
                className={`h-[100px] lg:h-[120px] w-auto object-contain brightness-125 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 ${isClicked ? 'filter hue-rotate-90' : ''}`}
              />
              {isClicked && (
                <div className="absolute inset-0 bg-rose-500/20 rounded-full animate-ping -z-10"></div>
              )}
            </Link>
            <p className="text-gray-400 leading-relaxed text-lg font-medium">
              Excelência em gestão ergonômica e saúde ocupacional em Curitiba e Região Metropolitana.
            </p>
            <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl border ${isOpenNow ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400' : 'border-rose-500/20 bg-rose-500/10 text-rose-400'}`}>
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-rose-400'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpenNow ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
              </span>
              <span className="text-sm font-black uppercase tracking-widest">
                {isOpenNow ? 'Aberto Agora' : 'Fechado no Momento'}
              </span>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-black flex items-center gap-3">
              <Clock className="text-rose-500" size={24} />
              Horário de Atendimento
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-gray-400 text-lg">
                <span className="font-medium">Segunda a Sexta</span>
                <span className="text-white font-bold">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center text-gray-500 text-lg">
                <span>Sábado e Domingo</span>
                <span className="italic font-medium">Atendimento Digital</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-black">Links Rápidos</h3>
            <ul className="space-y-4">
              {['Home', 'Serviços', 'AET', 'NR-17', 'Contato'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-400 hover:text-rose-500 transition-all text-lg font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-black">Contato Oficial</h3>
            <div className="space-y-5">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-bold">{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-bold break-all">{CONTACT_INFO.email}</span>
              </a>
            </div>
            <div className="flex gap-4 pt-4">
              {['fab fa-whatsapp', 'fab fa-instagram', 'fab fa-facebook-f', 'fab fa-linkedin-in'].map((icon, i) => (
                <a key={i} href={CONTACT_INFO.whatsappBase} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl transition-all hover:bg-rose-500 hover:scale-110">
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 font-medium">
            <p>© 2024 ErghoPrev - Todos os direitos reservados</p>
          </div>
          <div className="text-gray-400 text-xl flex items-center">
            Desenvolvido por
            <span className="inline-block animate-giant-heart text-rose-500 mx-3 text-5xl">❤️</span> 
            <a href="https://supremamidia.com.br" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-black hover:text-amber-300 transition-colors">
              Suprema Mídia
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes giant-heart {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.3); }
          30% { transform: scale(1); }
          45% { transform: scale(1.5); }
          60% { transform: scale(1); }
        }
        .animate-giant-heart {
          animation: giant-heart 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
