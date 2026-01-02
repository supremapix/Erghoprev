
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MessageSquare } from 'lucide-react';
import { COLORS, CONTACT_INFO } from '../../constants';
import Logo from '../Common/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, hash, state } = location;

  // Bloqueio de scroll quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Efeito para Scroll no Carregamento Inicial (Hash ou State)
  useEffect(() => {
    const targetId = hash ? hash.replace('#', '') : (state as any)?.scrollTo;

    if (targetId) {
      const scrollToTarget = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          
          // Limpa o state para não scrollar novamente sem querer
          if ((state as any)?.scrollTo) {
             window.history.replaceState({}, document.title);
          }
        }
      };

      // Tenta scrollar imediatamente e após um breve delay para garantir renderização
      scrollToTarget();
      const timer = setTimeout(scrollToTarget, 500);
      return () => clearTimeout(timer);
    }
  }, [hash, state]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['solutions', 'faq', 'contact'];
      let currentSection = 'home';
      
      if (pathname === '/') {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Offset de detecção
            if (rect.top <= 150) {
              currentSection = section;
            }
          }
        }
        setActiveSection(currentSection);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsOpen(false);

    // Função auxiliar para scroll com offset
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    };

    if (path.startsWith('#')) {
      e.preventDefault();
      const sectionId = path.substring(1);
      
      if (pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 150);
      } else {
        scrollToSection(sectionId);
      }
    } else {
      // Caso seja navegação para Home ('/')
      if (path === '/') {
        if (pathname === '/') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Se não for Home, deixa o Link fazer a navegação padrão
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Início', path: '/', id: 'home' },
    { name: 'Serviços', path: '#solutions', id: 'solutions' },
    { name: 'FAQ', path: '#faq', id: 'faq' },
    { name: 'Contato', path: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'bg-white/98 shadow-xl py-0' : 'bg-white/90 backdrop-blur-lg py-1 lg:py-2'}`}>
        <div className="container mx-auto px-4 lg:px-12 h-full">
          <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-[70px] lg:h-[90px]' : 'h-[80px] lg:h-[130px]'}`}>
            
            <Link 
              to="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="relative group flex items-center h-full transition-all duration-500 transform hover:scale-105 active:scale-95 shrink-0"
            >
              <Logo className={`${scrolled ? 'h-[45px] lg:h-[80px]' : 'h-[55px] lg:h-[110px]'}`} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.path} 
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`text-lg font-bold transition-all relative group py-2 ${
                    activeSection === link.id ? 'text-rose-600' : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-1 bg-rose-600 transition-all rounded-full ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-8 py-4 rounded-2xl text-white font-black text-lg transition-all hover:scale-105 hover:rotate-1 shadow-[0_10px_30px_rgba(30,58,138,0.2)] hover:shadow-blue-900/40 active:scale-95"
                style={{ backgroundColor: COLORS.primary }}
              >
                Falar com Especialista
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-xl bg-gray-50 text-blue-900 hover:bg-blue-100 transition-all active:scale-90" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar (Drawer) */}
      <div 
        className={`fixed inset-0 z-[1100] transition-all duration-500 lg:hidden ${isOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-blue-950/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Sidebar Content */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
            <Logo className="h-10" />
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl bg-gray-100 text-gray-500 hover:bg-rose-500 hover:text-white transition-all"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-8 space-y-6">
            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Navegação</p>
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.path} 
                onClick={(e) => handleNavClick(e, link.path)}
                className={`flex items-center gap-4 text-2xl font-black py-2 transition-colors ${
                  activeSection === link.id ? 'text-rose-600' : 'text-gray-800'
                }`}
              >
                <span className={`w-2 h-2 rounded-full bg-rose-600 transition-all ${activeSection === link.id ? 'scale-100' : 'scale-0'}`}></span>
                {link.name}
              </a>
            ))}
            
            <div className="pt-8 border-t border-gray-100">
              <p className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Contatos Rápidos</p>
              <div className="space-y-4">
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Telefone</p>
                    <p className="text-base font-black text-blue-900">{CONTACT_INFO.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-rose-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">E-mail</p>
                    <p className="text-base font-black text-blue-900 truncate max-w-[200px]">{CONTACT_INFO.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-gray-100 bg-gray-50">
            <a 
              href={CONTACT_INFO.whatsappBase}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl text-white font-black text-xl shadow-xl hover:brightness-110 active:scale-95 transition-all" 
              style={{ backgroundColor: '#10b981' }}
            >
              <MessageSquare size={24} />
              WhatsApp Online
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
