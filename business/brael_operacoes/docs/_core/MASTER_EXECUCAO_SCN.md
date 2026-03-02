# MASTER_EXECUCAO_SCN

## Regras globais (obrigatórias)
1. 1 PR = 1 fase/subfase.
2. Não pular fase; só avançar com DoD e checklist 100%.
3. Sem arquitetura paralela; integrar ao stack existente.
4. Execução vertical por fase: Backend + Frontend + validação + documentação.
5. KISS, serial e pragmático.
6. PT-BR obrigatório em UI/mensagens/docs.
7. Não mergear com erro de build/test/lint.
8. Anti-escopo: sem refatoração ampla, sem troca arquitetural não planejada, sem renomeações por preferência, sem breaking change sem versionamento/migração, sem feature extra fora do plano.

## DoR padrão
- Objetivo e escopo da fase claros.
- Dependências anteriores concluídas.
- Critérios de validação definidos com comandos reais.
- Delta de contrato previsto quando houver schema/endpoint/rota.
- Plano de rollback definido e testável.

## DoD padrão
- Entregáveis de backend/frontend/documentação concluídos.
- Validação local sem erro (`lint`, `build`, `test` quando existir).
- Contrato atualizado/documentado.
- Logs/observabilidade mínima implementados.
- PR aberto no template oficial com evidências.

## Política de contrato (delta obrigatório)
Sempre que tocar schema/endpoint/rota, registrar no PR:
- Payload de entrada (antes/depois)
- Payload de saída (antes/depois)
- Status codes
- Campos novos/alterados/removidos
- Se breaking change: versionar contrato + plano de migração/compatibilidade

## Observabilidade mínima
- Logs estruturados para eventos críticos de conversão e erro.
- Métricas mínimas por fase: sucesso/erro de ação principal.
- Severidade de riscos/achados: BLOCKER, ALTO, MÉDIO, BAIXO.
- Achado BLOCKER/ALTO entra na fase atual ou vira subfase imediatamente posterior.


## Loop de testes intensivos (obrigatório por microtarefa)
- Ao final de cada microtarefa, executar loop de testes intensivos com limite de 100 ciclos.
- Critério de conclusão antecipada: 5 ciclos consecutivos sem falhas.
- Cada ciclo deve executar validações automatizadas aplicáveis (lint/build/test/typecheck) e ao menos 1 validação manual do fluxo tocado.
- Registrar no log da fase: número do ciclo, comandos executados, resultado e falhas encontradas/corrigidas.

## Gates de qualidade
- Gate 1: Build e lint verdes.
- Gate 2: Contrato coerente e documentado.
- Gate 3: Regressão manual da feature principal.
- Gate 4: Rollback descrito e verificável.

## Comandos oficiais de validação
### Backend
```bash
npm run lint
npm run test
```
### Frontend
```bash
npm run build
npm run dev
```
### Checks adicionais
```bash
npm run typecheck
```

## Template de PR
```md
## Fase/Subfase
- ID: <PHASE_XX/PHASE_XXA>
- Objetivo: <...>

## Escopo
- IN:
- OUT:

## Delta de Contrato
- Antes:
- Depois:
- Status Codes:
- Breaking change? <Sim/Não>
- Migração/Compatibilidade:

## Observabilidade
- Logs:
- Métricas:

## Evidências de Validação
- [ ] npm run lint
- [ ] npm run build
- [ ] npm run test
- [ ] Teste manual

## Rollback
- O que reverter:
- Como reverter:
- Impacto:
- Verificação pós-rollback:
```

## Template de saída YAML
```yaml
fase_id: PHASE_XX
status: done
resumo_entrega:
  backend: []
  frontend: []
  validacao: []
  documentacao: []
delta_contrato:
  houve: false
  antes: {}
  depois: {}
  breaking_change: false
observabilidade:
  logs: []
  metricas: []
riscos:
  blocker: []
  alto: []
  medio: []
  baixo: []
rollback:
  pronto: true
  procedimento: []
checks:
  lint: pass
  build: pass
  test: pass
proxima_fase: PHASE_XX
```

## Workflow obrigatório de planejamento e execução de conteúdo
### Planejamento (19 passos)

**Contagem total do workflow completo de SEO:** 47 passos mínimos por conteúdo (19 de planejamento + 28 de execução/redação por conteúdo). Em projetos com múltiplos conteúdos, o total acumulado cresce linearmente e ultrapassa 40 com folga.

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

### Execução/Redação (28 passos por conteúdo)

1. Fact Pack - Extração de Entidades
2. Fact Pack - Definições Canônicas
3. Fact Pack - Dados e Estatísticas
4. Fact Pack - Consenso vs Controvérsia
5. Fact Pack - Compilação JSON
6. Ângulo Único e Information Gain
7. Outline - Estrutura de H2
8. Outline - Estrutura de H3
9. Outline - Mapeamento de Fatos
10. Outline - Elementos Interativos
11. Redação - Featured Snippet
12. Redação - Hook de Introdução
13. Redação - Corpo (Parte 1)
14. Redação - Corpo (Parte 2)
15. Redação - Injeção de E-E-A-T
16. Redação - Injeção de Fontes
17. Edição - Enriquecimento com Exemplos
18. Edição - Zero Fluff
19. Edição - Otimização de Retenção
20. Edição - Escaneabilidade e CRO
21. Edição - Tabelas e Checklists
22. Edição - FAQ (PAA)
23. Edição - CTA de Conversão
24. Tech SEO - Meta Dados
25. Tech SEO - Schema Markup
26. QA - RankMirror Rater
27. Edição Final - 4 Key Takeaways
28. Polimento Final Absoluto

Executar os 28 passos de execução/redação para cada conteúdo, preservando o encadeamento de contexto (`previousResult`) e aplicando os prompts de Fact Pack → Outline → Redação → Edição → Tech SEO → QA → Polimento final.
