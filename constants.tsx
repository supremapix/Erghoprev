
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

export const ASSETS = {
  logo: "https://www.erghoprev.com.br/assets/images/erghoprev-analises-ergonomicas-do-trabalho-em-curitiba-296x121.png",
  servicesSide: "https://www.erghoprev.com.br/assets/images/analises-ergonimicas-do-trabalho-erghoprev-524x684.png",
  solutionsMain: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
  gallery: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1600"
  ],
  partners: {
    esocial: "https://www.gov.br/esocial/pt-br/centrais-de-conteudo/imagens/esocial_logo_pos_cor.png",
    abergo: "https://www.abergo.org.br/assets/images/logo_abergo_v2.png",
    abnt: "https://upload.wikimedia.org/wikipedia/pt/2/2a/Logotipo_da_ABNT.png",
    crefito: "https://crefito8.org.br/wp-content/uploads/2021/03/logo-crefito-8.png",
    iea: "https://iea.cc/wp-content/uploads/2019/04/IEA_logo_small.png"
  },
  topics: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
    "https://images.unsplash.com/photo-1554224155-1696413565d3?w=1200",
    "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1200",
    "https://images.unsplash.com/photo-1524178232363-1fb28f74b581?w=1200",
    "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=1200",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    "https://images.unsplash.com/photo-1559832333-518620f393fb?w=1200",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
    "https://images.unsplash.com/photo-1505373633560-fa967385818f?w=1200",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200",
    "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?w=1200",
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200"
  ]
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

export const BAIRROS = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer", "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú", "Alto da Glória", "Alto Boqueirão", "Alto da XV", "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", "Cidade Industrial", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", "Uberaba de Cima", "Uberaba de Baixo", "São Braz Velho", "Vila Verde", "Vila Barigui", "Caiuá", "Xaxim Velho", "Fazendinha-Portão", "Campo Comprido Velho", "Bacacheri Velho", "Capão da Imbuia Velho", "Pinheirinho Velho", "Vila São Pedro", "Vila Osternack", "Conjunto Caiuá", "Conjunto Parigot de Souza", "Vila Reno", "Vila Audi"
];

export const CIDADES_RMC = [
  "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná", "Curitiba"
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "O que é análise ergonômica do trabalho (AET)?",
    answer: "A Análise Ergonômica do Trabalho (AET) é um estudo detalhado das condições de trabalho que visa identificar e corrigir situações que possam comprometer a saúde e segurança dos trabalhadores. É exigida pela NR-17 e essencial para prevenir doenças ocupacionais."
  },
  {
    question: "Qual a diferença entre AET e LET?",
    answer: "A AET (Análise Ergonômica do Trabalho) é o processo de investigação e levantamento de dados no campo, enquanto o LET (Laudo Ergonômico do Trabalho) é o documento técnico final que registra os resultados, diagnósticos e as recomendações corretivas."
  },
  {
    question: "Minha empresa precisa de análise ergonômica?",
    answer: "Sim! De acordo com a atualização da NR-01 e NR-17, todas as empresas que possuem riscos ergonômicos em suas atividades devem realizar a análise para alimentar o Inventário de Riscos do PGR e evitar multas e processos."
  },
  {
    question: "Fazem análise ergonômica para home office?",
    answer: "Sim! Com o crescimento do trabalho remoto, oferecemos consultoria específica para home office, garantindo que o colaborador tenha as mesmas condições de saúde e segurança que teria na sede da empresa, prevenindo LER/DORT."
  },
  {
    question: "O que é NR-17 e por que devo cumprir?",
    answer: "A NR-17 é a Norma Regulamentadora que trata da ergonomia. Seu cumprimento é obrigatório por lei (CLT) e visa estabelecer parâmetros que permitam a adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores."
  },
  {
    question: "Quanto tempo leva uma análise ergonômica?",
    answer: "O prazo varia conforme o porte da empresa e número de postos. Geralmente, uma análise completa para pequenas e médias empresas leva entre 1 a 3 semanas entre a vistoria e a entrega do laudo técnico."
  },
  {
    question: "Quais os benefícios da ergonomia para minha empresa?",
    answer: "Redução drástica de afastamentos, aumento da produtividade, melhora no clima organizacional, conformidade legal total, redução de custos com saúde e prevenção de passivos trabalhistas."
  },
  {
    question: "Vocês oferecem treinamentos de postura?",
    answer: "Sim! Oferecemos workshops dinâmicos sobre ajuste de mobiliário, pausas ativas, ginástica laboral e conscientização postural para equipes administrativas e operacionais."
  },
  {
    question: "O que é ergonomia de concepção?",
    answer: "É o projeto ergonômico realizado antes da construção de um posto ou produto, garantindo que o ambiente nasça 100% adequado às necessidades do usuário, evitando reformas custosas no futuro."
  },
  {
    question: "Qual o valor de uma consultoria ergonômica?",
    answer: "O investimento é calculado com base na complexidade e número de funcionários. Entre em contato para um orçamento personalizado que cabe no orçamento da sua empresa."
  }
];

export const GALLERY_SLIDES: GallerySlide[] = [
  {
    image: ASSETS.gallery[0],
    title: "Escritórios Inteligentes",
    description: "Ajustamos cada detalhe do ambiente corporativo para maximizar o foco e reduzir o cansaço visual e físico através de mobiliário e iluminação de ponta.",
    ctaText: "Agendar Vistoria"
  },
  {
    image: ASSETS.gallery[1],
    title: "Ergonomia Industrial",
    description: "Soluções robustas para linhas de produção, focadas na redução de esforço físico e prevenção de lesões por repetição em ambientes de alta carga.",
    ctaText: "Solicitar Proposta"
  },
  {
    image: ASSETS.gallery[2],
    title: "Cultura de Prevenção",
    description: "Treinamentos dinâmicos que engajam a equipe e transformam a saúde ocupacional em um valor intrínseco da empresa e de cada colaborador.",
    ctaText: "Saiba Mais"
  },
  {
    image: ASSETS.gallery[3],
    title: "Home Office Seguro",
    description: "Levamos a ergonomia profissional para dentro da casa dos seus colaboradores, garantindo saúde no trabalho remoto e produtividade constante.",
    ctaText: "Consultoria Remota"
  },
  {
    image: ASSETS.gallery[4],
    title: "Laudos NR-17",
    description: "Documentação técnica rigorosa para eSocial e auditorias. Esteja 100% seguro perante a lei com nossos laudos periciais especializados.",
    ctaText: "Falar com Perito"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    label: "Passo 1",
    title: "Mapeamento de Riscos",
    description: "Identificamos gargalos ergonômicos em cada setor da sua empresa através de vistorias técnicas presenciais ou remotas."
  },
  {
    label: "Nossa Opção",
    title: "Plano de Intervenção",
    description: "Desenvolvemos recomendações práticas e viáveis para adequar os postos às normas vigentes, focando em baixo custo e alto impacto."
  },
  {
    label: "Nova Visão",
    title: "Monitoramento Contínuo",
    description: "Acompanhamos a implementação e os resultados de saúde, garantindo a melhoria contínua dos indicadores de bem-estar corporativo."
  }
];

export const TESTIMONIALS = [
  {
    quote: "A análise ergonômica da ErghoPrev transformou nossa produtividade e reduziu drasticamente as queixas de dores lombares na equipe de TI.",
    name: "Carlos Silva",
    company: "TecnoLogística S.A.",
    rating: 5
  },
  {
    quote: "Equipe extremamente profissional e atenciosa com as normas NR-17. O laudo técnico foi fundamental para nossa conformidade no eSocial.",
    name: "Fernanda Oliveira",
    company: "Varejo Express",
    rating: 5
  },
  {
    quote: "Os treinamentos são dinâmicos e realmente mudaram a postura de nossos colaboradores no dia a dia. O engajamento foi de 100%!",
    name: "Ricardo Santos",
    company: "Indústria Metalúrgica Sul",
    rating: 5
  }
];
