# PHASE_02 — Delta de contrato da API de leads + playbook

## Endpoints
- `POST /api/contato`
- `POST /api/orcamento`

## Payload de entrada
```json
{
  "nome": "string",
  "telefone": "string",
  "email": "string (opcional)",
  "bairro": "string",
  "tipoServico": "abastecimento-residencial | abastecimento-comercial | abastecimento-obras | abastecimento-piscinas | lavagem-de-ruas | umectacao-e-irrigacao",
  "urgencia": "baixa | media | alta",
  "mensagem": "string"
}
```

## Payload de saída
```json
{
  "success": "boolean",
  "protocol": "string (opcional)",
  "message": "string"
}
```

## Status codes
- `200`: envio aceito com protocolo
- `422`: erro de validação de payload (alinhado ao contrato final da PHASE_04)
- `429`: limitação de taxa ativa (com cabeçalho `Retry-After` em segundos)
- `500`: reservado para erro interno (evolução futura)

## Playbook de atendimento (MVP)
1. Receber lead com `protocol`.
2. Priorizar `urgencia=alta`.
3. Retornar contato inicial em até 15 minutos para alta urgência.
4. Confirmar serviço, bairro e janela de entrega.
5. Registrar desfecho (convertido / perdido) para análise futura.
