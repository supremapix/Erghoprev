
import React, { useEffect, useRef, useState } from 'react';
import { Activity, Users, Clipboard, Target } from 'lucide-react';

interface StatCardProps {
  percentage: number;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const CircularProgress: React.FC<{ percentage: number; color: string; delay: number; isVisible: boolean }> = ({ 
  percentage, 
  color, 
  delay,
  isVisible
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Animate progress bar
      const progressTimer = setTimeout(() => {
        setProgress(percentage);
      }, delay);

      // Animate numeric counter
      let startTimestamp: number | null = null;
      const duration = 2000; 

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progressRatio = Math.min(elapsed / duration, 1);
        
        // Easing function: easeOutExpo
        const easeOutProgress = progressRatio === 1 ? 1 : 1 - Math.pow(2, -10 * progressRatio);
        
        setDisplayValue(Math.floor(easeOutProgress * percentage));

        if (progressRatio < 1) {
          window.requestAnimationFrame(step);
        }
      };

      const counterTimer = setTimeout(() => {
        window.requestAnimationFrame(step);
      }, delay);

      return () => {
        clearTimeout(progressTimer);
        clearTimeout(counterTimer);
      };
    }
  }, [percentage, delay, isVisible]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-44 h-44 mx-auto">
      <svg className="transform -rotate-90 w-44 h-44">
        <circle
          cx="88"
          cy="88"
          r={radius}
          stroke="#f3f4f6"
          strokeWidth="14"
          fill="none"
        />
        <circle
          cx="88"
          cy="88"
          r={radius}
          stroke={color}
          strokeWidth="14"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-[2000ms]"
          style={{
            transition: 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-black text-gray-800 tracking-tighter">
          {displayValue}<span className="text-3xl font-bold">%</span>
        </span>
      </div>
    </div>
  );
};

const StatCard: React.FC<StatCardProps> = ({ 
  percentage, 
  title, 
  description, 
  color,
  delay 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`transform transition-all duration-1000 ease-out h-full ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 p-10 h-full border border-gray-50 flex flex-col items-center">
        <div className="mb-10">
          <CircularProgress 
            percentage={percentage} 
            color={color} 
            delay={delay + 300}
            isVisible={isVisible}
          />
        </div>
        <h3 className="text-2xl font-black text-gray-800 mb-4 text-center">
          {title}
        </h3>
        <p className="text-gray-500 text-base leading-relaxed text-center font-medium max-w-[280px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export const ErgonomiaSection: React.FC = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      percentage: 86,
      title: "Palestras",
      description: "As palestras têm por objetivo levar informações aos colaboradores, sendo realizadas em datas específicas como na Semana da Saúde, Abril Verde, SIPAT, entre outras.",
      color: "#f43f5e",
      delay: 0
    },
    {
      percentage: 100,
      title: "Treinamentos",
      description: "Os treinamentos são realizados na admissão de funcionários, sendo que alguns são realizados periodicamente (reciclagem).",
      color: "#10b981",
      delay: 200
    },
    {
      percentage: 95,
      title: "Projeto Ergonômico",
      description: "O Projeto Ergonômico ou Ergonomia de Concepção é inserido antes da criação do produto ou ambiente de trabalho.",
      color: "#fbbf24",
      delay: 400
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 px-4 bg-white overflow-hidden"
    >
      {/* Background Decorative Shapes matching the screenshot */}
      <div className="absolute top-[15%] -left-[5%] w-48 h-48 opacity-100 pointer-events-none transition-transform duration-1000 animate-pulse-slow">
        <svg viewBox="0 0 100 100" fill="#f43f5e">
           <path d="M100,20 C60,20 20,60 20,100 L0,100 C0,40 40,0 100,0 Z" />
        </svg>
      </div>
      <div className="absolute top-[20%] -right-[5%] w-40 h-40 opacity-100 pointer-events-none animate-pulse-slow" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" fill="#1e3a8a">
           <path d="M0,80 C40,80 80,40 80,0 L100,0 C100,60 60,100 0,100 Z" />
        </svg>
      </div>
      <div className="absolute bottom-[5%] left-[30%] w-32 h-16 opacity-100 pointer-events-none animate-bounce-slow">
        <div className="w-full h-full bg-[#ec4899] rounded-t-full"></div>
      </div>
      <div className="absolute bottom-0 left-[45%] w-40 h-20 opacity-100 pointer-events-none">
        <div className="w-full h-full bg-[#10b981] rounded-t-full"></div>
      </div>
      <div className="absolute bottom-[5%] right-[25%] w-32 h-16 opacity-100 pointer-events-none animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
        <div className="w-full h-full bg-[#f43f5e] rounded-t-full"></div>
      </div>
      <div className="absolute bottom-[5%] right-[10%] w-32 h-32 opacity-100 pointer-events-none">
        <div className="w-full h-full bg-[#fbbf24] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-24 transform transition-all duration-1000 ${
          titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Serviços além da análise
            <br />
            ergonômica do trabalho!
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Ao realizar conosco a <strong className="text-gray-900">Análise Ergonômica do Trabalho</strong>, sua empresa terá os riscos mapeados para o <strong className="text-gray-900">GRO e PGR</strong> e além de estar de acordo com as normas <strong className="text-gray-900">NR-17 e NR-01</strong>, conseguirá promover melhora na qualidade de vida do trabalhador e aumento na produtividade no setor.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Bottom Icons Section matching the requested design */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 transform transition-all duration-1000 delay-700 ${
          titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {[
            { icon: Activity, color: "text-rose-500", label: "Análise", bg: "bg-rose-50" },
            { icon: Users, color: "text-emerald-500", label: "Treinamento", bg: "bg-emerald-50" },
            { icon: Clipboard, color: "text-amber-500", label: "Projetos", bg: "bg-amber-50" },
            { icon: Target, color: "text-blue-500", label: "Resultados", bg: "bg-blue-50" }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className={`w-28 h-28 rounded-[2.5rem] ${item.bg} flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                <item.icon className={`w-14 h-14 ${item.color}`} />
              </div>
              <span className="mt-6 text-gray-800 font-black text-xl">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
