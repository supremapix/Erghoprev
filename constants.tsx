
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
    title: "Análise Ergonômica do Trabalho - AET",
    description: "Análise técnica detalhada dos postos de trabalho conforme NR-17.",
    detailedContent: "A Análise Ergonômica do Trabalho (AET) é um documento obrigatório pela NR-17 que avalia as condições de trabalho, considerando aspectos biomecânicos, cognitivos e organizacionais para garantir a saúde do trabalhador e evitar passivos trabalhistas.",
    icon: "clipboard-list"
  },
  {
    id: 2,
    title: "Consultoria",
    description: "Assessoria especializada em ergonomia e saúde ocupacional.",
    detailedContent: "Nossa consultoria oferece suporte contínuo para empresas que desejam implementar uma cultura de ergonomia sólida, auxiliando na escolha de mobiliário, ajustes de processos e conformidade legal.",
    icon: "briefcase"
  },
  {
    id: 3,
    title: "Laudo Ergonômico",
    description: "Laudo de conformidade técnica para fiscalizações e perícias.",
    detailedContent: "O Laudo Ergonômico (LET) é uma avaliação técnica que atesta se determinado equipamento ou posto de trabalho está em conformidade com as normas, sendo crucial para defesas judiciais e perícias médicas.",
    icon: "file-medical"
  },
  {
    id: 4,
    title: "GRO/PGR",
    description: "Gestão de Riscos Ocupacionais e Programa de Gerenciamento de Riscos.",
    detailedContent: "Integramos a ergonomia ao seu inventário de riscos do GRO/PGR, garantindo que os riscos ergonômicos sejam devidamente mapeados e controlados conforme as novas exigências da NR-01.",
    icon: "shield-check"
  },
  {
    id: 5,
    title: "Palestras e Treinamentos",
    description: "Capacitação técnica e conscientização para colaboradores.",
    detailedContent: "Realizamos treinamentos e palestras dinâmicas sobre postura, ergonomia no home office e prevenção de LER/DORT, focando na mudança de comportamento e redução de queixas.",
    icon: "presentation"
  },
  {
    id: 6,
    title: "Projeto Ergonômico",
    description: "Design de postos e ambientes focado em eficiência humana.",
    detailedContent: "Atuamos na fase de concepção ou reforma de ambientes, aplicando a ergonomia de projeto para garantir que o layout e o mobiliário favoreçam a produtividade e o conforto desde o primeiro dia.",
    icon: "drafting-compass"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  { label: "Passo 01", title: "Visita Técnica", description: "Realizamos uma visita inicial para entender a realidade da sua empresa e identificar os pontos críticos." },
  { label: "Passo 02", title: "Coleta de Dados", description: "Utilizamos ferramentas científicas para medir riscos e observar a rotina dos colaboradores." },
  { label: "Passo 03", title: "Análise e Relatório", description: "Processamos as informações e geramos laudos com planos de ação práticos e eficientes." },
  { label: "Passo 04", title: "Implementação", description: "Acompanhamos a execução das melhorias e realizamos os treinamentos necessários." }
];

export const GALLERY_SLIDES: GallerySlide[] = [
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", title: "Ambientes Corporativos", description: "Otimização de escritórios para máxima produtividade e conforto.", ctaText: "Ver Projetos" },
  { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200", title: "Ergonomia Industrial", description: "Soluções para linhas de produção e logística.", ctaText: "Saiba Mais" },
  { image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1200", title: "Treinamentos", description: "Capacitação técnica in-company.", ctaText: "Agendar" }
];

export const FAQ_DATA: FAQItem[] = [
  { question: "O que é a NR-17?", answer: "A NR-17 é a Norma Regulamentadora que visa estabelecer parâmetros que permitam a adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores." },
  { question: "Minha empresa precisa obrigatoriamente de AET?", answer: "Sim, todas as empresas que possuem empregados regidos pela CLT devem realizar a análise ergonômica." }
];

export const TESTIMONIALS = [
  { name: "Ricardo Silva", company: "Logística Transul", quote: "A ErghoPrev transformou nossa operação. Reduzimos o absenteísmo em 30%.", rating: 5 },
  { name: "Ana Paula", company: "TechSolutions", quote: "Os treinamentos foram fundamentais para nossa produtividade.", rating: 5 },
  { name: "Marcos Oliveira", company: "Indústria Metalúrgica", quote: "Profissionais técnicos e comprometidos.", rating: 5 }
];

export const BAIRROS = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer", "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da XV", "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", "Cidade Industrial", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", "Uberaba de Cima", "Uberaba de Baixo", "São Braz Velho", "Vila Verde", "Vila Barigui", "Caiuá", "Xaxim Velho", "Fazendinha-Portão", "Campo Comprido Velho", "Bacacheri Velho", "Capão da Imbuia Velho", "Pinheirinho Velho", "Vila São Pedro", "Vila Osternack", "Conjunto Caiuá", "Conjunto Parigot de Souza", "Vila Reno", "Vila Audi"
];

export const CIDADES_RMC = [
  "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná", "Curitiba"
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
  topics: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573161158365-59f70b59c7b3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
  ]
};
