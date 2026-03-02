## Objetivo (1 frase)
Transformar a home em página semântica e ontológica completa, com JSON-LD LocalBusiness aderente à Mayim.

## Escopo (IN / OUT)
- **IN:** conteúdo da home com H1 único, seções semânticas, schema LocalBusiness/Service parcial.
- **OUT:** páginas internas completas de serviços e áreas.

## Entregáveis verticais Backend Frontend Validação Documentação
- **Backend:** helper de JSON-LD e tipagem de entidade LocalBusiness.
- **Frontend:** home com seções institucionais, prova de confiança e CTA.
- **Validação:** teste de Rich Results + validação de heading hierarchy.
- **Documentação:** mapa de entidades e deltas semânticos da home.

## DoR (Definition of Ready) — checklist e bloqueios
- [ ] PHASE_01 concluída.
- [ ] Dados reais mínimos da empresa disponíveis (telefone, área atendida, horário).
- [ ] Bloqueio: ausência de dados oficiais da Mayim para campos obrigatórios.

## Checklist da fase (técnico + produto)
- [ ] H1 único com keyword alvo local.
- [ ] Seções semânticas (`section`, `article`, `address`) coerentes.
- [ ] JSON-LD LocalBusiness publicado no HTML.
- [ ] CTA de WhatsApp e orçamento com microcopy em PT-BR.

## Ordem técnica obrigatória Backend: schema → model → service → route → api_router Frontend: types → service/store → view/component
- **Backend:** schema (LocalBusiness/Service) → model (tipos TS) → service (serializador JSON-LD) → route (injeção no layout/home) → api_router (N/A).
- **Frontend:** types (seções home) → service/store (conteúdo) → view/component (home final).

## Delta de contrato esperado (se aplicável) antes/depois status codes * breaking change? migração?
- Sem endpoint novo.
- Delta semântico: antes home institucional simples, depois home com entidade LocalBusiness explícita e dados estruturados.
- Breaking change: Não.
- Migração: Não.

## Observabilidade mínima logs eventos (se fizer sentido) * métricas de sucesso/erro
- Logs: render_schema_localbusiness, erro_schema_parse.
- Métricas: taxa de clique em CTA da home, depth scroll.

## Validação mínima (comandos) backend frontend * lint/checks
- `npm run lint`
- `npm run build`
- `npm run typecheck`
- Validação manual em Rich Results Test

## Riscos + mitigação
- **ALTO:** schema divergente de dados reais. Mitigação: checklist de campos obrigatórios com revisão.
- **MÉDIO:** excesso de texto sem foco de conversão. Mitigação: manter seções curtas com CTA claro.

## Plano de rollback
- **o que reverter:** componentes e helper JSON-LD da home.
- **como reverter:** revert do commit da fase.
- **impacto:** perda de marcação semântica avançada na home.
- **verificação pós-rollback:** home renderiza, build estável.

## DoD (Definition of Done)
- Home com semântica HTML5 correta e JSON-LD válido.
- Hierarquia de headings aprovada.
- Eventos mínimos de CTA disponíveis.

## Template de PR específico desta fase
```md
## PHASE_01A_home_semantica_jsonld_localbusiness
### Entrega
- Home semântica com H1 único
- JSON-LD LocalBusiness validado

### Evidências
- Print do Rich Results Test
- Checklist de campos da entidade

### Validação
- [ ] npm run lint
- [ ] npm run build
- [ ] npm run typecheck
```

## Saída YAML esperada ao concluir a fase
```yaml
fase_id: PHASE_01A
status: done
home_semantica: true
jsonld:
  localbusiness: true
  validado: true
metricas:
  click_cta_home: habilitada
proxima_fase: PHASE_01B
```

## Loop de depuração (até 100)
- Ao final de cada microtarefa desta fase, executar obrigatoriamente um ciclo do loop intensivo.
- Critérios de parada: até 100 loops; parar com 5 testes consecutivos sem falhas.
- Comandos: `npm run lint`, `npm run build`, Rich Results Test.
- Verificar: contrato semântico, injeção do JSON-LD, H1 único, regressões na home.
- Registro no `log-<slug>.md`: incluir iteração, achados, correções e status.
