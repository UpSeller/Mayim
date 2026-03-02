# SCN_IMPLEMENTATION_PLAN

## Visão macro
Implementar o site da Mayim em Next.js com base em SEO semântico/ontológico, iniciando por MVP vertical de presença institucional + conversão, seguido por expansão de clusters e hardening técnico.

## Workflow obrigatório incluído no plano

**Contagem total do workflow completo de SEO:** 47 passos mínimos por conteúdo (19 de planejamento + 28 de execução/redação por conteúdo). Em projetos com múltiplos conteúdos, o total acumulado cresce linearmente e ultrapassa 40 com folga.

### Workflow de Planejamento (19 passos)
1. SERP - Top 10 Orgânico
2. SERP - PAA e Buscas Relacionadas
3. SERP - Análise de Formatos
4. SERP - Gaps de Conteúdo
5. Compilação do PlanSpec
6. Persona - Demografia e Psicografia
7. Persona - Job to be Done
8. Jornada - TOFU, MOFU, BOFU
9. E-E-A-T - Sinais de Expertise
10. E-E-A-T - Sinais de Trust
11. Grafo Semântico
12. Grafo de Conhecimento
13. Grafo Ontológico
14. Silo - Pilar e Tese Central
15. Silo - Definição de Clusters
16. Silo - Definição de Tópicos
17. Silo - Estratégia de Linkagem
18. Silo - Geração de Satélites (PAA)
19. Grafo de Conteúdo (Blueprint Final em JSON estrito)

### Workflow de Execução/Redação (28 passos por conteúdo)
Aplicar os 28 passos de execução para cada página/artigo, preservando contexto cumulativo e finalizando com conteúdo pronto para publicação (artigo + meta + schema + scorecard).

## Fases e subfases (ordem obrigatória)
1. `PHASE_01_mvp_fundacao_nextjs_seo_local`
2. `PHASE_01A_home_semantica_jsonld_localbusiness`
3. `PHASE_01B_servicos_e_areas_cluster_local`
4. `PHASE_02_conversao_contato_orcamento_faq`
5. `PHASE_03_blog_silo_semantico_ontologico`
6. `PHASE_04_hardening_tecnico_observabilidade_release`

## Dependências
- 01 desbloqueia estrutura base de páginas e SEO técnico.
- 01A depende de 01 para metadata/layout.
- 01B depende de 01A para consistência semântica e linkagem.
- 02 depende de 01B para jornada completa de aquisição.
- 03 depende de 02 para cluster de conteúdo e autoridade.
- 04 depende de todas as anteriores para estabilização final.

## Riscos e decisões mínimas
- **ALTO:** inconsistência entre schema JSON-LD e conteúdo real. Mitigação: checklist de contrato semântico por página.
- **MÉDIO:** canibalização de keywords entre páginas de serviço/área. Mitigação: matriz keyword-intenção por rota.
- **MÉDIO:** baixa conversão por CTA fraco. Mitigação: CTA fixo com rastreio de clique e teste A/B posterior.
- **BAIXO:** crescimento do escopo visual. Mitigação: design system mínimo e reutilização de componentes.

## Critérios de sucesso
- Cobertura de páginas essenciais (home, serviços, áreas, contato, orçamento, FAQ).
- SEO técnico válido (metadata, sitemap, robots, canonical).
- Dados estruturados consistentes com entidades reais da Mayim.
- Fluxo de conversão funcional com eventos de sucesso/erro.
- Plano de conteúdo em silo implementável sem retrabalho.
