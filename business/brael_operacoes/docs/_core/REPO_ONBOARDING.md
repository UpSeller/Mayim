# REPO_ONBOARDING

## Visão geral do repositório
Este repositório centraliza o planejamento e a execução do projeto Mayim (site institucional e de aquisição para carro pipa no RJ), com trilha de implementação em progressive disclosure por alvo. O objetivo é entregar incrementos verticais (backend, frontend, validação e documentação) com baixo retrabalho.

## Convenções
- Estrutura documental principal em `business/brael_operacoes/docs/`.
- Regras globais em `business/brael_operacoes/docs/_core/`.
- Cada alvo tem diretório próprio em `business/brael_operacoes/docs/alvos/<slug>/`.
- Fases executáveis ficam em `.../progressive_disclosure/PHASE_XX*.md`.
- Nomenclatura:
  - `PHASE_01_...md` para fase.
  - `PHASE_01A_...md` para subfase.
  - `contador-<slug>.txt`, `plan-<slug>.md`, `log-<slug>.md` para rastreio append-only.
- Linguagem obrigatória de produto/documentação: PT-BR.

## Como rodar local (padrão para stack Next.js)
> Ajustar conforme scripts existentes no `package.json` do projeto quando a base de código estiver disponível.

1. Instalar dependências:
```bash
npm install
```
2. Executar ambiente de desenvolvimento:
```bash
npm run dev
```
3. Validar lint:
```bash
npm run lint
```
4. Validar build de produção:
```bash
npm run build
```
5. Rodar testes (quando existentes):
```bash
npm run test
```

## Onde ficam testes, migrações e artefatos
- Testes unitários/integrados: `tests/` ou co-localizados em `src/**/__tests__/`.
- Testes E2E (quando existir): `e2e/`.
- Migrações (se houver backend com banco): `prisma/migrations/` ou pasta equivalente.
- Assets e conteúdo estático: `public/`.
- Definições de schema/contrato (frontend/backend): `types/` e `lib/` conforme evolução do projeto.

## Pontos de integração esperados para este produto
- Rotas de páginas em App Router (`app/**/page.tsx`).
- API routes em `app/api/**/route.ts` (se necessário).
- Componentes de UI em `components/` (padrão atual deste MVP).
- Serviços de dados/utilitários em `lib/` (padrão atual deste MVP).
- Metadados/SEO em `generateMetadata`, JSON-LD e `app/sitemap.ts`/`app/robots.ts`.
