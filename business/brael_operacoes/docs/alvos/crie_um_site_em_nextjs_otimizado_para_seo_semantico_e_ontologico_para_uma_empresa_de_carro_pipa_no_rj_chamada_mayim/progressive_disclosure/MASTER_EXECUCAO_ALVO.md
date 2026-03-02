# MASTER_EXECUCAO_ALVO

## Deltas em relação ao _core/MASTER_EXECUCAO_SCN.md
- Neste alvo, o workflow de 19 passos (SERP → PlanSpec → Grafos → Silo → Blueprint JSON) é obrigatório para planejamento macro e para cada conteúdo publicado.
- Toda fase deve explicitar como os outputs do workflow alimentam:
  - metadata da página,
  - JSON-LD,
  - headings semânticos,
  - linkagem interna.

## Convenções específicas do alvo
- Para CADA conteúdo a ser redigido, executar integralmente os 28 passos de execução/redação definidos no plano do alvo.
- PT-BR com recorte geográfico RJ.
- Keywords devem mapear intenção (transacional/local/informacional) sem canibalização.
- Toda rota pública deve ter:
  - título SEO,
  - descrição SEO,
  - H1 único,
  - JSON-LD aplicável,
  - CTA de conversão.

## Ajustes de validação
Adicionar aos checks:
```bash
npm run lint
npm run build
npm run test
npm run typecheck
```
Validação manual complementar:
- Rich Results Test (schema)
- inspeção de headings/landmarks semânticos
- clique em CTA de WhatsApp/orçamento

## Ajustes de PR
- Incluir seção “Aderência ao Workflow” com evidências dos 19 passos de planejamento e dos 28 passos de execução aplicáveis à fase.
- Incluir seção “Evidência semântica/ontológica” com schema e entidades adicionadas/alteradas.

## Template YAML (override)
```yaml
fase_id: PHASE_XX
workflow:
  planejamento_19_passos:
    aplicado: true
    passos_cobertos: []
  execucao_28_passos_por_conteudo:
    aplicado: true
    passos_cobertos: []
seo_semantico:
  paginas_afetadas: []
  h1_unico_ok: true
seo_ontologico:
  schemas_jsonld: []
  entidades: []
```


## Loop intensivo específico do alvo
- Em toda microentrega de SEO/conteúdo/UX, aplicar loop de até 100 testes intensivos.
- Permitir encerramento antecipado somente com 5 execuções consecutivas sem falhas.
- Para rotas públicas, o ciclo deve cobrir: lint, build, typecheck, checagem manual de schema e CTA.


**Contagem total do workflow completo de SEO:** 47 passos mínimos por conteúdo (19 de planejamento + 28 de execução/redação por conteúdo). Em projetos com múltiplos conteúdos, o total acumulado cresce linearmente e ultrapassa 40 com folga.
