
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COLORS, ASSETS } from '../../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      if (pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(path);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const element = document.querySelector(path);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsOpen(false);
    }
  };

  const handleLogoClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '#solutions' },
    { name: 'FAQ', path: '#faq' },
    { name: 'Contato', path: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'bg-white/95 shadow-2xl py-1' : 'bg-white/80 backdrop-blur-md py-4'}`}>
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex justify-between items-center h-[100px]">
          {/* Official Animated Logo */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className={`relative group flex items-center h-full transition-all duration-500 transform ${isClicked ? 'scale-90 -rotate-6' : 'hover:scale-110 active:scale-95'}`}
          >
            <img 
              src={ASSETS.logo} 
              alt="ErghoPrev Logo" 
              className={`h-[70px] lg:h-[100px] w-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(30,58,138,0.3)] filter ${scrolled ? 'brightness-100' : 'brightness-110'} ${isClicked ? 'hue-rotate-180' : ''}`}
            />
            {isClicked && (
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping -z-10"></div>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.path} 
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-gray-700 hover:text-blue-900 font-bold text-lg transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-rose-500 transition-all group-hover:w-full rounded-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-10 py-4 rounded-2xl text-white font-black text-lg transition-all hover:scale-105 shadow-xl hover:shadow-blue-900/20 active:scale-95"
              style={{ backgroundColor: COLORS.primary }}
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-4 rounded-2xl bg-gray-100 text-blue-900 transition-transform active:scale-90" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen bg-white shadow-2xl' : 'max-h-0'}`}>
        <div className="container mx-auto px-6 py-10 space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.path} 
              onClick={(e) => handleNavClick(e, link.path)}
              className="block text-2xl font-black text-gray-800 hover:text-rose-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="block w-full py-5 rounded-2xl text-white font-black text-center text-xl shadow-xl" 
            style={{ backgroundColor: COLORS.primary }}
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
