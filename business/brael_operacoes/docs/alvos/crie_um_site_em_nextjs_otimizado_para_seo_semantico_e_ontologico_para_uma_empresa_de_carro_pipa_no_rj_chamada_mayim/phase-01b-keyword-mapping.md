# PHASE_01B — Matriz keyword → rota → intenção

| Keyword principal | Rota | Intenção |
|---|---|---|
| carro pipa residencial rj | /servicos/abastecimento-residencial | Transacional (orçamento) |
| carro pipa comercial rj | /servicos/abastecimento-comercial | Transacional B2B |
| carro pipa obra rj | /servicos/abastecimento-obras | Transacional (obra) |
| encher piscina carro pipa rj | /servicos/abastecimento-piscinas | Transacional |
| lavagem rua carro pipa rj | /servicos/lavagem-de-ruas | Serviço local |
| umectação vias rj | /servicos/umectacao-e-irrigacao | Serviço técnico |
| carro pipa zona sul rj | /areas-atendidas/zona-sul | Local + transacional |
| carro pipa zona norte rj | /areas-atendidas/zona-norte | Local + transacional |
| carro pipa zona oeste rj | /areas-atendidas/zona-oeste | Local + transacional |
| carro pipa barra da tijuca | /areas-atendidas/barra-da-tijuca | Local + transacional |
| carro pipa centro rj | /areas-atendidas/centro | Local B2B |
| carro pipa niterói | /areas-atendidas/niteroi | Local + transacional |
| carro pipa baixada fluminense | /areas-atendidas/baixada-fluminense | Local + transacional |

## Regra anti-canibalização
- Cada rota possui `title`/`description` únicos.
- Páginas de serviço focam no tipo de demanda; páginas de área focam na geografia.
- Interlinking cruzado com mínimo de 3 links contextuais por página.
