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

## Evidências da validação final (2026-03-03)
| Gate | Comando | Resultado | Evidência objetiva |
|---|---|---|---|
| Preflight rede | `curl -IsS --max-time 10 https://registry.npmjs.org` | FAIL | `CONNECT tunnel failed, response 403` |
| Dependências (default) | `npm install --no-audit --no-fund` | FAIL | `403 Forbidden` ao baixar `@tailwindcss/postcss` |
| Install (sem proxy env) | `env -u HTTP_PROXY ... npm install --no-audit --no-fund` | FAIL | `timeout`/sem resposta dentro de 25s (rede direta indisponível) |
| Install (registry alternativo) | `npm install --registry=https://registry.npmmirror.com --no-audit --no-fund` | FAIL | `403 Forbidden` também no mirror |
| Lint | `npm run lint` | SKIP | bloqueado por install falho no `validate:release` (depêndencias ausentes) |
| Build | `npm run build` | SKIP | bloqueado por install falho no `validate:release` (depêndencias ausentes) |
| Typecheck | `npm run typecheck` | SKIP | bloqueado por install falho no `validate:release` (depêndencias ausentes) |
| Test | `npm run test` | PASS | `No automated tests configured yet` |
| Gate consolidado | `npm run validate:release` | FAIL | Script consolidado confirma bloqueio por rede+install e marca lint/build/typecheck como SKIP quando dependências não existem (root_cause: `network_registry_unreachable`) |
| Artefato de gate | `reports/release-gate.json` | GERADO | Snapshot JSON dos gates para auditoria/reprodutibilidade |
| Artefato de gate (humano) | `reports/release-gate.md` | GERADO | Resumo legível para operação manual |

## Checklist de release (gates mandatórios)
- [ ] `npm run lint` — obrigatório para aprovação do release.
- [ ] `npm run build` — obrigatório para aprovação do release.
- [ ] `npm run typecheck` — obrigatório para aprovação do release.
- [x] `npm run test` — executado, porém sem suíte automatizada real.
- [ ] Lighthouse nas páginas críticas (`/`, `/orcamento`, `/blog`) — bloqueado até build funcional.
- [ ] Teste manual de fluxo de lead (sucesso + validação + erro) — bloqueado até app subir localmente.

## Parecer de release PHASE_04
- **Status final:** `RELEASE NÃO APROVADO (gate fechado)`.
- **Motivo objetivo:** `lint`, `build` e `typecheck` estão reprovados por bloqueio de dependências (`npm install` com `403`).
- **Condição de fechamento definitivo:** somente marcar PHASE_04 como aprovada após `PASS` em todos os gates mandatórios e execução dos checks operacionais pendentes.

## Plano de desbloqueio imediato
1. Desbloquear acesso de rede/proxy corporativo para registries NPM (npmjs e mirror), removendo `403` no tunnel/connect.
2. Liberar acesso ao registry/política de segurança para instalar `@tailwindcss/postcss` e demais dependências.
3. Reexecutar em sequência: `npm run lint`, `npm run build`, `npm run typecheck`, `npm run test`.
4. Com app em execução, finalizar Lighthouse (`/`, `/orcamento`, `/blog`) e teste manual de lead.
5. Atualizar este arquivo trocando os itens pendentes para `[x]` somente com evidência de `PASS`.


## Depuração de código executada para PR
- [x] Script de validação unificada `scripts/validate-release.sh` + atalho `npm run validate:release` para consolidar decisão de gate.
- [x] Geração de artefato JSON (`reports/release-gate.json`) com status consolidado dos gates para consumo em auditoria/CI.
- [x] Geração de artefato Markdown (`reports/release-gate.md`) e `timestamp UTC` para leitura operacional rápida.
- [x] `hardening_backend`: extração consistente de identificador de cliente (`x-forwarded-for`/`x-real-ip`/`cf-connecting-ip`) para rate-limit.
- [x] `hardening_backend`: resposta `429` agora inclui header `Retry-After` para alinhamento com boas práticas HTTP.
- [x] Tipagem explícita de eventos de formulário no `LeadForm` para reduzir falhas de `strict`/`noImplicitAny` quando o ambiente de dependências for liberado.
- [x] Ajuste de tipagem no callback de `setForm` para evitar `TS7006` (parâmetro `current`).
- [x] Tratamento de falha de rede no submit do `LeadForm` com mensagem de fallback ao usuário e `finally` para restaurar estado de loading.
- [x] Fallback para resposta não-JSON da API no `LeadForm`, evitando quebra de UX quando o backend retorna payload inesperado.
- [ ] Revalidar `typecheck` após instalação de dependências para confirmar baseline limpa de erros de negócio.

## Rollback
- Reverter commit de hardening caso haja regressão de API/UI.
- Validar novamente o fluxo de envio de lead após rollback.
