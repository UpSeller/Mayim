import type { ClusterPage } from '@/types/cluster'

export const servicePages: ClusterPage[] = [
  {
    slug: 'abastecimento-residencial',
    title: 'Abastecimento residencial com carro pipa no RJ',
    keyword: 'carro pipa residencial rj',
    description: 'Abastecimento de água potável para casas e condomínios no Rio de Janeiro.',
    summary: 'Atendimento rápido para reposição de água em residências e condomínios.',
    ctaText: 'Solicitar abastecimento residencial',
    relatedSlugs: ['zona-sul', 'zona-norte', 'barra-da-tijuca'],
    faq: [
      { question: 'Qual volume ideal para residência?', answer: 'Depende do consumo e da capacidade da sua caixa d’água.' },
      { question: 'Atende condomínio?', answer: 'Sim, com logística programada para portaria e áreas técnicas.' },
    ],
  },
  {
    slug: 'abastecimento-comercial',
    title: 'Abastecimento comercial e industrial com carro pipa no RJ',
    keyword: 'carro pipa comercial rj',
    description: 'Abastecimento de água para empresas, comércios e operações industriais.',
    summary: 'Suporte contínuo para manter operação de negócios sem interrupção hídrica.',
    ctaText: 'Solicitar abastecimento comercial',
    relatedSlugs: ['centro', 'zona-oeste', 'niteroi'],
    faq: [
      { question: 'Vocês emitem comprovantes?', answer: 'Sim, com detalhamento de atendimento e volume entregue.' },
      { question: 'Atende horários noturnos?', answer: 'Sim, conforme disponibilidade operacional 24h.' },
    ],
  },
  {
    slug: 'abastecimento-obras',
    title: 'Abastecimento para obras com caminhão pipa no RJ',
    keyword: 'carro pipa obra rj',
    description: 'Água para canteiro de obras, concreto, limpeza e apoio operacional.',
    summary: 'Apoio hídrico para construção civil com entrega programada.',
    ctaText: 'Solicitar água para obra',
    relatedSlugs: ['zona-oeste', 'baixada-fluminense', 'niteroi'],
    faq: [
      { question: 'Atende obra de grande porte?', answer: 'Sim, com planejamento de múltiplas viagens e janelas.' },
      { question: 'Pode agendar recorrência?', answer: 'Sim, com cronograma alinhado ao avanço da obra.' },
    ],
  },
  {
    slug: 'abastecimento-piscinas',
    title: 'Enchimento de piscinas com carro pipa no RJ',
    keyword: 'encher piscina carro pipa rj',
    description: 'Serviço de enchimento de piscinas residenciais e comerciais com agilidade.',
    summary: 'Reposição segura de água para piscinas em casas, clubes e condomínios.',
    ctaText: 'Solicitar enchimento de piscina',
    relatedSlugs: ['barra-da-tijuca', 'zona-sul', 'zona-oeste'],
    faq: [
      { question: 'Quanto tempo leva para encher?', answer: 'Varia por volume e capacidade de recebimento no local.' },
      { question: 'Posso dividir em etapas?', answer: 'Sim, conforme necessidade e logística da área.' },
    ],
  },
  {
    slug: 'lavagem-de-ruas',
    title: 'Lavagem de ruas e pátios com carro pipa no RJ',
    keyword: 'lavagem rua carro pipa rj',
    description: 'Lavagem de vias, pátios e áreas externas com caminhão pipa.',
    summary: 'Serviço para limpeza urbana e corporativa com agendamento flexível.',
    ctaText: 'Solicitar lavagem de via/pátio',
    relatedSlugs: ['centro', 'zona-norte', 'baixada-fluminense'],
    faq: [
      { question: 'Atende pátio industrial?', answer: 'Sim, com planejamento por metragem e frequência.' },
      { question: 'Realiza limpeza pontual?', answer: 'Sim, tanto demandas avulsas quanto contratos recorrentes.' },
    ],
  },
  {
    slug: 'umectacao-e-irrigacao',
    title: 'Umectação de vias e irrigação com carro pipa no RJ',
    keyword: 'umectação vias rj',
    description: 'Controle de poeira e irrigação de terrenos com operação técnica.',
    summary: 'Aplicação de água para reduzir poeira e manter condições de operação.',
    ctaText: 'Solicitar umectação/irrigação',
    relatedSlugs: ['zona-oeste', 'baixada-fluminense', 'niteroi'],
    faq: [
      { question: 'Serve para controle de poeira em obra?', answer: 'Sim, com frequência definida conforme necessidade.' },
      { question: 'Atende terrenos extensos?', answer: 'Sim, com plano de cobertura por área.' },
    ],
  },
]

export const areaPages: ClusterPage[] = [
  {
    slug: 'zona-sul',
    title: 'Carro pipa na Zona Sul do Rio de Janeiro',
    keyword: 'carro pipa zona sul rj',
    description: 'Atendimento de carro pipa na Zona Sul: Copacabana, Ipanema, Leblon e entorno.',
    summary: 'Atendimento rápido em bairros da Zona Sul com foco residencial e comercial.',
    ctaText: 'Pedir carro pipa na Zona Sul',
    relatedSlugs: ['abastecimento-residencial', 'abastecimento-piscinas', 'abastecimento-comercial'],
    faq: [
      { question: 'Atende condomínios na Zona Sul?', answer: 'Sim, com janela de entrega alinhada ao prédio.' },
      { question: 'Tem atendimento urgente?', answer: 'Sim, conforme disponibilidade operacional.' },
    ],
  },
  {
    slug: 'zona-norte',
    title: 'Carro pipa na Zona Norte do Rio de Janeiro',
    keyword: 'carro pipa zona norte rj',
    description: 'Abastecimento de água potável na Zona Norte do RJ com atendimento local.',
    summary: 'Cobertura para bairros da Zona Norte com logística otimizada.',
    ctaText: 'Pedir carro pipa na Zona Norte',
    relatedSlugs: ['abastecimento-residencial', 'lavagem-de-ruas', 'abastecimento-comercial'],
    faq: [
      { question: 'Atende residência e comércio?', answer: 'Sim, adaptamos o serviço ao tipo de imóvel.' },
      { question: 'Como é calculado o preço?', answer: 'Por volume, distância e janela de atendimento.' },
    ],
  },
  {
    slug: 'zona-oeste',
    title: 'Carro pipa na Zona Oeste do Rio de Janeiro',
    keyword: 'carro pipa zona oeste rj',
    description: 'Serviços de carro pipa para Zona Oeste com foco em obras e operações amplas.',
    summary: 'Suporte hídrico para residências, empresas e obras na Zona Oeste.',
    ctaText: 'Pedir carro pipa na Zona Oeste',
    relatedSlugs: ['abastecimento-obras', 'umectacao-e-irrigacao', 'abastecimento-piscinas'],
    faq: [
      { question: 'Atende canteiro de obra?', answer: 'Sim, com programação recorrente de abastecimento.' },
      { question: 'Cobre grandes distâncias?', answer: 'Sim, avaliamos a logística por bairro e acesso.' },
    ],
  },
  {
    slug: 'barra-da-tijuca',
    title: 'Carro pipa na Barra da Tijuca',
    keyword: 'carro pipa barra da tijuca',
    description: 'Atendimento na Barra da Tijuca e entorno para residências, condomínios e comércios.',
    summary: 'Entrega ágil de água para imóveis e operações na Barra e região.',
    ctaText: 'Pedir carro pipa na Barra',
    relatedSlugs: ['abastecimento-piscinas', 'abastecimento-residencial', 'abastecimento-comercial'],
    faq: [
      { question: 'Atende condomínios grandes?', answer: 'Sim, com coordenação de acesso e horários.' },
      { question: 'Atende Recreio também?', answer: 'Sim, conforme rota e disponibilidade.' },
    ],
  },
  {
    slug: 'centro',
    title: 'Carro pipa no Centro do Rio de Janeiro',
    keyword: 'carro pipa centro rj',
    description: 'Serviço de caminhão pipa para empresas e operações no Centro do RJ.',
    summary: 'Foco em atendimento comercial e institucional no Centro.',
    ctaText: 'Pedir carro pipa no Centro',
    relatedSlugs: ['abastecimento-comercial', 'lavagem-de-ruas', 'abastecimento-obras'],
    faq: [
      { question: 'Atende prédios comerciais?', answer: 'Sim, com organização de acesso e carga/descarga.' },
      { question: 'Tem emissão de comprovante?', answer: 'Sim, conforme padrão de atendimento.' },
    ],
  },
  {
    slug: 'niteroi',
    title: 'Carro pipa em Niterói',
    keyword: 'carro pipa niterói',
    description: 'Abastecimento de água potável em Niterói para residências, comércios e obras.',
    summary: 'Operação local em Niterói e entorno com atendimento programado.',
    ctaText: 'Pedir carro pipa em Niterói',
    relatedSlugs: ['abastecimento-comercial', 'abastecimento-obras', 'umectacao-e-irrigacao'],
    faq: [
      { question: 'Atende Região Oceânica?', answer: 'Sim, avaliando disponibilidade e acesso.' },
      { question: 'Faz contrato recorrente?', answer: 'Sim, para demandas contínuas.' },
    ],
  },
  {
    slug: 'baixada-fluminense',
    title: 'Carro pipa na Baixada Fluminense',
    keyword: 'carro pipa baixada fluminense',
    description: 'Atendimento de carro pipa na Baixada Fluminense para múltiplas demandas.',
    summary: 'Cobertura para demandas residenciais, comerciais e operacionais na Baixada.',
    ctaText: 'Pedir carro pipa na Baixada',
    relatedSlugs: ['abastecimento-obras', 'lavagem-de-ruas', 'umectacao-e-irrigacao'],
    faq: [
      { question: 'Atende empresas na região?', answer: 'Sim, com rota planejada e SLA combinado.' },
      { question: 'Como solicitar orçamento?', answer: 'Pelo WhatsApp ou página de orçamento.' },
    ],
  },
]

export const serviceBySlug = Object.fromEntries(servicePages.map((item) => [item.slug, item]))
export const areaBySlug = Object.fromEntries(areaPages.map((item) => [item.slug, item]))
