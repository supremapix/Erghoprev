
import React, { useEffect, useState, useRef } from 'react';

interface ShapeProps {
  color: string;
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  speed: number; // Intensity of parallax (0 to 1)
  delay?: string;
  opacity?: string;
  blur?: string;
  outline?: boolean;
}

const FloatingShape: React.FC<ShapeProps & { mousePos: { x: number; y: number } }> = ({ 
  color, size, top, left, right, bottom, speed, delay = '0s', opacity = '0.2', blur = 'none', outline = false, mousePos 
}) => {
  const xOffset = mousePos.x * speed;
  const yOffset = mousePos.y * speed;

  return (
    <div 
      className={`absolute rounded-full transition-transform duration-300 ease-out animate-pulse-slow ${outline ? 'border-4' : ''}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        backgroundColor: outline ? 'transparent' : color,
        borderColor: outline ? color : 'transparent',
        opacity,
        filter: blur !== 'none' ? `blur(${blur})` : 'none',
        transform: `translate(${xOffset}px, ${yOffset}px)`,
        animationDelay: delay,
        zIndex: 0
      }}
    />
  );
};

export const ParallaxBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 25;
      const y = (e.clientY - innerHeight / 2) / 25;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Pink Circle */}
      <FloatingShape 
        color="#f43f5e" size="150px" top="10%" left="5%" speed={1.2} delay="0s" blur="40px" mousePos={mousePos} 
      />
      {/* Yellow Circle */}
      <FloatingShape 
        color="#fbbf24" size="200px" bottom="15%" right="10%" speed={-0.8} delay="1.5s" blur="60px" mousePos={mousePos} 
      />
      {/* Green Circle */}
      <FloatingShape 
        color="#10b981" size="120px" top="40%" right="20%" speed={0.5} delay="3s" blur="30px" mousePos={mousePos} 
      />
      {/* Outline Pink */}
      <FloatingShape 
        color="#f43f5e" size="80px" bottom="20%" left="15%" speed={1.5} delay="0.5s" outline opacity="0.1" mousePos={mousePos} 
      />
      {/* Outline Blue */}
      <FloatingShape 
        color="#60a5fa" size="100px" top="15%" right="35%" speed={-1.2} delay="2s" outline opacity="0.1" mousePos={mousePos} 
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
