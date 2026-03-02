## Objetivo (1 frase)
Implementar fluxo de conversão completo (contato, orçamento e FAQ) com rastreio mínimo de sucesso/erro.

## Escopo (IN / OUT)
- **IN:** páginas `/contato`, `/orcamento`, `/faq`; formulário e CTA com rastreio.
- **OUT:** automação de CRM avançada e integrações externas complexas.

## Entregáveis verticais Backend Frontend Validação Documentação
- **Backend:** endpoint(s) de envio de lead (se necessário) com validação de payload.
- **Frontend:** formulários acessíveis, mensagens PT-BR e estados de envio.
- **Validação:** testes manuais de fluxo feliz/erro.
- **Documentação:** delta de contrato do endpoint e playbook de atendimento.

## DoR (Definition of Ready) — checklist e bloqueios
- [ ] PHASE_01B concluída.
- [ ] Campos mínimos de lead definidos.
- [ ] Bloqueio: ausência de destino de recebimento de leads.

## Checklist da fase (técnico + produto)
- [ ] Definir campos obrigatórios de orçamento.
- [ ] Implementar validação client/server.
- [ ] Exibir feedback de sucesso/erro em PT-BR.
- [ ] Instrumentar eventos de conversão.

## Ordem técnica obrigatória Backend: schema → model → service → route → api_router Frontend: types → service/store → view/component
- **Backend:** schema (lead input/output) → model (tipo Lead) → service (envio/persistência) → route (API de contato/orçamento) → api_router (registro em `app/api`).
- **Frontend:** types (form state) → service/store (submit handler) → view/component (formulários e UI de feedback).

## Delta de contrato esperado (se aplicável) antes/depois status codes * breaking change? migração?
- **Antes:** sem endpoint de lead.
- **Depois:** `POST /api/contato` e/ou `POST /api/orcamento`.
- **Payload entrada:** nome, telefone, bairro, tipo_servico, urgencia, mensagem.
- **Payload saída:** `{ success: boolean, protocol?: string, message: string }`.
- **Status codes:** 200, 400, 429, 500.
- **Breaking change:** Não (contrato novo).
- **Migração:** Não.

## Observabilidade mínima logs eventos (se fizer sentido) * métricas de sucesso/erro
- Logs: lead_submit_success, lead_submit_error, validation_error.
- Métricas: taxa de envio concluído, taxa de erro por campo.

## Validação mínima (comandos) backend frontend * lint/checks
- `npm run lint`
- `npm run build`
- `npm run test`
- Teste manual do formulário (sucesso + erro)

## Riscos + mitigação
- **ALTO:** falha silenciosa de envio de lead. Mitigação: feedback explícito + logs estruturados.
- **MÉDIO:** formulário longo reduz conversão. Mitigação: campos mínimos no MVP.

## Plano de rollback
- **o que reverter:** endpoints e componentes de formulário desta fase.
- **como reverter:** revert do commit.
- **impacto:** perda de captação direta no site.
- **verificação pós-rollback:** páginas continuam renderizando sem erro.

## DoD (Definition of Done)
- Fluxo de contato/orçamento funcionando ponta a ponta.
- FAQ com schema FAQPage e perguntas estratégicas.
- Contrato do endpoint documentado no PR.

## Template de PR específico desta fase
```md
## PHASE_02_conversao_contato_orcamento_faq
### Entrega
- Formulários de contato/orçamento
- Endpoint(s) de lead
- FAQ com schema

### Delta de contrato
- Endpoint:
- Payload entrada/saída:
- Status codes:

### Validação
- [ ] npm run lint
- [ ] npm run build
- [ ] npm run test
- [ ] Fluxo manual sucesso/erro
```

## Saída YAML esperada ao concluir a fase
```yaml
fase_id: PHASE_02
status: done
api_lead:
  ativo: true
  endpoints:
    - /api/contato
    - /api/orcamento
faq_schema: true
conversao:
  evento_submit: true
proxima_fase: PHASE_03
```

## Loop de depuração (até 100)
- Ao final de cada microtarefa desta fase, executar obrigatoriamente um ciclo do loop intensivo.
- Critérios de parada: até 100; parada antecipada com 5 testes consecutivos sem falhas.
- Comandos: `npm run lint`, `npm run build`, `npm run test`, submissão manual.
- Verificar: contrato dos endpoints, estados de UI (loading/sucesso/erro), regressões em CTA.
- Registro no `log-<slug>.md`: loops com severidade e ações.
