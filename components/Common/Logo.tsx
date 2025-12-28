
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-32", variant = 'light' }) => {
  return (
    <div className={`flex items-center logo-container ${className} select-none relative group`}>
      <div className="relative overflow-visible">
        {/* Usando a logo oficial fornecida que contém os pontos vermelhos e o estilo correto */}
        <img 
          src="/logo-coreta.png" 
          alt="ErghoPrev Logo" 
          className={`logo-img w-auto h-full object-contain transition-all duration-700 ${variant === 'dark' ? 'brightness-0 invert' : ''}`}
          style={{ 
            maxHeight: '100%',
            filter: variant === 'dark' ? 'brightness(0) invert(1)' : 'none'
          }}
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="flex flex-col leading-tight p-2 scale-150">
                  <span style="font-weight: 900; font-size: 2.2rem; color: ${variant === 'dark' ? '#fff' : '#1e3a8a'};">
                    Ergho<span style="color: #60a5fa;">Prev</span>
                  </span>
                  <span style="font-size: 0.8rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #f43f5e;">
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
