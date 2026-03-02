import type { LogEvent, LogLevel } from '@/types/observability'

function createLog(level: LogLevel, event: string, message: string, context?: Record<string, unknown>): LogEvent {
  return {
    level,
    event,
    message,
    context,
    timestamp: new Date().toISOString(),
  }
}

export function logInfo(event: string, message: string, context?: Record<string, unknown>) {
  console.info(JSON.stringify(createLog('info', event, message, context)))
}

export function logWarn(event: string, message: string, context?: Record<string, unknown>) {
  console.warn(JSON.stringify(createLog('warn', event, message, context)))
}

export function logError(event: string, message: string, context?: Record<string, unknown>) {
  console.error(JSON.stringify(createLog('error', event, message, context)))
}
