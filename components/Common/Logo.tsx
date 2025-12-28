
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-32", variant = 'light' }) => {
  return (
    <div className={`flex items-center logo-container ${className} select-none relative group max-w-full overflow-hidden`}>
      <div className="relative overflow-visible h-full flex items-center">
        {/* Usando a logo oficial fornecida */}
        <img 
          src="https://www.erghoprev.com.br/logo-coreta.png" 
          alt="ErghoPrev Logo" 
          className={`logo-img w-auto h-full max-w-full object-contain transition-all duration-700 ${variant === 'dark' ? 'brightness-0 invert' : ''}`}
          style={{ 
            filter: variant === 'dark' ? 'brightness(0) invert(1)' : 'none'
          }}
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="flex flex-col leading-tight p-2 scale-100 lg:scale-150 origin-left">
                  <span style="font-weight: 900; font-size: 1.5rem; lg:font-size: 2.2rem; color: ${variant === 'dark' ? '#fff' : '#1e3a8a'};">
                    Ergho<span style="color: #60a5fa;">Prev</span>
                  </span>
                  <span style="font-size: 0.6rem; lg:font-size: 0.8rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #f43f5e;">
                    Análises Ergonômicas
                  </span>
                </div>
              `;
            }
          }}
        />
        
        {/* Efeito de Brilho Dinâmico */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[200%] skew-x-[-25deg] group-hover:animate-[glint_1.8s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
