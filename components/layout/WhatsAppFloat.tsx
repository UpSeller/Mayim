import { siteConfig } from '@/lib/site'

export function WhatsAppFloat() {
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento de carro pipa.'
  )}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-green-600"
      data-event="click_cta_principal"
      aria-label="Abrir WhatsApp da Mayim"
    >
      WhatsApp
    </a>
  )
}
