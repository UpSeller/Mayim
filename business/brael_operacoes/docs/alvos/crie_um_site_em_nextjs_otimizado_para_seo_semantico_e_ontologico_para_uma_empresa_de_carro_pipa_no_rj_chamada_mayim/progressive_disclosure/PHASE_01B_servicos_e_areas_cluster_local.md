## Objetivo (1 frase)
Publicar o núcleo de páginas de serviços e áreas atendidas com cluster semântico local e linkagem interna básica.

## Escopo (IN / OUT)
- **IN:** hub de serviços, páginas-chave de serviço, hub de áreas e páginas locais prioritárias.
- **OUT:** blog completo, automações avançadas de conteúdo.

## Entregáveis verticais Backend Frontend Validação Documentação
- **Backend:** metadados por rota e schema Service/Breadcrumb.
- **Frontend:** páginas de serviços e áreas com CTA e FAQ curto.
- **Validação:** verificação de canibalização e links internos.
- **Documentação:** matriz keyword → rota → intenção.

## DoR (Definition of Ready) — checklist e bloqueios
- [ ] PHASE_01A concluída.
- [ ] Lista de keywords por página aprovada.
- [ ] Bloqueio: conflito de intenção entre páginas de serviço.

## Checklist da fase (técnico + produto)
- [ ] Criar páginas de serviços prioritários.
- [ ] Criar páginas de áreas atendidas prioritárias.
- [ ] Implementar breadcrumbs e links cruzados.
- [ ] Inserir CTA contextual em todas as páginas.

## Ordem técnica obrigatória Backend: schema → model → service → route → api_router Frontend: types → service/store → view/component
- **Backend:** schema (Service/BreadcrumbList) → model (tipos rota/keyword) → service (metadata builders) → route (páginas) → api_router (N/A).
- **Frontend:** types (cards e seções) → service/store (conteúdo por rota) → view/component (templates páginas).

## Delta de contrato esperado (se aplicável) antes/depois status codes * breaking change? migração?
- Contrato de rotas públicas expandido.
- Antes: home principal.
- Depois: `/servicos/*` e `/areas-atendidas/*` prioritárias.
- Status code: 200/404 padrão.
- Breaking change: Não.
- Migração: Não.

## Observabilidade mínima logs eventos (se fizer sentido) * métricas de sucesso/erro
- Logs: route_render_service, route_render_area, route_not_found.
- Métricas: CTR por página de serviço, cliques em links internos para orçamento.

## Validação mínima (comandos) backend frontend * lint/checks
- `npm run lint`
- `npm run build`
- `npm run typecheck`
- Crawl manual das novas rotas

## Riscos + mitigação
- **ALTO:** canibalização de páginas locais. Mitigação: matriz de intenção + título único por rota.
- **MÉDIO:** linkagem interna fraca. Mitigação: checklist mínimo de links por página.

## Plano de rollback
- **o que reverter:** rotas de serviços/áreas adicionadas nesta fase.
- **como reverter:** revert do commit.
- **impacto:** perda do cluster local orgânico.
- **verificação pós-rollback:** sitemap e rotas restantes funcionais.

## DoD (Definition of Done)
- Núcleo de serviços/áreas publicado com metadata e schema básicos.
- Links internos e CTAs funcionais.
- Documentação de keyword mapping atualizada.

## Template de PR específico desta fase
```md
## PHASE_01B_servicos_e_areas_cluster_local
### Entrega
- Rotas de serviços e áreas prioritárias
- Breadcrumb + interlinking

### Delta de contrato
- Rotas adicionadas:
- Impacto SEO local:

### Validação
- [ ] npm run lint
- [ ] npm run build
- [ ] npm run typecheck
- [ ] Crawl manual
```

## Saída YAML esperada ao concluir a fase
```yaml
fase_id: PHASE_01B
status: done
rotas_novas:
  servicos: []
  areas_atendidas: []
interlinking:
  ativo: true
  links_por_pagina_minimo: 3
proxima_fase: PHASE_02
```

## Loop de depuração (até 100)
- Ao final de cada microtarefa desta fase, executar obrigatoriamente um ciclo do loop intensivo.
- Critérios de parada: máximo 100; encerrar com 5 testes consecutivos sem falhas.
- Comandos: `npm run lint`, `npm run build`, crawl manual de rotas novas.
- Verificar: metadata única, links internos, CTA visível, regressões de navegação.
- Registro no `log-<slug>.md`: execução por loop com severidade e correções.
