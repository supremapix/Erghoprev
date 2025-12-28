
import { Service, FAQItem, GallerySlide, TimelineStep } from './types';

export const COLORS = {
  primary: '#1e3a8a',
  secondary: '#93c5fd',
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
  "Especialistas em Ergonomia",
  "Conformidade com a NR-17",
  "Saúde e Produtividade",
  "Gestão de Riscos Ocupacionais"
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "AET (Análise Ergonômica)",
    description: "Análise técnica detalhada dos postos de trabalho.",
    detailedContent: "A Análise Ergonômica do Trabalho (AET) é um documento obrigatório pela NR-17 que avalia as condições de trabalho, considerando aspectos biomecânicos, cognitivos e organizacionais para garantir a saúde do trabalhador.",
    icon: "clipboard-list"
  },
  {
    id: 2,
    title: "Laudo Ergonômico (LET)",
    description: "Laudo de conformidade técnica para fiscalizações.",
    detailedContent: "O Laudo Ergonômico é uma avaliação pontual que atesta se determinado equipamento ou posto de trabalho está em conformidade com as normas vigentes, essencial para defesas jurídicas e eSocial.",
    icon: "file-medical"
  },
  {
    id: 3,
    title: "Treinamentos NR-17",
    description: "Capacitação para equipes e gestores.",
    detailedContent: "Realizamos treinamentos personalizados sobre postura, ajustes de mobiliário e prevenção de doenças ocupacionais, focando na conscientização dos colaboradores e redução de queixas.",
    icon: "users"
  },
  {
    id: 4,
    title: "Projeto Ergonômico",
    description: "Design de postos e fluxos de trabalho.",
    detailedContent: "Atuamos na concepção de novos ambientes ou na reforma dos existentes, garantindo que o mobiliário e o layout favoreçam a eficiência e o bem-estar desde o início.",
    icon: "drafting-compass"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    label: "Passo 01",
    title: "Visita Técnica",
    description: "Realizamos uma visita inicial para entender a realidade da sua empresa e identificar os pontos críticos."
  },
  {
    label: "Passo 02",
    title: "Coleta de Dados",
    description: "Utilizamos ferramentas científicas para medir riscos e observar a rotina dos colaboradores."
  },
  {
    label: "Passo 03",
    title: "Análise e Relatório",
    description: "Processamos as informações e geramos laudos com planos de ação práticos e eficientes."
  },
  {
    label: "Passo 04",
    title: "Implementação",
    description: "Acompanhamos a execução das melhorias e realizamos os treinamentos necessários."
  }
];

export const GALLERY_SLIDES: GallerySlide[] = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    title: "Ambientes Corporativos",
    description: "Otimização de escritórios para máxima produtividade e conforto.",
    ctaText: "Ver Projetos"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    title: "Ergonomia Industrial",
    description: "Soluções para linhas de produção e logística.",
    ctaText: "Saiba Mais"
  },
  {
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1200",
    title: "Treinamentos",
    description: "Capacitação técnica in-company.",
    ctaText: "Agendar"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "O que é a NR-17?",
    answer: "A NR-17 é a Norma Regulamentadora que visa estabelecer parâmetros que permitam a adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores, de modo a proporcionar um máximo de conforto, segurança e desempenho eficiente."
  },
  {
    question: "Minha empresa precisa obrigatoriamente de AET?",
    answer: "Sim, todas as empresas que possuem empregados regidos pela CLT devem realizar a análise ergonômica, especialmente se houver riscos identificados no PGR (Programa de Gerenciamento de Riscos)."
  },
  {
    question: "Qual a diferença entre AET e Laudo Ergonômico?",
    answer: "A AET (Análise Ergonômica do Trabalho) é uma análise profunda da atividade e do contexto organizacional. O Laudo Ergonômico costuma ser mais pontual, focado em equipamentos ou condições físicas específicas."
  }
];

export const TESTIMONIALS = [
  {
    name: "Ricardo Silva",
    company: "Logística Transul",
    quote: "A ErghoPrev transformou nossa operação. Reduzimos o absenteísmo em 30% após a análise e os ajustes recomendados.",
    rating: 5
  },
  {
    name: "Ana Paula",
    company: "TechSolutions",
    quote: "Os treinamentos de home office foram fundamentais para manter nossa equipe produtiva e saudável durante a pandemia.",
    rating: 5
  },
  {
    name: "Marcos Oliveira",
    company: "Indústria Metalúrgica",
    quote: "Profissionais extremamente técnicos e comprometidos com a conformidade legal e o bem-estar real dos funcionários.",
    rating: 5
  }
];

export const BAIRROS = [
  "Água Verde", "Batel", "Bigorrilho", "Centro", "Centro Cívico", "Rebouças", "Santa Felicidade", "Portão", "Cabral", "Juvevê", "Mercês", "Boa Vista"
];

export const CIDADES_RMC = [
  "Curitiba", "São José dos Pinhais", "Pinhais", "Colombo", "Araucária", "Piraquara", "Fazenda Rio Grande", "Campo Largo", "Quatro Barras", "Campina Grande do Sul"
];

export const ASSETS = {
  solutionsMain: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  servicesSide: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  partners: {
    esocial: "https://via.placeholder.com/200x100?text=ESOCIAL",
    abergo: "https://via.placeholder.com/200x100?text=ABERGO",
    abnt: "https://via.placeholder.com/200x100?text=ABNT",
    crefito: "https://via.placeholder.com/200x100?text=CREFITO",
    iea: "https://via.placeholder.com/200x100?text=IEA"
  },
  topics: Array.from({ length: 18 }, (_, i) => `https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&q=60&w=800`)
};
