
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import VideoSection from '../components/Home/VideoSection';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import ContactForm from '../components/Home/ContactForm';
import { COLORS } from '../constants';

interface ArticleSection {
  title: string;
  content: string[];
  images: string[];
}

const LocationPage: React.FC = () => {
  const { location } = useParams<{ location: string }>();
  const decodedLocation = location ? decodeURIComponent(location) : 'sua região';

  const articles: ArticleSection[] = useMemo(() => [
    {
      title: `Introdução à Ergonomia e Bem-estar em ${decodedLocation}`,
      content: [
        `O desenvolvimento econômico de ${decodedLocation} trouxe consigo uma necessidade premente de cuidar do capital humano das empresas. Quando falamos em ergonomia em ${decodedLocation}, não estamos apenas discutindo a compra de cadeiras novas, mas sim uma mudança de paradigma na forma como o trabalho é executado. A análise ergonômica tornou-se um pilar fundamental para qualquer gestor em ${decodedLocation} que deseja ver sua equipe prosperar livre de lesões.`,
        `Em ${decodedLocation}, as particularidades do mercado exigem soluções que se adaptem ao ritmo local. A NR-17 serve como nossa bússola, garantindo que as adaptações sigam normas técnicas rigorosas. Ao investir em ergonomia em ${decodedLocation}, a empresa demonstra um compromisso genuíno com a saúde ocupacional, o que reflete diretamente na retenção de talentos e na redução drástica de custos com afastamentos médicos.`,
        `Nossa consultoria atua em ${decodedLocation} identificando riscos invisíveis. Muitas vezes, um layout de escritório mal planejado em ${decodedLocation} pode ser a causa silenciosa de dores lombares e estresse mental. A análise ergonômica em ${decodedLocation} mapeia esses pontos e oferece soluções práticas que podem ser implementadas sem interromper o fluxo de trabalho, garantindo que a NR-17 seja um aliado e não apenas uma obrigação fiscal.`
      ],
      images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Serviços de Ergonomia Especializados em ${decodedLocation}`,
      content: [
        `Nossa gama de serviços em ${decodedLocation} abrange desde vistorias técnicas rápidas até consultorias de longo prazo para grandes plantas industriais. Entendemos que cada bairro ou cidade possui características próprias; por isso, em ${decodedLocation}, personalizamos nossa abordagem para atender desde o pequeno comércio até corporações robustas. Realizar uma análise ergonômica detalhada é o primeiro passo para transformar a cultura organizacional em ${decodedLocation}.`,
        `Oferecemos laudos técnicos precisos (LET) e diagnósticos que respeitam rigorosamente a NR-17. Ao escolher a ErghoPrev em ${decodedLocation}, sua empresa ganha uma parceira dedicada a reduzir o absenteísmo e elevar a moral da equipe através de ajustes biomecânicos. Em ${decodedLocation}, nossa presença é sinônimo de segurança e conformidade técnica em todas as etapas do processo de saúde ocupacional.`,
        `A ergonomia em ${decodedLocation} precisa ser vista como um investimento estratégico. Quando uma empresa em ${decodedLocation} solicita uma análise ergonômica, ela está protegendo seu futuro jurídico e operacional. O cumprimento da NR-17 em ${decodedLocation} evita multas pesadas e garante que o ambiente de trabalho seja um local de produtividade saudável, onde cada colaborador de ${decodedLocation} possa atingir seu máximo potencial sem colocar sua saúde em risco.`
      ],
      images: ["https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Análise Ergonômica do Trabalho (AET) em ${decodedLocation}`,
      content: [
        `A AET é o coração da nossa atuação técnica em ${decodedLocation}. Este estudo aprofundado vai muito além de uma simples observação visual; em ${decodedLocation}, utilizamos metodologias científicas para mensurar a carga física e mental dos colaboradores. A análise ergonômica realizada em ${decodedLocation} por nossos especialistas identifica riscos biomecânicos complexos que muitas vezes passam despercebidos.`,
        `A NR-17 exige que as empresas tenham esse mapeamento atualizado, e em ${decodedLocation}, garantimos que sua documentação esteja impecável para auditorias do trabalho. O foco da AET em ${decodedLocation} é criar recomendações práticas que possam ser implementadas imediatamente. Analisamos desde a postura de digitação em escritórios de ${decodedLocation} até o levantamento de cargas pesadas em armazéns logísticos.`,
        `Ao final da análise ergonômica em ${decodedLocation}, entregamos um relatório detalhado com planos de ação claros. Em ${decodedLocation}, sabemos que a agilidade é essencial, por isso nossos laudos são entregues com rapidez e precisão técnica. Estar em conformidade com a NR-17 em ${decodedLocation} é o primeiro passo para uma gestão moderna, e a AET é a ferramenta que torna essa conformidade uma reality prática para as empresas de ${decodedLocation}.`
      ],
      images: ["https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Laudo Ergonômico (LET) para Empresas de ${decodedLocation}`,
      content: [
        `O Laudo Ergonômico do Trabalho (LET) é o documento legal que consolida todas as descobertas da análise ergonômica em ${decodedLocation}. Para as empresas de ${decodedLocation}, ter um LET bem fundamentado é essencial para a defesa em processos trabalhistas e para a conformidade com o eSocial. Nossos peritos em ${decodedLocation} elaboram laudos claros, objetivos e com validade técnica inquestionável perante os órgãos reguladores.`,
        `A NR-17 serve como guia mestre para cada parágrafo escrito por nossa equipe em ${decodedLocation}. Além da conformidade legal, o LET em ${decodedLocation} serve como um guia estratégico para futuros investimentos em mobiliário e infraestrutura. Ao ler nosso laudo em ${decodedLocation}, o gestor saberá exatamente onde investir para obter o melhor retorno em saúde e produtividade.`,
        `Nossa experiência em ${decodedLocation} nos permite redigir laudos que são fáceis de entender, mas tecnicamente robustos. Uma análise ergonômica sem um laudo de qualidade perde sua força; por isso, em ${decodedLocation}, focamos na excelência documental. Garanta que sua empresa em ${decodedLocation} esteja protegida com um LET que reflete o compromisso com a NR-17 e com a integridade física de cada colaborador da região.`
      ],
      images: ["https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Ergonomia para Home Office em ${decodedLocation}`,
      content: [
        `Com a transição de muitos profissionais em ${decodedLocation} para o trabalho remoto, a ergonomia doméstica tornou-se um tema crítico de saúde pública. Muitas vezes, o trabalhador em ${decodedLocation} não possui uma cadeira adequada ou iluminação correta em casa, o que gera dores crônicas rapidamente. Nossa análise ergonômica para home office em ${decodedLocation} é realizada para mitigar esses danos.`,
        `Orientamos os moradores e empresas de ${decodedLocation} sobre como adaptar a mesa de jantar ou escolher o suporte de monitor ideal para longas jornadas. Respeitar os princípios da NR-17 no ambiente doméstico é fundamental para prevenir o esgotamento físico e mental. Em ${decodedLocation}, ajudamos empresas a gerir a saúde de seus colaboradores remotos com a mesma seriedade do presencial.`,
        `A análise ergonômica para home office em ${decodedLocation} inclui também orientações sobre pausas e organização do tempo. Sabemos que em ${decodedLocation}, as distrações domésticas podem levar a posturas inadequadas por longos períodos. Aplicar a NR-17 de forma adaptada ao lar é o segredo para manter a produtividade alta e a saúde em dia para todos os profissionais de ${decodedLocation} que trabalham à distância.`
      ],
      images: ["https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Treinamentos de Ergonomia e Conscientização em ${decodedLocation}`,
      content: [
        `Capacitar o colaborador em ${decodedLocation} é tão importante quanto ajustar o mobiliário físico. Nossos treinamentos em ${decodedLocation} focam na conscientização postural e no uso correto das ferramentas de trabalho. Ensinamos as equipes em ${decodedLocation} a identificar sinais precoces de fadiga muscular antes que se tornem lesões permanentes.`,
        `A análise ergonômica em ${decodedLocation} muitas vezes revela que o problema não é o equipamento, mas a forma como ele é utilizado no dia a dia. Por isso, a NR-17 enfatiza a importância da capacitação contínua. Em ${decodedLocation}, realizamos workshops dinâmicos que mudam a percepção dos funcionários sobre saúde ocupacional, tornando-os protagonistas do seu bem-estar.`,
        `Nossos palestrantes em ${decodedLocation} utilizam linguagem acessível e exemplos práticos da realidade local. Um treinamento de ergonomia em ${decodedLocation} é um investimento que se paga através da redução de erros operacionais e do aumento da satisfação interna. Siga a NR-17 em ${decodedLocation} através da educação, garantindo que o conhecimento em análise ergonômica seja disseminado por toda a sua estrutura organizacional.`
      ],
      images: ["https://images.unsplash.com/photo-1524178232363-1fb28f74b581?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Conformidade Total com a NR-17 em ${decodedLocation}`,
      content: [
        `A NR-17 é a norma brasileira que estabelece os parâmetros fundamentais para a adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores. Em ${decodedLocation}, a fiscalização tem se tornado mais rigorosa, exigindo que as empresas apresentem evidências concretas de gestão ergonômica para evitar multas elevadas.`,
        `Nossa consultoria em ${decodedLocation} garante que todos os quesitos da norma sejam atendidos, desde o levantamento de cargas pesadas até a organização do trabalho intelectual. A análise ergonômica em ${decodedLocation} é a peça fundamental deste quebra-cabeça regulatório, fornecendo os dados necessários para o preenchimento correto do PGR e eSocial na região.`,
        `Evite surpresas desagradáveis em ${decodedLocation} mantendo seu programa de ergonomia atualizado e alinhado com as melhores práticas de SST. A NR-17 em ${decodedLocation} não deve ser vista como um fardo, mas como um roteiro para o sucesso operacional. Ao realizar uma análise ergonômica periódica em ${decodedLocation}, sua empresa constrói uma barreira contra passivos trabalhistas e consolida sua reputação no mercado local.`
      ],
      images: ["https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Projeto Ergonômico Personalizado em ${decodedLocation}`,
      content: [
        `Projetar um novo escritório ou linha de produção em ${decodedLocation} requer um olhar técnico especializado desde a concepção. O projeto ergonômico preventivo em ${decodedLocation} evita que erros caros de layout sejam cometidos, economizando milhares de reais em adaptações futuras. Em ${decodedLocation}, trabalhamos em conjunto com arquitetos e engenheiros.`,
        `A análise ergonômica preditiva em ${decodedLocation} utiliza simulações para prever pontos de pressão e fadiga antes mesmo da construção. Aplicar a NR-17 desde o primeiro rascunho é o segredo para criar ambientes de alta performance em ${decodedLocation}. Um posto de trabalho bem projetado em ${decodedLocation} aumenta a velocidade de execução e o conforto térmico e acústico.`,
        `Em ${decodedLocation}, ajudamos a escolher as melhores cores, texturas e materiais que influenciam na ergonomia cognitiva. Nossa análise ergonômica em ${decodedLocation} olha para o ambiente como um todo. Quando o design e a NR-17 se encontram em ${decodedLocation}, o resultado é um local de trabalho inspirador que atrai e mantém os melhores talentos da cidade.`
      ],
      images: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Benefícios da Ergonomia para Empresas de ${decodedLocation}`,
      content: [
        `Investir em ergonomia em ${decodedLocation} traz benefícios que vão muito além do simples cumprimento legal. Empresas em ${decodedLocation} que priorizam o conforto dos colaboradores relatam um aumento médio de 25% na produtividade individual após a implementação das melhorias. A análise ergonômica em ${decodedLocation} é the chave para esse crescimento sustentado.`,
        `Além da produtividade, a ergonomia em ${decodedLocation} ajuda a reter talentos valiosos, pois funcionários que se sentem cuidados tendem a ter maior engajamento. Em ${decodedLocation}, observamos também uma queda drástica no número de ações judiciais relacionadas a doenças do trabalho. A NR-17, quando bem aplicada, transforma o ambiente em ${decodedLocation} em um local de inovação.`,
        `A redução do FAP (Fator Acidentário de Prevenção) é outro ganho financeiro direto para as empresas de ${decodedLocation}. Realizar uma análise ergonômica séria em ${decodedLocation} reduz a sinistralidade e, consequentemente, os impostos pagos. O cumprimento da NR-17 em ${decodedLocation} é, portanto, uma decisão de negócios inteligente que preserva vidas e lucros simultaneamente.`
      ],
      images: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Prevenção de LER/DORT com Foco em ${decodedLocation}`,
      content: [
        `As Lesões por Esforços Repetitivos (LER) e os Distúrbios Osteomusculares Relacionados ao Trabalho (DORT) são as principais causas de afastamento nas indústrias e escritórios de ${decodedLocation}. Através de uma análise ergonômica focada em prevenção biomecânica, conseguimos identificar tarefas críticas em ${decodedLocation} que sobrecarregam as articulações.`,
        `Em ${decodedLocation}, implementamos pausas programadas e alternância de tarefas para mitigar esses riscos. A NR-17 é muito clara sobre os limites de esforço físico repetitivo, e em ${decodedLocation}, ajudamos sua empresa a respeitar esses parâmetros sem perder a eficiência. Prevenir é sempre mais barato e humano do que remediar lesões instaladas em ${decodedLocation}.`,
        `Nossos especialistas em ${decodedLocation} realizam avaliações detalhadas da biomecânica de cada função. Uma análise ergonômica precisa em ${decodedLocation} pode sugerir o uso de ferramentas pneumáticas ou suportes que eliminam a sobrecarga. Tratar a saúde do trabalhador de ${decodedLocation} como um ativo precioso é a melhor forma de garantir a continuidade do seu negócio sob a égide da NR-17.`
      ],
      images: ["https://images.unsplash.com/photo-1559832333-518620f393fb?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Mobiliário Ergonômico Adequado para ${decodedLocation}`,
      content: [
        `A escolha de mesas e cadeiras para empresas em ${decodedLocation} não deve ser baseada apenas na estética. Em ${decodedLocation}, orientamos nossos clientes na aquisição de mobiliário que possua as regulagens antropométricas exigidas pela NR-17. Uma análise ergonômica técnica em ${decodedLocation} avalia se o equipamento atual é compatível com a diversidade física da equipe.`,
        `Muitas vezes, em ${decodedLocation}, pequenos ajustes ou a adição de suportes de pés e monitores já resolvem grandes problemas de postura. Garantir que o mobiliário em ${decodedLocation} seja adequado é essencial para evitar fadiga muscular e dores cervicais. A análise ergonômica em ${decodedLocation} fornece as especificações exatas para compras futuras sem desperdício.`,
        `Não aceite qualquer "cadeira ergonômica" em ${decodedLocation} sem uma certificação ou análise prévia. A NR-17 exige requisitos específicos de profundidade de assento e apoio lombar que nossa consultoria em ${decodedLocation} verifica rigorosamente. Transforme seus postos de trabalho em ${decodedLocation} em centros de conforto, onde a ergonomia trabalha a favor da concentração e do rendimento.`
      ],
      images: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Iluminação e Conforto Ambiental em ${decodedLocation}`,
      content: [
        `A ergonomia ambiental em ${decodedLocation} muitas vezes é negligenciada, mas tem impacto direto no nível de estresse dos colaboradores. Iluminação insuficiente ou com reflexos excessivos nos monitores em ${decodedLocation} causa cansaço visual e erros de processamento. Nossa análise ergonômica em ${decodedLocation} inclui medições precisas de iluminância.`,
        `Seguimos a NR-17 e as normas da ABNT para garantir que cada posto em ${decodedLocation} tenha a luz correta para a tarefa executada. Além disso, o conforto térmico em ${decodedLocation} é vital; ambientes muito frios ou muito quentes geram irritabilidade e perda de foco. A análise ergonômica em ${decodedLocation} avalia o fluxo de ar e a temperatura ideal para o trabalho.`,
        `O ruído também é um fator de distração constante em áreas urbanas de ${decodedLocation}. Propomos soluções acústicas baseadas em nossa análise ergonômica em ${decodedLocation} para reduzir o barulho de fundo e melhorar a comunicação. Estar em conformidade com a NR-17 em ${decodedLocation} significa olhar para o invisível, criando uma atmosfera que favorece a produtividade saudável.`
      ],
      images: ["https://images.unsplash.com/photo-1505373633560-fa967385818f?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Pausas Ativas e Ginástica Laboral em ${decodedLocation}`,
      content: [
        `Incentivar o movimento inteligente durante o expediente em ${decodedLocation} é uma estratégia de baixíssimo custo e altíssimo impacto. As pausas ativas, recomendadas pela NR-17, ajudam a quebrar o ciclo de imobilidade postural que tanto prejudica a circulação. Em ${decodedLocation}, implementamos programas de ginástica laboral personalizados para cada setor.`,
        `Uma análise ergonômica detalhada em ${decodedLocation} indica quais grupos musculares são mais exigidos em cada função, permitindo alongamentos específicos. Em ${decodedLocation}, o dinamismo do dia a dia pede momentos de descompressão física. Essas pequenas interrupções planejadas em ${decodedLocation} renovam a energia mental e física para o restante da jornada.`,
        `Nossos fisioterapeutas do trabalho em ${decodedLocation} criam roteiros de exercícios fáceis de seguir. A NR-17 valoriza a organização do trabalho que prevê tempo para recuperação física. Ao adotar essas práticas em ${decodedLocation}, sua empresa reduz o risco de fadiga crônica. A análise ergonômica em ${decodedLocation} é o que dá o suporte científico para que essas pausas sejam realmente eficazes.`
      ],
      images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Ergonomia Cognitiva e Saúde Psíquica em ${decodedLocation}`,
      content: [
        `O trabalho moderno em ${decodedLocation} é predominantemente mental. Por isso, a ergonomia cognitiva ganha cada vez mais destaque em nossas avaliações na região. Avaliamos a carga de informações, a complexidade das interfaces e o nível de estresse decisório dos funcionários de ${decodedLocation}. A NR-17 também aborda aspectos organizacionais que afetam o psicológico.`,
        `Em ${decodedLocation}, ajudamos a redesenhar fluxos de comunicação para reduzir a sobrecarga mental. O objetivo em ${decodedLocation} é evitar o Burnout e garantir que a tomada de decisão seja fluida e sem erros causados por exaustão. Uma análise ergonômica completa em ${decodedLocation} deve considerar o cérebro tanto quanto a coluna lombar no dia a dia.`,
        `Saúde mental e ergonomia em ${decodedLocation} andam juntas. Ambientes com metas inalcançáveis ou pressão excessiva violam os princípios da NR-17 sobre organização do trabalho. Nossa análise ergonômica em ${decodedLocation} oferece um diagnóstico humano e técnico, sugerindo mudanças que promovem um clima organizacional positivo e resiliente em toda a localidade.`
      ],
      images: ["https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Avaliação Postural Periódica em ${decodedLocation}`,
      content: [
        `Realizar check-ups posturais periódicos nos colaboradores de ${decodedLocation} permite a detecção precoce de desalinhamentos que podem evoluir para patologias graves. Nossa equipe em ${decodedLocation} utiliza técnicas de avaliação física para orientar cada pessoa individualmente sobre sua postura ao sentar, levantar e carregar pesos, conforme a NR-17.`,
        `A análise ergonômica individualizada em ${decodedLocation} é um bônus que muitas empresas oferecem como parte de seu pacote de benefícios de saúde. Em ${decodedLocation}, essa atenção personalizada gera um sentimento de valorização no funcionário. Estar em conformidade com a NR-17 em ${decodedLocation} é apenas o patamar mínimo; o sucesso real vem do cuidado humano.`,
        `Durante a análise ergonômica em ${decodedLocation}, observamos como cada colaborador interage com seu posto único. Fazemos ajustes de altura de cadeira e inclinação de teclado na hora. Essa consultoria "beira de mesa" em ${decodedLocation} é o que traz o resultado imediato que as empresas buscam para cumprir a NR-17 com excelência e cuidado preventivo.`
      ],
      images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Adaptações para Inclusão e PcD em ${decodedLocation}`,
      content: [
        `A inclusão de Pessoas com Deficiência (PcD) no mercado de trabalho de ${decodedLocation} requer adaptações ergonômicas que garantam acessibilidade e autonomia. Em ${decodedLocation}, realizamos análises específicas para adaptar postos de trabalho a cadeirantes ou pessoas com limitações sensoriais, respeitando integralmente a NR-17 e as normas de inclusão.`,
        `Promover a acessibilidade através da ergonomia em ${decodedLocation} é um ato de responsabilidade social e inteligência corporativa. A análise ergonômica inclusiva em ${decodedLocation} olha para rampas, alturas de mesas especiais e softwares assistivos. Nossa consultoria em ${decodedLocation} garante que o ambiente seja acolhedor para a diversidade humana local.`,
        `A NR-17 em ${decodedLocation} prevê que o trabalho deve ser adaptado ao homem, e não o contrário. Isso é especialmente verdadeiro quando falamos em diversidade em ${decodedLocation}. Uma análise ergonômica bem feita remove barreiras invisíveis e permite que talentos PcD brilhem em suas funções, contribuindo para a riqueza social e produtiva de toda a região.`
      ],
      images: ["https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Histórico e Casos de Sucesso em ${decodedLocation}`,
      content: [
        `Ao longo dos anos de atuação em ${decodedLocation}, acumulamos diversos casos de sucesso que comprovam o retorno sobre investimento da ergonomia. Empresas de logística em ${decodedLocation} viram seus índices de afastamento por dores nas costas caírem 40% após nossa análise ergonômica e implementação de novos métodos de manuseio de carga.`,
        `Em escritórios de tecnologia de ${decodedLocation}, a aplicação da NR-17 resultou em maior foco e redução de queixas de tendinite. Temos orgulho de ser a referência em ${decodedLocation} quando o assunto é saúde ocupacional de alto nível. Cada empresa de ${decodedLocation} que atendemos torna-se um modelo de conformidade e produtividade em seu respectivo setor.`,
        `A análise ergonômica em ${decodedLocation} foi a chave para resolver problemas de layout que causavam gargalos em uma indústria metalúrgica da região. O cumprimento da NR-17 em ${decodedLocation} trouxe paz jurídica e eficiência fabril. Esses resultados reais são o que nos motiva a continuar entregando a melhor consultoria em ergonomia de ${decodedLocation} todos os dias.`
      ],
      images: ["https://images.unsplash.com/photo-1491333078588-55b6733c7de6?auto=format&fit=crop&q=80&w=800"]
    },
    {
      title: `Como Iniciar sua Consultoria em ${decodedLocation}`,
      content: [
        `O processo para contratar a ErghoPrev em ${decodedLocation} é simples, transparente e focado no seu resultado. Começamos com um diagnóstico preliminar para entender as dores da sua empresa em ${decodedLocation}. Após isso, nossa equipe técnica elabora um plano de análise ergonômica que cobre todos os pontos exigidos pela NR-17 com profundidade.`,
        `Seja para uma AET completa ou para treinamentos específicos em ${decodedLocation}, estamos prontos para atuar com agilidade e rigor científico. Nosso atendimento em ${decodedLocation} é próximo, garantindo que você tenha suporte em todas as etapas de implementação das melhorias. Não deixe para depois a saúde de quem constrói o seu sucesso em ${decodedLocation}.`,
        `Solicite hoje mesmo um orçamento para análise ergonômica em ${decodedLocation}. Estar em dia com a NR-17 é a melhor forma de proteger sua empresa de passivos e multas. Em ${decodedLocation}, somos seu parceiro estratégico para transformar a ergonomia em um motor de produtividade, saúde e conformidade total para o seu negócio na região.`
      ],
      images: ["https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=800"]
    }
  ], [decodedLocation]);

  return (
    <div className="flex flex-col">
      {/* Hero Specific */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-950 py-32 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6 inline-block px-4 py-1 rounded-full bg-rose-500 text-sm font-black uppercase tracking-widest">
            Expertise Local
          </div>
          <h1 className="text-4xl lg:text-7xl font-black mb-6">
            Análise Ergonômica em <br />
            <span className="text-blue-400">{decodedLocation}</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-12">
            Soluções completas de ergonomia e conformidade NR-17 para empresas localizadas em {decodedLocation}. 
            Atendimento rápido e laudos técnicos especializados.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="px-10 py-5 bg-amber-400 text-blue-950 font-black rounded-full shadow-2xl transition-all hover:scale-105">
              Solicitar Orçamento
            </a>
            <Link to="/" className="px-10 py-5 bg-white/10 backdrop-blur text-white font-bold rounded-full border border-white/20 hover:bg-white/20">
              Ver Outros Serviços
            </Link>
          </div>
        </div>
        
        {/* Abstract BG elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Link to="/" className="hover:text-blue-900">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-gray-900 font-bold">{decodedLocation}</span>
          </p>
        </div>
      </div>

      {/* Dynamic Content Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl space-y-32">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
            >
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-black leading-tight" style={{ color: COLORS.primary }}>
                  {article.title}
                </h2>
                <div className="text-gray-600 leading-relaxed text-lg space-y-6">
                  {article.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                  <p className="font-semibold italic" style={{ color: COLORS.primary }}>
                    Proteja sua empresa em <strong>{decodedLocation}</strong> hoje mesmo. A <strong>análise ergonômica</strong> técnica e a conformidade com a <strong>NR-17</strong> são os caminhos mais seguros para uma produtividade sem riscos.
                  </p>
                </div>
                <div className="pt-8">
                  <a 
                    href={`https://wa.me/5541997000601?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20análise%20ergonômica%20em%20${encodeURIComponent(decodedLocation)}.%20Vi%20o%20artigo%20sobre%20${encodeURIComponent(article.title)}.`}
                    target="_blank"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white font-black rounded-full hover:bg-emerald-600 transition-all shadow-xl hover:-translate-y-1"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                    Solicitar Orçamento via WhatsApp
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                {article.images.map((img, i) => (
                  <div key={i} className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] border-8 border-gray-50">
                    <img src={img} alt={article.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <VideoSection location={decodedLocation} />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </div>
  );
};

export default LocationPage;
