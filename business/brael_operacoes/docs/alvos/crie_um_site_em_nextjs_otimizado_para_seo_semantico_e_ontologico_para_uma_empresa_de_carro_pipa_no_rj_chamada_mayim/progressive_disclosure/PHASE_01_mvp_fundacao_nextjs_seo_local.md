## Objetivo (1 frase)
Publicar o MVP técnico do site Mayim com estrutura Next.js, SEO técnico base e home navegável em PT-BR.

## Escopo (IN / OUT)
- **IN:** bootstrap do projeto, layout base, home mínima, sitemap/robots/manifest, metadata base.
- **OUT:** páginas completas de serviços/áreas, blog, formulário funcional de orçamento.

## Entregáveis verticais Backend Frontend Validação Documentação
- **Backend:** rotas básicas App Router e utilitário de metadata/JSON-LD base.
- **Frontend:** layout global (header/footer/main), home inicial com CTA principal.
- **Validação:** build/lint/typecheck e smoke test de navegação.
- **Documentação:** atualização de onboarding e registro de decisões do MVP.

## DoR (Definition of Ready) — checklist e bloqueios
- [ ] Regras globais do `_core` lidas.
- [ ] Estrutura de diretórios confirmada.
- [ ] Conteúdo mínimo institucional disponível.
- [ ] Bloqueio: ausência de scripts `lint/build` no projeto.

## Checklist da fase (técnico + produto)
- [ ] Criar base de layout semântico (`header/nav/main/footer`).
- [ ] Definir metadata global com title/description em PT-BR.
- [ ] Gerar `sitemap.ts` e `robots.ts`.
- [ ] Incluir CTA visível para orçamento/WhatsApp na home.
- [ ] Garantir navegação sem erro.

## Ordem técnica obrigatória Backend: schema → model → service → route → api_router Frontend: types → service/store → view/component
- **Backend:** schema (metadata/schema.org base) → model (tipos de entidade LocalBusiness) → service (helpers SEO) → route (rotas App) → api_router (se aplicável, não obrigatório nesta fase).
- **Frontend:** types (tipos de seção) → service/store (conteúdo estático/config) → view/component (layout + home).

## Delta de contrato esperado (se aplicável) antes/depois status codes * breaking change? migração?
- Não aplicável a API pública nesta fase.
- Contrato de navegação: antes inexistente; depois rotas públicas mínimas (`/`).
- Breaking change: Não.
- Migração: Não.

## Observabilidade mínima logs eventos (se fizer sentido) * métricas de sucesso/erro
- Logs: inicialização de página e erro de render.
- Métricas: page_view_home, click_cta_principal.

## Validação mínima (comandos) backend frontend * lint/checks
- `npm run lint`
- `npm run build`
- `npm run typecheck`
- `npm run dev` + validação manual da home

## Riscos + mitigação
- **ALTO:** scripts ausentes no projeto. Mitigação: registrar e criar na fase sem desviar escopo.
- **MÉDIO:** metadata inconsistente com proposta comercial. Mitigação: revisão de copy antes de merge.

## Plano de rollback
- **o que reverter:** arquivos de layout/metadata/sitemap/robots adicionados.
- **como reverter:** `git revert <commit>` da fase.
- **impacto:** site volta ao estado pré-MVP.
- **verificação pós-rollback:** build e navegação sem rotas quebradas.

## DoD (Definition of Done)
- MVP acessível com home e SEO técnico base.
- Checks verdes (lint/build/typecheck).
- Documentação da fase atualizada.

## Template de PR específico desta fase
```md
## PHASE_01_mvp_fundacao_nextjs_seo_local
### Entrega
- Estrutura base Next.js + layout semântico
- SEO técnico inicial (metadata, sitemap, robots)

### Validação
- [ ] npm run lint
- [ ] npm run build
- [ ] npm run typecheck
- [ ] Smoke test home

### Risco/rollback
- Risco principal:
- Plano de rollback validado:
```

## Saída YAML esperada ao concluir a fase
```yaml
fase_id: PHASE_01
status: done
entrega_mvp: true
rotas_publicas:
  - /
seo_tecnico:
  metadata_global: true
  sitemap: true
  robots: true
checks:
  lint: pass
  build: pass
  typecheck: pass
proxima_fase: PHASE_01A
```

## Loop de depuração (até 100)
- Ao final de cada microtarefa desta fase, executar obrigatoriamente um ciclo do loop intensivo.
- Critérios de parada: máximo 100 iterações; parada antecipada com 5 testes consecutivos sem falhas.
- Comandos: `npm run lint`, `npm run build`, `npm run typecheck`, smoke manual em `/`.
- Verificar: contrato de rotas, wiring de navegação, presença de landmarks semânticos, regressões visuais básicas.
- Registro no `log-<slug>.md`: adicionar `execution_loop: n`, achados por severidade, correções e status.
