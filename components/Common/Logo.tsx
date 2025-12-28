
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-20" }) => {
  return (
    <div className={`flex items-center ${className} select-none`}>
      <img src="/logo-coreta.png" alt="Erghoprev Logo" className="h-full w-auto" />
    </div>
  );
};

export default Logo;
