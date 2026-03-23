import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Mayim - Página inicial">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Water drop shape */}
        <path
          d="M18 3C18 3 6 16.5 6 23a12 12 0 0 0 24 0C30 16.5 18 3 18 3Z"
          fill="url(#dropGradient)"
        />
        {/* Inner highlight */}
        <path
          d="M14 24a5 5 0 0 0 10 0c0-4-5-9.5-5-9.5S14 20 14 24Z"
          fill="url(#innerGradient)"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="dropGradient" x1="18" y1="3" x2="18" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="19" y1="14.5" x2="19" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#93C5FD" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold text-blue-700">Mayim</span>
    </Link>
  )
}
