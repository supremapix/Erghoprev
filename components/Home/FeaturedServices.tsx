
import React from 'react';
import { ClipboardCheck, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { COLORS } from '../../constants';

const FeaturedServices: React.FC = () => {
  const features = [
    {
      icon: ClipboardCheck,
      title: "Análise Ergonômica (AET)",
      description: "Mapeamento completo dos riscos ergonômicos conforme NR-17, garantindo segurança jurídica e saúde para sua equipe.",
      serviceValue: "Análise Ergonômica"
    },
    {
      icon: GraduationCap,
      title: "Treinamentos NR-17",
      description: "Capacitação técnica e conscientização postural para reduzir afastamentos e aumentar a produtividade.",
      serviceValue: "Treinamentos"
    },
    {
      icon: Users,
      title: "Consultoria Personalizada",
      description: "Soluções sob medida para mobiliário, laudos, comitês de ergonomia e gestão de riscos ocupacionais.",
      serviceValue: "Consultoria Personalizada"
    }
  ];

  const handleLearnMore = (serviceValue: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Dispara um evento customizado para o formulário ouvir
      const event = new CustomEvent('erghoprev:select-service', { detail: serviceValue });
      window.dispatchEvent(event);

      const offset = 100;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-widest mb-4">
            Soluções Essenciais
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
            Serviços em <span className="text-rose-500">Destaque</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                <feature.icon size={32} />
              </div>
              
              <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {feature.description}
              </p>

              <button 
                onClick={() => handleLearnMore(feature.serviceValue)}
                className="flex items-center gap-2 font-bold text-rose-500 group-hover:text-rose-600 transition-colors mt-auto"
              >
                Saiba Mais 
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
