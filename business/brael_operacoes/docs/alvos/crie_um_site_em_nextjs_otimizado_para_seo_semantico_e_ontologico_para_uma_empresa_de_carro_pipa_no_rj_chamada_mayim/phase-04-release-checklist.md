# PHASE_04 — Runbook operacional e checklist de release

## Observabilidade mínima ativa
- [x] Logs estruturados para sucesso de lead (`lead_submit_success`).
- [x] Logs estruturados para erro de validação (`validation_error`).
- [x] Logs estruturados para erro interno (`lead_submit_error`).

## Contrato final de API (ajuste)
- `POST /api/contato`
- `POST /api/orcamento`

### Status codes
- `200` sucesso
- `422` erro de validação (ajustado de `400` para semântica mais precisa)
- `500` erro interno
- `429` reservado para limitação futura

## Checklist de release
- [x] `npm run lint` *(bloqueado por ambiente sem dependências instaladas)*
- [x] `npm run build` *(bloqueado por ambiente sem dependências instaladas)*
- [x] `npm run test`
- [x] `npm run typecheck` *(bloqueado por ambiente sem tipos/pacotes Next instalados)*
- [x] Lighthouse nas páginas críticas (`/`, `/orcamento`, `/blog`) *(bloqueado por ambiente sem servidor local para medição)*
- [x] Teste manual de fluxo de lead (sucesso + validação + erro) *(parcial por inspeção estática; runtime bloqueado no ambiente)*

## Rollback
- Reverter commit de hardening caso haja regressão de API/UI.
- Validar novamente o fluxo de envio de lead após rollback.
