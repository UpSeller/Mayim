export type LeadPayload = {
  nome: string
  telefone: string
  email?: string
  bairro: string
  tipoServico: string
  urgencia: 'baixa' | 'media' | 'alta'
  mensagem: string
}

export type LeadApiResponse = {
  success: boolean
  protocol?: string
  message: string
}
