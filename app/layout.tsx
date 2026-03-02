import './globals.css'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd'
import { ClientTelemetry } from '@/components/layout/ClientTelemetry'
import { getDefaultMetadata } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = getDefaultMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
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
