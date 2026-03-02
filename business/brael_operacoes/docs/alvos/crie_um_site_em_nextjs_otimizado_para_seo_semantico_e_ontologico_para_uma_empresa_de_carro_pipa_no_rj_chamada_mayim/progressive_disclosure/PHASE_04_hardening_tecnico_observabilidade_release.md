## Objetivo (1 frase)
Concluir hardening de performance, observabilidade e qualidade para release estável do site Mayim.

## Escopo (IN / OUT)
- **IN:** otimizações Core Web Vitals, monitoramento básico, revisão final SEO técnico e checklist release.
- **OUT:** redesign amplo ou novas features de produto.

## Entregáveis verticais Backend Frontend Validação Documentação
- **Backend:** logs padronizados, tratamento de erros e limites básicos em endpoints de lead.
- **Frontend:** otimização de imagens/fontes e ajustes de acessibilidade/performance.
- **Validação:** benchmark básico (LCP/CLS), regressão manual completa.
- **Documentação:** runbook operacional e checklist de release.

## DoR (Definition of Ready) — checklist e bloqueios
- [ ] PHASE_03 concluída.
- [ ] Ambiente de medição configurado (Lighthouse/Web Vitals).
- [ ] Bloqueio: sem baseline de performance para comparar.

## Checklist da fase (técnico + produto)
- [ ] Revisar web vitals em páginas críticas.
- [ ] Garantir páginas indexáveis com canonical/sitemap atualizado.
- [ ] Revisar logging de erros e fluxos de lead.
- [ ] Executar checklist final de release.

## Ordem técnica obrigatória Backend: schema → model → service → route → api_router Frontend: types → service/store → view/component
- **Backend:** schema (eventos/erros) → model (tipos de log) → service (logger e métricas) → route (instrumentação APIs) → api_router (middleware).
- **Frontend:** types (métricas UI) → service/store (coleta/telemetria) → view/component (ajustes finais de UX/performance).

## Delta de contrato esperado (se aplicável) antes/depois status codes * breaking change? migração?
- Pode haver ajuste de status code em validações de endpoint (ex.: 422 para validação).
- Se ocorrer, documentar antes/depois e compatibilidade.
- Breaking change: idealmente Não.
- Migração: somente se alteração de contrato ocorrer.

## Observabilidade mínima logs eventos (se fizer sentido) * métricas de sucesso/erro
- Logs: erro 5xx, timeout endpoint lead, fallback render.
- Métricas: LCP, CLS, taxa de erro de API, conversão por origem.

## Validação mínima (comandos) backend frontend * lint/checks
- `npm run lint`
- `npm run build`
- `npm run test`
- `npm run typecheck`
- Lighthouse manual nas páginas críticas

## Riscos + mitigação
- **ALTO:** piora de performance no build final. Mitigação: otimizações progressivas e medição por página.
- **MÉDIO:** regressão em formulário após hardening. Mitigação: regressão manual de conversão.

## Plano de rollback
- **o que reverter:** commits de otimização/instrumentação que degradarem estabilidade.
- **como reverter:** rollback seletivo por commit ou revert da fase.
- **impacto:** retorno ao estado estável anterior sem otimizações finais.
- **verificação pós-rollback:** checks completos + fluxo de lead funcional.

## DoD (Definition of Done)
- Build estável com performance aceitável nas páginas críticas.
- Observabilidade mínima ativa.
- Checklist de release concluído e documentado.

## Template de PR específico desta fase
```md
## PHASE_04_hardening_tecnico_observabilidade_release
### Entrega
- Hardening de performance
- Observabilidade mínima
- Checklist de release

### Métricas
- LCP:
- CLS:
- Taxa de erro API:

### Validação
- [ ] npm run lint
- [ ] npm run build
- [ ] npm run test
- [ ] npm run typecheck
- [ ] Lighthouse
```

## Saída YAML esperada ao concluir a fase
```yaml
fase_id: PHASE_04
status: done
release_ready: true
performance:
  lcp_ok: true
  cls_ok: true
observabilidade:
  logs_ativos: true
  metricas_ativas: true
checks:
  lint: pass
  build: pass
  test: pass
  typecheck: pass
proxima_fase: none
```

## Loop de depuração (até 100)
- Ao final de cada microtarefa desta fase, executar obrigatoriamente um ciclo do loop intensivo.
- Critérios de parada: até 100; parar após 5 testes consecutivos sem falhas.
- Comandos: `npm run lint`, `npm run build`, `npm run test`, `npm run typecheck`, Lighthouse.
- Verificar: contrato final de APIs, regressões visuais e de conversão, estabilidade de rotas.
- Registro no `log-<slug>.md`: registrar iteração, severidade, ações e resultado.
