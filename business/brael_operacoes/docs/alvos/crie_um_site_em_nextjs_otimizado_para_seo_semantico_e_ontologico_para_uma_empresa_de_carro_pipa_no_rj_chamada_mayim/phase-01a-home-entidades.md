# PHASE_01A — Mapa de entidades e delta semântico da Home

## Entidade principal
- `LocalBusiness`: Mayim Carro Pipa (`@id: https://mayim.com.br/#organization`), publicada no layout global.

## Entidade complementar na Home
- `Service`: "Carro pipa no Rio de Janeiro" com provider apontando para a entidade `LocalBusiness`.

## Delta semântico aplicado
- Antes: home introdutória com bloco hero e CTA principal.
- Depois:
  - H1 único com keyword local.
  - Seções semânticas com `section`/`article`.
  - `address` explícito na CTA final.
  - JSON-LD de serviço na home, mantendo LocalBusiness no layout.

## Checklist de campos principais (LocalBusiness)
- `name`: ok
- `description`: ok
- `telephone`: ok
- `address`: ok
- `areaServed`: ok
- `openingHoursSpecification`: ok
- `sameAs`: ok

## Observação
A validação em Rich Results Test está pendente de execução fora deste ambiente, devido indisponibilidade local de runtime Next.js com dependências instaladas.
