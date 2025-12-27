
import { Service, FAQItem, GallerySlide, TimelineStep } from './types';

export const COLORS = {
  primary: '#1e3a8a',
  secondary: '#93c5fd', // Light blue from screenshot
  darkBlue: '#1a365d',
  accent: '#f43f5e',
  warning: '#fbbf24',
  success: '#10b981',
  bgLight: '#f0f9ff'
};

export const CONTACT_INFO = {
  phone: '(41) 99780-1951',
  phoneRaw: '5541997801951',
  email: 'contato@erghoprev.com.br',
  whatsappBase: 'https://api.whatsapp.com/send?phone=5541997801951&text=Ol%C3%A1%20encontrei%20seu%20site%3A%20*%20Erghoprev*%20no%20Google%20gostaria%20de%20saber%20*sobre%3A*'
};

export const TYPEWRITER_PHRASES = [
  "Análises Ergonômicas Profissionais",
  "Proteja a Saúde da sua Equipe",
  "Aumente a Produtividade com Ergonomia",
  "Soluções Ergonômicas Personalizadas",
  "Reduza Afastamentos por LER/DORT",
  "Home Office Ergonômico e Seguro",
  "Empresas Mais Saudáveis e Eficientes"
];

export const SERVICES: Service[] = [
  { 
    id: 1, 
    title: "Análise Ergonômica do Trabalho - AET", 
    description: "Avaliação técnica completa exigida pela NR-17.",
    detailedContent: "A AET é um estudo profundo das condições de trabalho que visa adaptar o ambiente às características psicofisiológicas dos colaboradores. Nossa análise contempla levantamento de carga, postura, repetitividade e fatores organizacionais, resultando em um plano de ação robusto para mitigação de riscos e conformidade legal total perante o Ministério do Trabalho."
  },
  { 
    id: 2, 
    title: "Laudo Ergonômico do Trabalho - LET", 
    description: "Documentação oficial com diagnósticos e recomendações.",
    detailedContent: "O LET é o documento pericial que consolida a análise técnica. Essencial para defesas trabalhistas e para o eSocial, ele fornece o embasamento legal necessário para comprovar que a empresa adota medidas preventivas eficazes. Nossos laudos são assinados por especialistas com vasta experiência em perícias judiciais."
  },
  { 
    id: 3, 
    title: "Treinamentos", 
    description: "Capacitação para posturas e ajustes de mobiliário.",
    detailedContent: "Capacitamos sua equipe através de workshops práticos e teóricos. Abordamos desde a regulação correta da cadeira até técnicas de levantamento de peso e pausas ativas. O treinamento é fundamental para criar uma cultura de prevenção onde o colaborador se torna protagonista da própria saúde ocupacional."
  },
  { 
    id: 4, 
    title: "NR-17", 
    description: "Consultoria para conformidade total com a norma.",
    detailedContent: "Nossa consultoria especializada garante que sua empresa atenda 100% dos requisitos da Norma Regulamentadora 17. Realizamos auditorias internas, revisamos o PGR (Programa de Gerenciamento de Riscos) e orientamos sobre as adaptações necessárias em mobiliário, equipamentos e organização do trabalho."
  },
  { 
    id: 5, 
    title: "Projeto Ergonômico", 
    description: "Planejamento de postos de trabalho eficientes.",
    detailedContent: "Atuamos na fase de concepção de novos escritórios ou linhas de produção. O projeto ergonômico evita erros de layout que custam caro para corrigir no futuro. Analisamos antropometria, iluminação, ruído e fluxo de processos para criar ambientes que estimulam a alta performance e o bem-estar."
  },
  { 
    id: 6, 
    title: "Análise Ergonômica", 
    description: "Vistoria e orientação rápida de postos.",
    detailedContent: "Indicada para avaliações pontuais ou verificação de novos mobiliários. É uma solução ágil para empresas que precisam de orientação técnica imediata sobre ajustes individuais em postos de trabalho, garantindo conforto imediato e prevenção de dores agudas."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "O que é análise ergonômica do trabalho (AET)?",
    answer: "A Análise Ergonômica do Trabalho (AET) é um estudo detalhado das condições de trabalho que visa identificar e corrigir situações que possam comprometer a saúde e segurança dos trabalhadores. É exigida pela NR-17."
  },
  {
    question: "Qual a diferença entre AET e LET?",
    answer: "A AET é o processo de investigação e levantamento de dados no campo, enquanto o LET (Laudo Ergonômico do Trabalho) é o documento técnico final que registra os resultados, diagnósticos e as recomendações corretivas."
  },
  {
    question: "Minha empresa precisa de análise ergonômica?",
    answer: "Sim! De acordo com a atualização da NR-01 e NR-17, todas as empresas que possuem riscos ergonômicos em suas atividades devem realizar a análise para alimentar o Inventário de Riscos do PGR."
  },
  {
    question: "Fazem análise ergonômica para home office?",
    answer: "Sim! Com o crescimento do trabalho remoto, oferecemos consultoria específica para home office, garantindo que o colaborador tenha as mesmas condições de saúde e segurança que teria na sede da empresa."
  }
];

export const GALLERY_SLIDES: GallerySlide[] = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    title: "Escritórios Inteligentes",
    description: "Ajustamos cada detalhe do ambiente corporativo para maximizar o foco e reduzir o cansaço visual e físico.",
    ctaText: "Agendar Vistoria"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    title: "Ergonomia Industrial",
    description: "Soluções robustas para linhas de produção, focadas na redução de esforço físico e prevenção de lesões por repetição.",
    ctaText: "Solicitar Proposta"
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600",
    title: "Cultura de Prevenção",
    description: "Treinamentos dinâmicos que engajam a equipe e transformam a saúde ocupacional em um valor da empresa.",
    ctaText: "Saiba Mais"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    label: "Passo 1",
    title: "Mapeamento de Riscos",
    description: "Identificamos gargalos ergonômicos em cada setor da sua empresa através de vistorias técnicas."
  },
  {
    label: "Nossa Opção",
    title: "Plano de Intervenção",
    description: "Desenvolvemos recomendações práticas e viáveis para adequar os postos às normas vigentes."
  },
  {
    label: "Nova Visão",
    title: "Monitoramento Contínuo",
    description: "Acompanhamos a implementação e os resultados de saúde, garantindo a melhoria contínua dos indicadores."
  }
];

export const TESTIMONIALS = [
  {
    quote: "A análise ergonômica da ErghoPrev transformou nossa produtividade e reduziu drasticamente as queixas de dores lombares.",
    name: "Carlos Silva",
    company: "TecnoLogística S.A.",
    rating: 5
  },
  {
    quote: "Equipe extremamente profissional e atenciosa com as normas NR-17. O laudo técnico foi fundamental para nossa conformidade.",
    name: "Fernanda Oliveira",
    company: "Varejo Express",
    rating: 5
  },
  {
    quote: "Os treinamentos são dinâmicos e realmente mudaram a postura de nossos colaboradores no dia a dia. Recomendo muito!",
    name: "Ricardo Santos",
    company: "Indústria Metalúrgica Sul",
    rating: 5
  }
];

export const BAIRROS = [
  "Batel", "Centro", "Bigorrilho", "Água Verde", "Portão", "Santa Felicidade", 
  "Cabral", "Juvevê", "Mercês", "Rebouças", "Prado Velho", "Hauer"
];
