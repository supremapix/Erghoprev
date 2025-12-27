
import React, { useState, useEffect } from 'react';
import { COLORS, CONTACT_INFO } from '../../constants';
import { Link } from 'react-router-dom';
import { Clock, Phone, Mail, MapPin, CheckCircle, XCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      // Brasilia Time is usually UTC-3. For a generic web app, we can use the user's local time 
      // or a specific offset logic if needed. Here we assume local working hours.
      const day = now.getDay(); // 0 is Sunday, 1-5 is Mon-Fri, 6 is Saturday
      const hour = now.getHours();

      const isBusinessDay = day >= 1 && day <= 5;
      const isBusinessHour = hour >= 8 && hour < 18;

      setIsOpenNow(isBusinessDay && isBusinessHour);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Re-check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Logo & Brand Identity */}
          <div className="space-y-8">
            <Link to="/" className="inline-block transform transition-transform hover:scale-105">
              <h2 className="text-5xl font-black tracking-tighter leading-none">
                Ergho<span className="text-rose-500">Prev</span>
              </h2>
            </Link>
            <p className="text-gray-400 leading-relaxed text-lg font-medium">
              Excelência em gestão ergonômica e saúde ocupacional. Protegendo o seu maior patrimônio: as pessoas e a produtividade.
            </p>
            
            {/* Business Status Badge */}
            <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl border ${isOpenNow ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400' : 'border-rose-500/20 bg-rose-500/10 text-rose-400'} animate-fade-in-up`}>
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-rose-400'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpenNow ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
              </span>
              <span className="text-sm font-black uppercase tracking-widest">
                {isOpenNow ? 'Aberto Agora' : 'Fechado no Momento'}
              </span>
            </div>
          </div>

          {/* Opening Hours */}
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
                <span>Sábado</span>
                <span className="italic font-medium">Fechado</span>
              </li>
              <li className="flex justify-between items-center text-gray-500 text-lg">
                <span>Domingo</span>
                <span className="italic font-medium">Fechado</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black">Links Rápidos</h3>
            <ul className="space-y-4">
              {['Home', 'Soluções', 'Análise Ergonômica', 'FAQ', 'Bairros Atendidos'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-rose-500 transition-all text-lg font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black">Entre em Contato</h3>
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
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-rose-500">
                  <MapPin size={20} />
                </div>
                <span className="text-lg font-bold">Curitiba e Região</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: 'fab fa-whatsapp', color: 'hover:bg-[#25D366]', link: CONTACT_INFO.whatsappBase },
                { icon: 'fab fa-instagram', color: 'hover:bg-[#E4405F]', link: CONTACT_INFO.whatsappBase },
                { icon: 'fab fa-facebook-f', color: 'hover:bg-[#1877F2]', link: CONTACT_INFO.whatsappBase },
                { icon: 'fab fa-linkedin-in', color: 'hover:bg-[#0A66C2]', link: CONTACT_INFO.whatsappBase }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl transition-all ${social.color} hover:scale-110 active:scale-95`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 font-medium text-center md:text-left">
            <p>© 2024 ErghoPrev - Todos os direitos reservados</p>
          </div>
          <div className="text-gray-400 text-lg text-center md:text-right">
            Desenvolvido com <span className="inline-block animate-pulse text-rose-500 mx-1">❤️</span> por 
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 font-black ml-2 hover:underline hover:text-amber-300 transition-colors"
            >
              Suprema Sites Express
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
