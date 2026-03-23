import type { BlogPost } from '@/types/blog'

export const blogPosts: BlogPost[] = [
  {
    slug: 'falta-de-agua-no-rj-o-que-fazer',
    title: 'Falta de água no RJ: o que fazer para reduzir impacto imediato',
    excerpt: 'Passo a passo prático para manter operação da casa ou empresa durante falta d’água.',
    description:
      'Guia prático sobre como agir na falta de água no Rio de Janeiro e quando acionar carro pipa com segurança.',
    publishedAt: '2026-03-02',
    updatedAt: '2026-03-02',
    keywords: ['falta de água rj', 'carro pipa rio de janeiro', 'abastecimento emergencial'],
    relatedServices: ['abastecimento-residencial', 'abastecimento-comercial'],
    relatedPosts: ['como-calcular-volume-de-carro-pipa', 'agua-potavel-carro-pipa-duvidas-comuns'],
    content: [
      'A falta de água pode afetar rotina doméstica e operação de negócios em poucas horas. O primeiro passo é mapear consumo crítico (banheiros, cozinha e processos essenciais).',
      'Em seguida, organize um plano de contingência com prioridade para higiene, preparo de alimentos e continuidade de atividades essenciais.',
      'Se o período sem abastecimento se prolongar, solicitar carro pipa com antecedência reduz risco de desabastecimento total e evita decisões de última hora.',
    ],
    faq: [
      {
        question: 'Quando devo pedir carro pipa?',
        answer: 'Assim que perceber risco de consumo crítico antes do retorno da rede pública.',
      },
      {
        question: 'Vale para empresas também?',
        answer: 'Sim. Em operações comerciais, antecipar abastecimento evita parada e perda financeira.',
      },
    ],
  },
  {
    slug: 'como-calcular-volume-de-carro-pipa',
    title: 'Como calcular o volume ideal de carro pipa para sua necessidade',
    excerpt: 'Entenda como dimensionar volume por consumo, reservatório e tempo de autonomia.',
    description:
      'Método simples para calcular volume de água e escolher caminhão pipa adequado para residência, comércio ou obra.',
    publishedAt: '2026-03-02',
    updatedAt: '2026-03-02',
    keywords: ['volume carro pipa', 'quantos litros carro pipa', 'água para caixa d’água'],
    relatedServices: ['abastecimento-residencial', 'abastecimento-obras'],
    relatedPosts: ['falta-de-agua-no-rj-o-que-fazer', 'agua-potavel-carro-pipa-duvidas-comuns'],
    content: [
      'Para estimar volume, use consumo diário aproximado e multiplique pelos dias de autonomia desejados.',
      'Considere a capacidade da caixa d’água e possíveis limitações de acesso para descarga no local.',
      'Em cenários de obra, adicione margem de segurança para limpeza, cura e umectação.',
    ],
    faq: [
      {
        question: 'Existe um volume padrão?',
        answer: 'Não. O volume depende do perfil de consumo e da capacidade de armazenamento.',
      },
      {
        question: 'Posso pedir abastecimento recorrente?',
        answer: 'Sim. Em muitos casos, recorrência reduz custo operacional e risco de falta.',
      },
    ],
  },
  {
    slug: 'agua-potavel-carro-pipa-duvidas-comuns',
    title: 'Água potável em carro pipa: dúvidas comuns e boas práticas',
    excerpt: 'Checklist de segurança para contratar abastecimento de água com tranquilidade.',
    description:
      'Veja critérios essenciais para validar abastecimento de água potável em carro pipa no RJ.',
    publishedAt: '2026-03-02',
    updatedAt: '2026-03-02',
    keywords: ['água potável carro pipa', 'qualidade da água', 'carro pipa seguro'],
    relatedServices: ['abastecimento-comercial', 'abastecimento-piscinas'],
    relatedPosts: ['falta-de-agua-no-rj-o-que-fazer', 'como-calcular-volume-de-carro-pipa'],
    content: [
      'Ao contratar abastecimento, confirme finalidade da água e requisitos do local de uso.',
      'Mantenha reservatórios limpos e acompanhe frequência de higienização para preservar qualidade.',
      'Ter fornecedor confiável e atendimento rápido é decisivo em períodos críticos de escassez.',
    ],
    faq: [
      {
        question: 'A água serve para consumo humano?',
        answer: 'Depende da finalidade contratada e das condições de armazenamento no imóvel.',
      },
      {
        question: 'Como evitar contaminação na caixa d’água?',
        answer: 'Com limpeza periódica, tampa vedada e manutenção preventiva adequada.',
      },
    ],
  },
]

export const blogBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post]))
