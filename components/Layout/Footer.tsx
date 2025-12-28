
import React, { useState, useEffect } from 'react';
import { COLORS, CONTACT_INFO } from '../../constants';
import { Link } from 'react-router-dom';
import { Clock, Phone, Mail } from 'lucide-react';
import Logo from '../Common/Logo';

const Footer: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);

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

  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="inline-block transform hover:scale-110 transition-transform">
              <Logo className="h-[90px]" />
            </Link>
            <p className="text-gray-400 leading-relaxed text-lg font-medium">
              Excelência em gestão ergonômica e saúde ocupacional em Curitiba e Região Metropolitana.
            </p>
            <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border ${isOpenNow ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400' : 'border-rose-500/20 bg-rose-500/10 text-rose-400'}`}>
              <span className={`w-2 h-2 rounded-full animate-ping ${isOpenNow ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
              <span className="text-xs font-black uppercase">{isOpenNow ? 'Aberto Agora' : 'Fechado Agora'}</span>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-black flex items-center gap-3">
              <Clock className="text-rose-500" size={24} /> Atendimento
            </h3>
            <ul className="space-y-4 text-gray-400 text-lg">
              <li className="flex justify-between"><span>Seg a Sex</span><span className="text-white font-bold">08:00 - 18:00</span></li>
              <li className="flex justify-between text-gray-500"><span>Sab e Dom</span><span>Plantão Digital</span></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-black">Links Úteis</h3>
            <ul className="space-y-4 text-gray-400 text-lg">
              {['Home', 'AET', 'NR-17', 'Contato'].map(item => (
                <li key={item}><Link to="/" className="hover:text-rose-500 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100"></span>{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-black">Contatos</h3>
            <div className="space-y-4 text-gray-400">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="text-rose-500" size={20} /> <span className="font-bold">{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="text-rose-500" size={20} /> <span className="font-bold break-all">{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500">
          <p>© 2024 ErghoPrev - Todos os direitos reservados</p>
          <div className="flex items-center gap-2 text-xl">
            Desenvolvido por 
            <span className="animate-beat text-rose-500 text-4xl mx-1 inline-block">❤️</span>
            <a href="https://supremamidia.com.br" target="_blank" className="font-black text-amber-500 hover:text-white transition-colors">Suprema Mídia</a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.4); }
        }
        .animate-beat { animation: beat 0.8s infinite cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>
    </footer>
  );
};

export default Footer;
