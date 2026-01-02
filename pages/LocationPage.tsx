
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import VideoSection from '../components/Home/VideoSection';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import ContactForm from '../components/Home/ContactForm';
import { CONTACT_INFO, ASSETS, BAIRROS } from '../constants';
import { MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import EnhancedSEO from '../components/Common/EnhancedSEO';

const LocationPage: React.FC = () => {
  const { location } = useParams<{ location: string }>();
  const decodedLocation = location ? decodeURIComponent(location) : 'Curitiba';
  const isBairro = useMemo(() => BAIRROS.includes(decodedLocation), [decodedLocation]);

  // SEO Data Construction
  const title = `Análise Ergonômica em ${decodedLocation} | Especialista NR-17 | ErghoPrev`;
  const description = `Consultoria especializada em Ergonomia (NR-17), AET e LET em ${decodedLocation}. Atendimento técnico para empresas em ${decodedLocation} focado em produtividade e eSocial. Garantia de conformidade técnica em Curitiba e Região Metropolitana.`;
  const canonicalUrl = `https://www.erghoprev.com.br/local/${encodeURIComponent(decodedLocation)}`;
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `ErghoPrev ${decodedLocation}`,
    "image": "https://www.erghoprev.com.br/logo-coreta.png",
    "telephone": "+55-41-99780-1951",
    "email": "contato@erghoprev.com.br",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": isBairro ? "Curitiba" : decodedLocation,
      "addressRegion": "PR",
      "addressCountry": "BR",
      "streetAddress": isBairro ? `Atendimento em ${decodedLocation}` : undefined
    },
    "url": canonicalUrl,
    "description": description,
    "areaServed": {
      "@type": "Place",
      "name": decodedLocation
    },
    "priceRange": "$$"
  };

  const topics = [
    { title: `Ergonomia NR-17 em ${decodedLocation}`, img: ASSETS.topics[0] },
    { title: `Análise Ergonômica do Trabalho em ${decodedLocation}`, img: ASSETS.topics[1] },
    { title: `Laudo Ergonômico (LET) para empresas de ${decodedLocation}`, img: ASSETS.topics[2] },
    { title: `Treinamento de Postura e Ergonomia em ${decodedLocation}`, img: ASSETS.topics[3] },
    { title: `Ginástica Laboral e Pausas Ativas em ${decodedLocation}`, img: ASSETS.topics[4] },
    { title: `Gestão de Riscos Ocupacionais (GRO) em ${decodedLocation}`, img: ASSETS.topics[5] },
    { title: `Ergonomia para o eSocial em ${decodedLocation}`, img: ASSETS.topics[6] },
    { title: `Consultoria em Mobiliário Ergonômico em ${decodedLocation}`, img: ASSETS.topics[7] },
    { title: `Adaptações de Postos de Trabalho em ${decodedLocation}`, img: ASSETS.topics[8] },
    { title: `Saúde e Bem-estar no trabalho em ${decodedLocation}`, img: ASSETS.topics[9] },
    { title: `Prevenção de LER/DORT nas empresas de ${decodedLocation}`, img: ASSETS.topics[10] },
    { title: `Avaliação de Iluminação e Conforto em ${decodedLocation}`, img: ASSETS.topics[11] },
    { title: `Ergonomia Cognitiva e Carga Mental em ${decodedLocation}`, img: ASSETS.topics[12] },
    { title: `Projeto Ergonômico de Concepção em ${decodedLocation}`, img: ASSETS.topics[13] },
    { title: `Auditoria NR-17 para indústrias de ${decodedLocation}`, img: ASSETS.topics[14] },
    { title: `Adequação de Home Office em ${decodedLocation}`, img: ASSETS.topics[15] },
    { title: `Fiscalização do Trabalho e Ergonomia em ${decodedLocation}`, img: ASSETS.topics[16] },
    { title: `Melhores Práticas Ergonômicas em ${decodedLocation}`, img: ASSETS.topics[17] }
  ];

  const generateLongText = (topic: string) => {
    const geoContext = isBairro ? `o bairro ${decodedLocation} em Curitiba` : `a cidade de ${decodedLocation} na Região Metropolitana de Curitiba (RMC)`;
    
    const introduction = `A busca por excelência em ${topic} em ${geoContext} tem se tornado uma prioridade estratégica para gestores conscientes que visam não apenas o cumprimento legal, mas a performance humana máxima. A ErghoPrev compreende que em cada ponto de ${decodedLocation}, as dinâmicas industriais e corporativas possuem nuances específicas que exigem uma consultoria de ergonomia verdadeiramente personalizada. Ao contratar o serviço de ${topic}, sua organização em ${decodedLocation} recebe um acompanhamento técnico de ponta, pautado pelas mais recentes atualizações da NR-17 e metodologias científicas de vanguarda. `;
    
    const analysisSection = `A nossa abordagem para ${topic} em ${decodedLocation} começa com uma imersão profunda na realidade operacional. Não entregamos apenas documentos frios; entregamos diagnósticos que transformam o dia a dia. Em ${decodedLocation}, observamos que muitas queixas de saúde podem ser resolvidas com ajustes precisos de layout e mobiliário, o que é o coração do nosso trabalho com ${topic}. O diferencial da ErghoPrev em ${decodedLocation} é a capacidade de traduzir termos técnicos complexos em planos de ação práticos, fáceis de implementar e com alto impacto no bem-estar coletivo. Entender a biomecânica aplicada ao setor produtivo de ${decodedLocation} nos permite neutralizar riscos antes mesmo que eles se tornem passivos trabalhistas ou gerem afastamentos por LER/DORT. `;
    
    const complianceSection = `No cenário atual do eSocial e da nova redação da NR-01, o serviço de ${topic} em ${decodedLocation} é um pilar fundamental da Gestão de Riscos Ocupacionais (GRO). As empresas sediadas em ${decodedLocation} que negligenciam a ergonomia básica enfrentam multas pesadas e custos invisíveis com a rotatividade de pessoal. Por outro lado, aquelas que investem em ${topic} conosco percebem um aumento imediato na motivação da equipe. A ErghoPrev atua em ${decodedLocation} como um parceiro estratégico, auxiliando na escolha de cadeiras ergonômicas, suportes de monitor e na organização temporal do trabalho, garantindo que o seu negócio em ${geoContext} esteja sempre à frente da concorrência e em total conformidade com os auditores fiscais do trabalho. `;
    
    const futureVision = `Olhando para o futuro de ${decodedLocation}, a ergonomia será cada vez mais integrada à sustentabilidade corporativa. O serviço de ${topic} que oferecemos hoje em ${decodedLocation} prepara o terreno para um ambiente de trabalho resiliente e adaptável. Seja você uma pequena empresa em crescimento ou uma grande indústria consolidada em ${decodedLocation}, a necessidade de ${topic} é universal. Convidamos você a descobrir como a ErghoPrev pode elevar o patamar da sua empresa através de uma visão humanizada e técnica da ergonomia. Agende uma visita técnica em ${decodedLocation} e comprove por que somos a referência número um em soluções ergonômicas para toda Curitiba e região. Nosso compromisso é com a vida e com a produtividade do seu time em ${decodedLocation}. `;
    
    const conclusion = `Finalizando, é importante ressaltar que ${topic} não é um gasto, mas o investimento mais inteligente que uma empresa de ${decodedLocation} pode fazer. Ao reduzir a fadiga e o desconforto, estamos diretamente impulsionando os lucros e a longevidade da sua operação em ${geoContext}. Entre em contato agora e garanta a melhor consultoria em ${topic} disponível no mercado de ${decodedLocation}. `;

    return introduction + analysisSection + complianceSection + futureVision + conclusion;
  };

  return (
    <div className="flex flex-col">
      <EnhancedSEO 
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        keywords={`ergonomia ${decodedLocation}, nr17, analise ergonomica ${decodedLocation}, aet, laudo`}
        schema={localBusinessSchema}
      />

      <section className="bg-[#0f172a] py-32 lg:py-48 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ASSETS.topics[1]} className="w-full h-full object-cover blur-sm" alt="Fundo Decorativo" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <nav className="flex justify-center gap-2 text-blue-400 text-sm font-black uppercase tracking-widest mb-10">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">{decodedLocation}</span>
          </nav>
          <span className="inline-block px-8 py-2 rounded-full bg-rose-500 text-white text-xs font-black uppercase tracking-[0.3em] mb-8 animate-pulse shadow-lg">
            Consultoria Local em {decodedLocation}
          </span>
          <h1 className="text-4xl lg:text-8xl font-black mb-10 leading-tight tracking-tighter">
            Especialista em Ergonomia <br />
            e NR-17 em <span className="text-blue-400 underline decoration-rose-500 decoration-8">{decodedLocation}</span>
          </h1>
          <p className="text-xl lg:text-3xl text-blue-100 max-w-5xl mx-auto mb-16 font-medium leading-relaxed">
            Sua empresa em {decodedLocation} livre de riscos ergonômicos. Atendimento presencial com quem entende a realidade local de Curitiba e região.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={CONTACT_INFO.whatsappBase} className="group relative overflow-hidden px-14 py-6 bg-emerald-500 text-white font-black text-2xl rounded-3xl shadow-2xl hover:bg-emerald-600 transition-all hover:-translate-y-2 flex items-center gap-4">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] skew-x-[-25deg] group-hover:animate-[glint_1.5s_ease-in-out_infinite]"></div>
              <i className="fab fa-whatsapp"></i> Orçamento em {decodedLocation}
            </a>
          </div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-10 -right-20 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-40">
            {topics.map((item, idx) => (
              <React.Fragment key={idx}>
                <article className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}>
                  <div className="lg:w-1/2 space-y-8">
                    <div className="inline-flex items-center gap-4">
                      <span className="w-16 h-1 bg-rose-500 rounded-full"></span>
                      <span className="text-rose-500 font-black text-sm uppercase tracking-widest">Autoridade em {decodedLocation}</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-[#1e3a8a] leading-none tracking-tighter">
                      {item.title}
                    </h2>
                    <div className="text-gray-600 text-xl leading-relaxed space-y-6 font-medium">
                      <p>{generateLongText(item.title)}</p>
                    </div>
                    <div className="pt-6">
                      <a 
                        href={CONTACT_INFO.whatsappBase + encodeURIComponent(` sobre ${item.title} em ${decodedLocation}`)}
                        className="inline-flex items-center gap-4 bg-blue-50 px-8 py-4 rounded-2xl text-blue-900 font-black text-xl hover:bg-blue-900 hover:text-white transition-all group"
                      >
                        Agendar Diagnóstico em {decodedLocation} 
                        <MessageSquare className="group-hover:rotate-12 transition-transform" />
                      </a>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-rose-100 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      <div className="relative bg-white rounded-[3.5rem] p-4 shadow-2xl overflow-hidden border border-gray-100">
                        <img 
                          src={`${item.img}`} 
                          alt={`Serviço de ${item.title} em ${decodedLocation}`} 
                          className="w-full aspect-[4/3] object-cover rounded-[3rem] transform group-hover:scale-110 transition-transform duration-1000"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </article>
                
                {/* CTA Intermediário Persuasivo a cada 3 tópicos */}
                {(idx + 1) % 3 === 0 && (
                  <div className="bg-blue-900 rounded-[4rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-500">
                    <div className="relative z-10">
                      <Zap className="mx-auto mb-8 text-amber-400" size={64} fill="currentColor" />
                      <h3 className="text-3xl lg:text-5xl font-black mb-8 tracking-tighter">
                        Pare de adiar a segurança da sua empresa em {decodedLocation}!
                      </h3>
                      <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
                        A ErghoPrev já auxiliou dezenas de empresas em {decodedLocation} a reduzir custos operacionais e evitar processos trabalhistas. Seja a próxima.
                      </p>
                      <a 
                        href={CONTACT_INFO.whatsappBase}
                        className="inline-block px-12 py-6 bg-rose-500 hover:bg-rose-600 text-white font-black text-2xl rounded-3xl transition-all hover:scale-105 active:scale-95 shadow-xl"
                      >
                        Quero Regularizar Minha Empresa
                      </a>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <VideoSection location={decodedLocation} />
      <Testimonials />
      <FAQ />
      
      <section className="py-24 bg-gradient-to-br from-blue-950 to-black text-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ShieldCheck className="mx-auto mb-8 text-emerald-400" size={80} />
          <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-tight">
            Consultoria 100% Conforme <br /> para {decodedLocation}
          </h2>
          <p className="text-xl lg:text-3xl text-blue-200 max-w-4xl mx-auto mb-16 font-medium">
            Não arrisque o futuro do seu negócio. Tenha a ErghoPrev ao seu lado para garantir que cada metro quadrado da sua empresa em {decodedLocation} respire saúde e eficiência.
          </p>
          <a 
            href="#contact" 
            className="group relative overflow-hidden inline-block px-16 py-8 bg-white text-blue-950 font-black text-2xl lg:text-3xl rounded-3xl hover:bg-rose-500 hover:text-white transition-all shadow-[0_30px_60px_rgba(0,0,0,0.5)] active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[200%] skew-x-[-25deg] group-hover:animate-[glint_1.5s_ease-in-out_infinite]"></div>
            Solicitar Proposta Urgente
          </a>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default LocationPage;
