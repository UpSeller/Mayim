export function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const cfIp = request.headers.get('cf-connecting-ip')

  const firstForwarded = forwardedFor
    ?.split(',')
    .map((part) => part.trim())
    .find(Boolean)

  return firstForwarded || realIp || cfIp || 'local'
}
