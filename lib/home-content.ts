import type { HomeAreaItem, HomeFaqItem, HomeServiceItem } from '@/types/home'

export const homeServices: HomeServiceItem[] = [
  {
    title: 'Abastecimento residencial',
    description: 'Água potável para casas e condomínios com atendimento rápido.',
    href: '/servicos',
  },
  {
    title: 'Abastecimento comercial',
    description: 'Suporte para empresas, comércios e operações com demanda contínua.',
    href: '/servicos',
  },
  {
    title: 'Abastecimento para obras',
    description: 'Fornecimento para canteiros e apoio operacional em construção civil.',
    href: '/servicos',
  },
]

export const homeAreas: HomeAreaItem[] = [
  { name: 'Zona Sul', href: '/areas-atendidas' },
  { name: 'Zona Norte', href: '/areas-atendidas' },
  { name: 'Zona Oeste', href: '/areas-atendidas' },
  { name: 'Barra da Tijuca', href: '/areas-atendidas' },
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
