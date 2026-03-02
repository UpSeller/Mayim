'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ClientTelemetry() {
  const pathname = usePathname()

  useEffect(() => {
    console.info(
      JSON.stringify({
        level: 'info',
        event: 'page_view',
        message: 'Visualização de página',
        context: { pathname },
        timestamp: new Date().toISOString(),
      })
    )
  }, [pathname])

  return null
}
