
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-20" }) => {
  return (
    <div className={`flex items-center ${className} select-none`}>
      <svg 
        viewBox="0 0 460 190" 
        className="h-full w-auto"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Arc of dots - matching the wave in the image */}
        <g fill="#c4121a">
          <circle cx="40" cy="65" r="22" />
          <circle cx="85" cy="42" r="18" />
          <circle cx="135" cy="28" r="16" />
          <circle cx="185" cy="22" r="14" />
          <circle cx="235" cy="30" r="12" />
          <circle cx="280" cy="48" r="11" />
          <circle cx="325" cy="58" r="12" />
          <circle cx="370" cy="52" r="14" />
          <circle cx="415" cy="30" r="17" />
        </g>
        
        {/* Main Brand Name */}
        <g>
          {/* Thick Blue Background/Outline for the whole word */}
          <text 
            x="30" 
            y="135" 
            fontFamily="Arial Black, Arial, sans-serif" 
            fontWeight="900" 
            fontSize="105" 
            stroke="#2b5a97" 
            strokeWidth="12" 
            strokeLinejoin="round" 
            fill="#2b5a97"
            letterSpacing="-5"
            textLength="390"
            lengthAdjust="spacingAndGlyphs"
          >
            Erghoprev
          </text>
          
          {/* White part "Ergho" */}
          <text 
            x="30" 
            y="135" 
            fontFamily="Arial Black, Arial, sans-serif" 
            fontWeight="900" 
            fontSize="105" 
            fill="white"
            letterSpacing="-5"
          >
            Ergho
          </text>
          
          {/* Light Blue part "prev" - Positioned carefully to handle the descender of 'p' */}
          <text 
            x="262" 
            y="135" 
            fontFamily="Arial Black, Arial, sans-serif" 
            fontWeight="900" 
            fontSize="105" 
            fill="#a6d1f5"
            letterSpacing="-5"
          >
            prev
          </text>
        </g>
        
        {/* Subtext "análises ergonômicas" - Red and Bold */}
        <text 
          x="440" 
          y="158" 
          fontFamily="Arial Black, Arial, sans-serif" 
          fontWeight="900" 
          fontSize="24" 
          fill="#c4121a"
          textAnchor="end"
        >
          análises
        </text>
        <text 
          x="440" 
          y="182" 
          fontFamily="Arial Black, Arial, sans-serif" 
          fontWeight="900" 
          fontSize="24" 
          fill="#c4121a"
          textAnchor="end"
        >
          ergonômicas
        </text>
      </svg>
    </div>
  );
};

export default Logo;
