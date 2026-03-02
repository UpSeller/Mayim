# ALVO_ONBOARDING

## ALVO
Criar um site em Next.js, otimizado para SEO semântico e ontológico, para a empresa de carro pipa no RJ chamada Mayim.

## Contexto específico do alvo
- Projeto orientado a aquisição local (RJ e entorno), com foco em páginas de serviço, áreas atendidas e conversão por orçamento/WhatsApp.
- Estratégia deve contemplar SEO técnico + semântico + ontológico (JSON-LD, grafo de conteúdo e arquitetura de silo).
- Implementação deve ser incremental por fases pequenas, cada uma com entrega vertical.

## Pontos de integração (somente o que importa)
- `app/layout.tsx`, `app/page.tsx`, `app/**/page.tsx` para estrutura semântica e conteúdo.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` para SEO técnico.
- `src/components/**` para blocos reutilizáveis de conteúdo e CTA.
- `src/lib/seo/**` para metadata e JSON-LD.
- `src/services/**` para envio de formulários/contato (se houver API interna).
- `app/api/**/route.ts` para integração com lead capture (se necessário).

## Entidades tocadas
- Organization/LocalBusiness (Mayim)
- Service (abastecimento residencial/comercial/obras/piscinas, lavagem, umectação)
- Place/City (áreas atendidas no RJ)
- FAQPage, BreadcrumbList, OfferCatalog, Article/BlogPosting

## Mapa de pastas/códigos relevantes
- `app/`
- `src/components/`
- `src/lib/seo/`
- `src/services/`
- `public/`
- `business/brael_operacoes/docs/alvos/<slug>/progressive_disclosure/`

## Decisões mínimas (KISS)
- Priorizar App Router com páginas estáticas + metadata por rota.
- JSON-LD por página via helper simples sem abstração excessiva.
- Conteúdo em PT-BR com foco local (intenção transacional + informacional).
- Medir sucesso por conversão (cliques WhatsApp/orçamento) e cobertura semântica.

## Constraints
- Sem criação de arquitetura paralela.
- Sem CMS obrigatório no MVP (conteúdo pode ser local).
- Sem feature fora das fases.
- Cada PR implementa apenas uma fase/subfase.
