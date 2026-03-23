export type LogLevel = 'info' | 'warn' | 'error'

export type LogEvent = {
  level: LogLevel
  event: string
  message: string
  context?: Record<string, unknown>
  timestamp: string
}
