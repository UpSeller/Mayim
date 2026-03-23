import './globals.css'
import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd'
import { ClientTelemetry } from '@/components/layout/ClientTelemetry'
import { getDefaultMetadata } from '@/lib/seo'

export const metadata = getDefaultMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <LocalBusinessJsonLd />
        <ClientTelemetry />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
