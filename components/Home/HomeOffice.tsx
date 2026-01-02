
import React, { useEffect, useState, useRef } from 'react';
import { COLORS } from '../../constants';
import { GraduationCap, CheckCircle, ClipboardList, ArrowRight } from 'lucide-react';

const AnimatedStatCard: React.FC<{ stat: any }> = ({ stat }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const targetValue = parseInt(stat.value.replace(/\D/g, ''));

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

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const ease = 1 - Math.pow(1 - percentage, 3); // Cubic ease out

      setCount(Math.floor(targetValue * ease));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetValue]);

  // Calculations for circle
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (targetValue / 100) * circumference;
  
  return (
    <div 
      ref={cardRef}
      className="bg-white p-10 rounded-[3rem] shadow-xl text-center group hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-100 hover:shadow-2xl"
    >
      <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300 shadow-inner">
        <stat.icon size={36} />
      </div>
      
      <div className="relative inline-block mb-8">
        <svg className="w-40 h-40 transform -rotate-90 drop-shadow-lg">
          {/* Background Circle */}
          <circle cx="80" cy="80" r={radius} stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
          {/* Progress Circle */}
          <circle 
            cx="80" cy="80" r={radius} 
            stroke={COLORS.accent} 
            strokeWidth="12" 
            fill="transparent" 
            strokeDasharray={circumference} 
            strokeDashoffset={isVisible ? targetOffset : circumference}
            strokeLinecap="round"
            className="transition-all duration-[2000ms] ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="font-black text-4xl text-gray-900 tracking-tighter">
            {count}%
          </span>
        </div>
      </div>
      
      <h3 className="text-2xl font-black mb-4 text-blue-900 group-hover:text-rose-500 transition-colors">
        {stat.label}
      </h3>
      <p className="text-gray-500 leading-relaxed font-medium">
        {stat.desc}
      </p>
    </div>
  );
};

const HomeOffice: React.FC = () => {
  const stats = [
    { value: '86%', label: 'Palestras', desc: 'Informação clara e objetiva para SIPAT e treinamentos.', icon: GraduationCap },
    { value: '100%', label: 'Treinamentos', desc: 'Reciclagem e novas admissões conforme NR-17.', icon: CheckCircle },
    { value: '95%', label: 'Projeto Ergonômico', desc: 'Layouts focados em produtividade e bem-estar.', icon: ClipboardList }
  ];

  return (
    <section className="py-24 bg-rose-50/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-60 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-black uppercase tracking-widest mb-6 border border-rose-200 shadow-sm">
             <CheckCircle size={14} /> Resultados Comprovados
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-8 text-gray-900 tracking-tight">
            Análise Ergonômica <br /><span className="text-rose-500">Home Office</span>
          </h2>
          
          <div className="flex flex-col items-center gap-6">
             <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Serviços além da análise ergonômica do trabalho! Ao realizar conosco a AET, sua empresa terá os riscos mapeados para o GRO e PGR, seguindo rigorosamente as normas NR-17 e NR-01.
             </p>
             <a href="#contact" className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2 transition-colors">
               Solicite uma proposta personalizada <ArrowRight size={18} />
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <AnimatedStatCard key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOffice;
