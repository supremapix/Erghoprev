
import React, { useState, useEffect } from 'react';
import { COLORS, CONTACT_INFO } from '../../constants';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Clock, Phone, Mail, ChevronRight } from 'lucide-react';
import Logo from '../Common/Logo';

const Footer: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      setIsOpenNow(day >= 1 && day <= 5 && hour >= 8 && hour < 18);
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();

    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    };

    if (path === '/' || path === '#') {
      if (pathname !== '/') {
        navigate('/');
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (path.startsWith('#')) {
      const sectionId = path.substring(1);
      
      if (pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 150);
      } else {
        scrollToSection(sectionId);
      }
    }
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-32 pb-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <Link to="/" onClick={(e) => handleLinkClick(e, '/')} className="inline-block transform hover:scale-105 transition-transform duration-500">
              <Logo className="h-[140px] lg:h-[180px]" variant="dark" />
            </Link>
            <p className="text-gray-400 leading-relaxed text-xl font-medium">
              Líder em gestão ergonômica e saúde ocupacional estratégica. Atendimento especializado para Curitiba, RMC e todo o Brasil.
            </p>
            <div className={`inline-flex items-center gap-4 px-6 py-3 rounded-full border ${isOpenNow ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400' : 'border-rose-500/20 bg-rose-500/10 text-rose-400'}`}>
              <span className={`w-3 h-3 rounded-full animate-ping ${isOpenNow ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
              <span className="text-sm font-black uppercase tracking-widest">{isOpenNow ? 'Atendimento Online' : 'Plantão Digital'}</span>
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-3xl font-black flex items-center gap-4">
              <Clock className="text-rose-500" size={32} /> Expediente
            </h3>
            <ul className="space-y-5 text-gray-400 text-xl">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Segunda a Sexta</span><span className="text-white font-bold">08h - 18h</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2 text-gray-500"><span>Sábado</span><span>Plantão Digital</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2 text-gray-500"><span>Domingo</span><span>Plantão Digital</span></li>
            </ul>
          </div>

          <div className="space-y-10">
            <h3 className="text-3xl font-black underline decoration-rose-600 decoration-4 underline-offset-8">Links Rápidos</h3>
            <ul className="space-y-5 text-gray-400 text-xl">
              {[
                { name: 'Início', path: '/' },
                { name: 'Serviços NR-17', path: '#solutions' },
                { name: 'Perguntas Frequentes', path: '#faq' },
                { name: 'Fale Conosco', path: '#contact' }
              ].map(item => (
                <li key={item.name}>
                  <a 
                    href={item.path} 
                    onClick={(e) => handleLinkClick(e, item.path)}
                    className="hover:text-rose-500 transition-all flex items-center gap-3 group"
                  >
                    <ChevronRight size={18} className="text-rose-600 transform group-hover:translate-x-1 transition-transform" />
                    <span className="relative overflow-hidden">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h3 className="text-3xl font-black">Canais Diretos</h3>
            <div className="space-y-6 text-gray-400">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-4 hover:text-white transition-all group p-2 rounded-xl hover:bg-white/5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-all group-hover:rotate-12">
                  <Phone size={24} className="text-rose-500 group-hover:text-white" />
                </div>
                <span className="font-bold text-xl">{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 hover:text-white transition-all group p-2 rounded-xl hover:bg-white/5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-rose-600 transition-all group-hover:-rotate-12">
                  <Mail size={24} className="text-rose-500 group-hover:text-white" />
                </div>
                <span className="font-bold text-xl break-all">{CONTACT_INFO.email}</span>
              </a>
              <a 
                href={CONTACT_INFO.whatsappBase} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-white transition-all group p-2 rounded-xl hover:bg-emerald-500/10"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                  <i className="fab fa-whatsapp text-2xl text-emerald-500 group-hover:text-white"></i>
                </div>
                <span className="font-bold text-xl">Atendimento WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-gray-500 font-medium">
          <p className="text-lg">© 2024 ErghoPrev - Excelência em Ergonomia</p>
          <div className="flex items-center gap-4 text-xl">
            Design & Estratégia por 
            <a href="https://supremamidia.com.br" target="_blank" className="font-black text-amber-500 hover:text-white transition-all transform hover:scale-110 flex items-center gap-2 group">
              <span className="text-3xl group-hover:animate-bounce">🚀</span> Suprema Mídia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
