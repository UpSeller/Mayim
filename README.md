# Mayim — Site institucional (MVP Fase 1)

Base técnica do site da Mayim Carro Pipa RJ com Next.js 15 (App Router), TypeScript e Tailwind CSS v4.

## Escopo desta fase

- Layout global semântico (`header`, `nav`, `main`, `footer`)
- Home inicial com CTA principal
- Metadata base + JSON-LD `LocalBusiness`
- `sitemap.ts`, `robots.ts` e `manifest.ts`
- Rotas públicas mínimas para navegação sem erro

## Rodar localmente

```bash
npm install
npm run dev
```

## Checks recomendados

```bash
npm run lint
npm run build
npm run typecheck
npm run validate:release
```

> Observação: `npm run validate:release` executa preflight de rede do registry antes dos gates de build.

> O comando `npm run validate:release` também gera `reports/release-gate.json` com o resultado consolidado dos gates.

> Também é gerado `reports/release-gate.md` para leitura humana rápida do status de release.
