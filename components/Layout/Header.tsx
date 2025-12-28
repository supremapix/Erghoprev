
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COLORS } from '../../constants';
import Logo from '../Common/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detecção de seção ativa para feedback visual no menu
      const sections = ['solutions', 'faq', 'contact'];
      let currentSection = 'home';
      
      if (pathname === '/') {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
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
    if (path.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      const sectionId = path.substring(1);
      
      if (pathname !== '/') {
        navigate('/');
        // Aguarda a navegação e o scroll automático do browser ser ignorado
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    } else {
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Início', path: '/', id: 'home' },
    { name: 'Serviços', path: '#solutions', id: 'solutions' },
    { name: 'FAQ', path: '#faq', id: 'faq' },
    { name: 'Contato', path: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'bg-white/98 shadow-xl py-0' : 'bg-white/90 backdrop-blur-lg py-2'}`}>
      <div className="container mx-auto px-4 lg:px-12">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-[90px]' : 'h-[130px]'}`}>
          
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="relative group flex items-center h-full transition-all duration-500 transform hover:scale-105 active:scale-95"
          >
            <Logo className={`${scrolled ? 'h-[70px] lg:h-[90px]' : 'h-[90px] lg:h-[120px]'}`} />
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
              className="px-8 py-4 rounded-2xl text-white font-black text-lg transition-all hover:scale-105 hover:rotate-1 shadow-[0_10px_30px_rgba(30,58,138,0.2)] hover:shadow-blue-900/40 active:scale-95 active:rotate-0"
              style={{ backgroundColor: COLORS.primary }}
            >
              Falar com Especialista
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 rounded-2xl bg-gray-50 text-blue-900 hover:bg-blue-50 transition-all active:scale-90" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[90px] bg-white/95 backdrop-blur-xl transition-all duration-500 z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="container mx-auto px-8 py-12 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.path} 
              onClick={(e) => handleNavClick(e, link.path)}
              className={`text-3xl font-black transition-colors ${
                activeSection === link.id ? 'text-rose-600' : 'text-gray-800'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="block w-full py-6 rounded-3xl text-white font-black text-center text-2xl shadow-2xl transform active:scale-95 transition-transform" 
            style={{ backgroundColor: COLORS.primary }}
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
