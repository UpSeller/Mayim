import type { HomeAreaItem, HomeFaqItem, HomeServiceItem } from '@/types/home'

export const homeServices: HomeServiceItem[] = [
  {
    title: 'Abastecimento residencial',
    description: 'Água potável para casas e condomínios com atendimento rápido.',
    href: '/servicos/abastecimento-residencial',
  },
  {
    title: 'Abastecimento comercial',
    description: 'Suporte para empresas, comércios e operações com demanda contínua.',
    href: '/servicos/abastecimento-comercial',
  },
  {
    title: 'Abastecimento para obras',
    description: 'Fornecimento para canteiros e apoio operacional em construção civil.',
    href: '/servicos/abastecimento-obras',
  },
  {
    title: 'Abastecimento para piscinas',
    description: 'Enchimento e reposição de água para piscinas residenciais e comerciais.',
    href: '/servicos/abastecimento-piscinas',
  },
  {
    title: 'Lavagem de ruas',
    description: 'Limpeza e lavagem de vias públicas e áreas externas com caminhão pipa.',
    href: '/servicos/lavagem-de-ruas',
  },
  {
    title: 'Umectação e irrigação',
    description: 'Controle de poeira em terrenos e irrigação de áreas verdes.',
    href: '/servicos/umectacao-e-irrigacao',
  },
]

export const homeAreas: HomeAreaItem[] = [
  { name: 'Zona Sul', href: '/areas-atendidas/zona-sul' },
  { name: 'Zona Norte', href: '/areas-atendidas/zona-norte' },
  { name: 'Zona Oeste', href: '/areas-atendidas/zona-oeste' },
  { name: 'Barra da Tijuca', href: '/areas-atendidas/barra-da-tijuca' },
  { name: 'Centro', href: '/areas-atendidas/centro' },
  { name: 'Niterói', href: '/areas-atendidas/niteroi' },
  { name: 'Baixada Fluminense', href: '/areas-atendidas/baixada-fluminense' },
]

export const homeFaq: HomeFaqItem[] = [
  {
    question: 'A água é potável?',
    answer: 'Sim. O abastecimento segue critérios de qualidade e segurança para consumo.',
  },
  {
    question: 'Vocês atendem emergência?',
    answer: 'Sim. A Mayim opera com atendimento estendido para demandas urgentes no RJ.',
  },
]
