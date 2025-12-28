
import React, { useEffect, useRef, useState } from 'react';
import { Activity, Users, Clipboard, Target, ChevronRight, X, Info } from 'lucide-react';
import { CONTACT_INFO, COLORS } from '../../constants';

interface StatItem {
  percentage: number;
  title: string;
  description: string;
  detailedContent: string;
  color: string;
  delay: number;
}

interface StatCardProps extends StatItem {
  mousePos: { x: number; y: number };
  onOpenModal: (item: StatItem) => void;
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
      const progressTimer = setTimeout(() => {
        setProgress(percentage);
      }, delay);

      let startTimestamp: number | null = null;
      const duration = 2000; 

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progressRatio = Math.min(elapsed / duration, 1);
        const easeOutProgress = progressRatio === 1 ? 1 : 1 - Math.pow(2, -10 * progressRatio);
        setDisplayValue(Math.floor(easeOutProgress * percentage));
        if (progressRatio < 1) window.requestAnimationFrame(step);
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
    <div className="relative w-44 h-44 mx-auto group-hover:scale-110 transition-transform duration-500">
      <svg className="transform -rotate-90 w-44 h-44 drop-shadow-lg">
        <circle cx="88" cy="88" r={radius} stroke="#f3f4f6" strokeWidth="12" fill="none" />
        <circle
          cx="88" cy="88" r={radius} stroke={color} strokeWidth="12" fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-[2000ms]"
          style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-black text-gray-800 tracking-tighter">
          {displayValue}<span className="text-3xl font-bold" style={{ color }}>%</span>
        </span>
      </div>
    </div>
  );
};

const StatCard: React.FC<StatCardProps> = ({ 
  percentage, title, description, detailedContent, color, delay, mousePos, onOpenModal 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 transform transition-all duration-1000 ease-out h-full ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div 
        className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] transition-all duration-300 p-12 h-full border border-gray-100 flex flex-col items-center group overflow-hidden relative cursor-pointer"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        onClick={() => onOpenModal({ percentage, title, description, detailedContent, color, delay })}
      >
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity -mr-16 -mt-16 rounded-full" style={{ backgroundColor: color }}></div>
        
        <div className="mb-10 relative z-10">
          <CircularProgress percentage={percentage} color={color} delay={delay + 300} isVisible={isVisible} />
        </div>
        
        <h3 className="text-3xl font-black text-gray-900 mb-6 text-center group-hover:text-blue-900 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-500 text-lg leading-relaxed text-center font-medium max-w-[300px] mb-8 group-hover:text-gray-700 transition-colors">
          {description}
        </p>

        <div className="mt-auto flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ color }}>
          Saber mais <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
};

export const ErgonomiaSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sectionVisible, setSectionVisible] = useState(false);
  const [selectedStat, setSelectedStat] = useState<StatItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 30;
      const y = (e.clientY - innerHeight / 2) / 30;
      setMousePos({ x, y });
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSectionVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      observer.disconnect();
    };
  }, []);

  const closeModal = () => {
    setSelectedStat(null);
    document.body.style.overflow = 'unset';
  };

  const openModal = (item: StatItem) => {
    setSelectedStat(item);
    document.body.style.overflow = 'hidden';
  };

  const stats: StatItem[] = [
    {
      percentage: 86,
      title: "Palestras",
      description: "Leve informação clara e objetiva aos seus colaboradores em datas estratégicas como SIPAT ou Semana da Saúde.",
      detailedContent: "Nossas palestras são dinâmicas e focadas na conscientização prática. Abordamos temas fundamentais como postura correta, ergonomia no cotidiano, prevenção de LER/DORT e saúde mental. Ideal para eventos corporativos que buscam engajar a equipe e reduzir queixas de desconforto muscular de forma leve e educativa.",
      color: "#f43f5e",
      delay: 0
    },
    {
      percentage: 100,
      title: "Treinamentos",
      description: "Capacitação técnica completa na admissão e reciclagens periódicas conforme exigência da NR-17.",
      detailedContent: "A conformidade com a NR-17 exige que os trabalhadores sejam capacitados para as suas funções sob a ótica ergonômica. Oferecemos treinamentos técnicos de integração, reciclagem para setores industriais e administrativos, e formação específica para comitês internos de ergonomia, garantindo segurança jurídica e operacional.",
      color: "#10b981",
      delay: 200
    },
    {
      percentage: 95,
      title: "Projetos",
      description: "Ergonomia de Concepção aplicada antes da criação do produto ou ambiente, garantindo o design ideal.",
      detailedContent: "A ergonomia de concepção é a forma mais inteligente de investir. Atuamos junto a arquitetos e engenheiros no planejamento de novos postos de trabalho, escolha técnica de mobiliário e layout industrial. Corrigir no papel é infinitamente mais barato do que remediar ambientes prontos, garantindo eficiência desde o primeiro dia.",
      color: "#fbbf24",
      delay: 400
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 lg:py-48 px-4 bg-gray-50 overflow-hidden"
    >
      {/* Interactive Background Elements */}
      <div 
        className="absolute top-[15%] -left-[5%] w-64 h-64 opacity-20 pointer-events-none transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
      >
        <svg viewBox="0 0 100 100" fill="#f43f5e"><path d="M100,20 C60,20 20,60 20,100 L0,100 C0,40 40,0 100,0 Z" /></svg>
      </div>
      
      <div 
        className="absolute bottom-[10%] -right-[5%] w-80 h-80 opacity-15 pointer-events-none transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
      >
        <svg viewBox="0 0 100 100" fill="#1e3a8a"><path d="M0,80 C40,80 80,40 80,0 L100,0 C100,60 60,100 0,100 Z" /></svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="grid grid-cols-6 gap-20 transform rotate-12 scale-150">
          {Array.from({ length: 30 }).map((_, i) => (
            <Activity key={i} size={100} className="text-blue-900" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-24 transform transition-all duration-1000 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <span className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-[0.3em] mb-8 shadow-sm">
            Diferencial ErghoPrev
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
            Serviços além da análise
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-rose-500 to-amber-500">ergonômica do trabalho!</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
              Ao realizar conosco a <strong>Análise Ergonômica do Trabalho</strong>, sua empresa terá os riscos mapeados para o <strong>GRO e PGR</strong>, garantindo total conformidade e produtividade.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} mousePos={mousePos} onOpenModal={openModal} />
          ))}
        </div>

        {/* Floating Interacting Icons Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 transform transition-all duration-1000 delay-500 ${
          sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {[
            { icon: Activity, color: "text-rose-500", label: "Gestão", bg: "bg-rose-50", speed: 2 },
            { icon: Users, color: "text-emerald-500", label: "Engajamento", bg: "bg-emerald-50", speed: -1.5 },
            { icon: Clipboard, color: "text-amber-500", label: "Metodologia", bg: "bg-amber-50", speed: 2.5 },
            { icon: Target, color: "text-blue-500", label: "Eficiência", bg: "bg-blue-50", speed: -2 }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group cursor-pointer transition-transform duration-300"
              style={{ transform: `translate(${mousePos.x * item.speed}px, ${mousePos.y * item.speed}px)` }}
            >
              <div className={`w-32 h-32 rounded-[3rem] ${item.bg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl transition-all duration-500 border border-transparent group-hover:border-white/50`}>
                <item.icon className={`w-14 h-14 ${item.color}`} />
              </div>
              <span className="mt-6 text-gray-800 font-black text-2xl tracking-tight transition-colors group-hover:text-blue-900">{item.label}</span>
              <div className="w-12 h-1 bg-gray-200 rounded-full mt-3 transition-all group-hover:w-20 group-hover:bg-blue-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Informativa */}
      {selectedStat && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-xl" onClick={closeModal}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-[3.5rem] shadow-2xl overflow-hidden animate-scale-in border-4 border-white">
            <button 
              onClick={closeModal} 
              className="absolute top-8 right-8 p-4 rounded-full bg-gray-100 text-gray-500 hover:bg-rose-500 hover:text-white transition-all z-20"
            >
              <X size={28} />
            </button>
            <div className="p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: selectedStat.color }}>
                  <Info className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight">
                    {selectedStat.title}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Excelência ErghoPrev</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-12">
                <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed font-medium">
                  {selectedStat.detailedContent}
                </p>
                <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100 flex items-center gap-6">
                  <div className="text-4xl font-black" style={{ color: selectedStat.color }}>{selectedStat.percentage}%</div>
                  <div className="text-blue-900 font-bold leading-tight">Métrica de eficiência e satisfação comprovada em projetos similares.</div>
                </div>
              </div>

              <a 
                href={CONTACT_INFO.whatsappBase + encodeURIComponent(` Gostaria de saber mais sobre: ${selectedStat.title} (Diferencial Ergonomia)`)}
                target="_blank" rel="noopener noreferrer"
                className="block w-full py-6 text-white font-black text-2xl rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 text-center transition-all flex items-center justify-center gap-4"
                style={{ backgroundColor: COLORS.primary }}
              >
                <i className="fab fa-whatsapp"></i> Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
};

export default ErgonomiaSection;
