## Objetivo (1 frase)
Implementar o módulo de conteúdo (blog/silo) orientado por workflow SERP→grafos→blueprint para ganho de autoridade temática.

## Escopo (IN / OUT)
- **IN:** listagem de blog, template de artigo, primeira leva de tópicos do silo e interlinking.
- **OUT:** automações de geração em massa e integrações com CMS externo.

## Entregáveis verticais Backend Frontend Validação Documentação
- **Backend:** estrutura de dados de posts (local), metadata dinâmica e schema Article.
- **Frontend:** `/blog` + `/blog/[slug]` com blocos semânticos e satélites PAA.
- **Validação:** checklist anti-canibalização e linkagem interna.
- **Documentação:** PlanSpec + Grafo de Conteúdo JSON por cluster inicial.

## DoR (Definition of Ready) — checklist e bloqueios
- [ ] PHASE_02 concluída.
- [ ] Blueprint de conteúdo (passos 1-19) para ao menos 1 pilar e 3 clusters.
- [ ] Bloqueio: ausência de dossiê SERP por tópico.

## Checklist da fase (técnico + produto)
- [ ] Estruturar posts com campos SEO obrigatórios.
- [ ] Publicar artigo pilar + clusters iniciais.
- [ ] Inserir FAQs/satélites por artigo.
- [ ] Linkar artigos para páginas transacionais.

## Ordem técnica obrigatória Backend: schema → model → service → route → api_router Frontend: types → service/store → view/component
- **Backend:** schema (post metadata + graph refs) → model (Post) → service (loader/filter) → route (`/blog`, `/blog/[slug]`) → api_router (N/A).
- **Frontend:** types (post card/article) → service/store (fonte de conteúdo) → view/component (listagem e artigo).

## Delta de contrato esperado (se aplicável) antes/depois status codes * breaking change? migração?
- **Antes:** sem módulo de blog ativo.
- **Depois:** rotas `/blog` e `/blog/[slug]`.
- Status codes: 200/404.
- Breaking change: Não.
- Migração: Não.

## Observabilidade mínima logs eventos (se fizer sentido) * métricas de sucesso/erro
- Logs: blog_render, blog_slug_not_found.
- Métricas: page_view_artigo, clique para páginas de orçamento/serviços.

## Validação mínima (comandos) backend frontend * lint/checks
- `npm run lint`
- `npm run build`
- `npm run typecheck`
- Verificação manual de links e breadcrumbs

## Riscos + mitigação
- **ALTO:** conteúdo superficial sem ganho de informação. Mitigação: obrigatório executar workflow 19 passos.
- **MÉDIO:** canibalização entre artigos. Mitigação: mapeamento cluster→tópico único.

## Plano de rollback
- **o que reverter:** rotas e conteúdo do blog adicionados na fase.
- **como reverter:** revert do commit.
- **impacto:** perda de ativos TOFU/MOFU.
- **verificação pós-rollback:** navegação principal intacta.

## DoD (Definition of Done)
- Blog funcional com estrutura de silo inicial.
- Conteúdos com JSON-LD Article, FAQs satélites e interlinking.
- Evidência do workflow de planejamento aplicada aos tópicos publicados.

## Template de PR específico desta fase
```md
## PHASE_03_blog_silo_semantico_ontologico
### Entrega
- Rotas /blog e /blog/[slug]
- Pilar + clusters iniciais
- Interlinking estratégico

### Aderência ao workflow 19 passos
- Evidências por tópico:

### Validação
- [ ] npm run lint
- [ ] npm run build
- [ ] npm run typecheck
```

## Saída YAML esperada ao concluir a fase
```yaml
fase_id: PHASE_03
status: done
blog:
  listagem: true
  artigo: true
conteudo:
  pilar_publicado: true
  clusters_publicados: 3
workflow_19_passos:
  aplicado: true
proxima_fase: PHASE_04
```

## Loop de depuração (até 100)
- Ao final de cada microtarefa desta fase, executar obrigatoriamente um ciclo do loop intensivo.
- Critérios de parada: até 100; encerrar com 5 testes consecutivos sem falhas.
- Comandos: `npm run lint`, `npm run build`, revisão manual de links.
- Verificar: rotas dinâmicas, JSON-LD Article, canibalização, regressões de conversão.
- Registro no `log-<slug>.md`: execução de loop com achados/correções.
