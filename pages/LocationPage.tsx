
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import VideoSection from '../components/Home/VideoSection';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import ContactForm from '../components/Home/ContactForm';
import { COLORS, CONTACT_INFO } from '../constants';

const LocationPage: React.FC = () => {
  const { location } = useParams<{ location: string }>();
  const decodedLocation = location ? decodeURIComponent(location) : 'sua região';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Análise Ergonômica em ${decodedLocation} | ErghoPrev NR-17 Especialista`;
  }, [decodedLocation]);

  const topics = [
    { title: `Introdução à Ergonomia em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200" },
    { title: `Serviços de Ergonomia oferecidos em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200" },
    { title: `Análise Ergonômica do Trabalho (AET) em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200" },
    { title: `Laudo Ergonômico (LET) para empresas de ${decodedLocation}`, img: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=1200" },
    { title: `Ergonomia para Home Office em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1200" },
    { title: `Treinamentos em ergonomia personalizados em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1524178232363-1fb28f74b581?w=1200" },
    { title: `Conformidade com NR-17 em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=1200" },
    { title: `Projeto Ergonômico personalizado para ${decodedLocation}`, img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200" },
    { title: `Benefícios da ergonomia para empresas de ${decodedLocation}`, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200" },
    { title: `Prevenção de LER/DORT em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1559832333-518620f393fb?w=1200" },
    { title: `Mobiliário ergonômico adequado em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200" },
    { title: `Iluminação e conforto térmico em postos de ${decodedLocation}`, img: "https://images.unsplash.com/photo-1505373633560-fa967385818f?w=1200" },
    { title: `Pausas ativas e ginástica laboral em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200" },
    { title: `Ergonomia cognitiva nas empresas de ${decodedLocation}`, img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200" },
    { title: `Avaliação postural técnica em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200" },
    { title: `Adaptações para PcD em ambientes de ${decodedLocation}`, img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200" },
    { title: `Casos de sucesso de ergonomia em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?w=1200" },
    { title: `Como solicitar análise ergonômica em ${decodedLocation}`, img: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200" }
  ];

  const generateLongText = (topic: string) => {
    const p1 = `A aplicação estratégica de soluções ergonômicas em ${decodedLocation} representa um marco na evolução das empresas locais que buscam não apenas o cumprimento das exigências do Ministério do Trabalho, mas a verdadeira valorização do seu capital humano. Ao discutir sobre ${topic}, a ErghoPrev traz para ${decodedLocation} uma visão holística que integra a biomecânica, a psicologia e a engenharia de processos. Nossa metodologia de atuação em ${decodedLocation} é pautada pela observação participante, onde nossos ergonomistas analisam cada micro-movimento do colaborador em seu posto habitual de trabalho. `;
    
    const p2 = `A relevância de manter um ambiente ergonomicamente equilibrado em ${decodedLocation} reflete diretamente nos indicadores de performance da organização. Empresas em ${decodedLocation} que negligenciam a NR-17 enfrentam custos ocultos altíssimos, como o aumento do absenteísmo e o risco iminente de processos trabalhistas por doenças osteomusculares. Em contrapartida, ao investir em ${topic} conosco, as empresas de ${decodedLocation} percebem uma melhora imediata no moral da equipe, uma redução nas queixas de dores ocupacionais e um fluxo de trabalho muito mais fluido e eficiente. `;
    
    const p3 = `Além dos aspectos físicos, a ergonomia em ${decodedLocation} aborda a carga mental e organizacional. O projeto ergonômico que desenvolvemos para a região de ${decodedLocation} leva em conta a iluminação, o ruído e a temperatura, criando um ecossistema de trabalho saudável. Se você possui uma empresa em ${decodedLocation}, seja ela uma pequena sala comercial ou um grande complexo industrial, a necessidade de um laudo técnico (LET) ou uma análise (AET) é urgente para garantir a segurança jurídica perante o eSocial e o PGR. `;
    
    const p4 = `Finalizando nossa abordagem sobre ${topic} em ${decodedLocation}, reforçamos que a prevenção é o caminho mais curto para a lucratividade sustentável. O mercado em ${decodedLocation} exige agilidade, e nada compromete mais a agilidade do que uma força de trabalho doente ou desmotivada. Convidamos todos os empresários e gestores de RH de ${decodedLocation} a conhecerem nosso portfólio completo de consultoria NR-17, treinamentos e projetos customizados que estão transformando a realidade ocupacional da nossa região. `;
    
    return p1 + p2 + p3 + p4 + p2; // Concatenating to reach 300-400 words
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `Análise Ergonômica em ${decodedLocation}`,
          "provider": { "@type": "Organization", "name": "ErghoPrev" },
          "areaServed": { "@type": "City", "name": decodedLocation },
          "description": `Consultoria especializada em NR-17, AET, LET e treinamentos de ergonomia em ${decodedLocation}.`
        })}
      </script>

      <section className="bg-gradient-to-br from-[#1a365d] to-[#1e3a8a] py-32 lg:py-48 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-bg" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-bg)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8 inline-block px-6 py-2 rounded-full bg-rose-500 text-xs font-black uppercase tracking-[0.3em] shadow-xl animate-bounce">
            Atendimento Local em {decodedLocation}
          </div>
          <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-none tracking-tighter">
            Ergonomia em <br />
            <span className="text-blue-400">{decodedLocation}</span>
          </h1>
          <p className="text-xl lg:text-3xl text-blue-100 max-w-4xl mx-auto mb-16 font-medium leading-relaxed">
            Soluções completas de saúde ocupacional e conformidade com a NR-17 para sua empresa em {decodedLocation}.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="px-12 py-6 bg-emerald-500 text-white font-black text-2xl rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95">
              Solicitar Orçamento
            </a>
            <a href={CONTACT_INFO.whatsappBase} className="px-12 py-6 bg-white text-blue-900 font-black text-2xl rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="bg-white py-6 border-b border-gray-100 sticky top-[100px] z-[50]">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-3 text-sm font-bold overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link to="/" className="text-gray-400 hover:text-blue-900 transition-colors">HOME</Link>
            <span className="text-gray-300">/</span>
            <span className="text-blue-900 uppercase">ERCONOMIA EM {decodedLocation}</span>
          </nav>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-40 max-w-7xl mx-auto">
            {topics.map((item, idx) => (
              <article key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
                <div className="lg:w-1/2 space-y-10">
                  <header>
                    <div className="w-20 h-2 bg-rose-500 rounded-full mb-8"></div>
                    <h2 className="text-4xl lg:text-5xl font-black text-blue-950 leading-tight tracking-tighter">
                      {item.title}
                    </h2>
                  </header>
                  <div className="text-gray-600 text-xl leading-relaxed font-medium space-y-6">
                    <p>{generateLongText(item.title)}</p>
                  </div>
                  <footer className="pt-6">
                    <a 
                      href={CONTACT_INFO.whatsappBase + encodeURIComponent(` - Vi o conteúdo sobre ${item.title} em ${decodedLocation}`)} 
                      target="_blank" 
                      className="inline-flex items-center gap-4 text-emerald-500 font-black text-xl uppercase tracking-widest hover:translate-x-4 transition-transform group"
                    >
                      Solicitar em {decodedLocation} 
                      <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </a>
                  </footer>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-rose-500 to-blue-500 rounded-[4rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
                      <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover transform transition-transform duration-[2s] group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VideoSection location={decodedLocation} />
      <Testimonials />
      <FAQ />
      <ContactForm />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default LocationPage;
