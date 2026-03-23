import Link from 'next/link'
import { Logo } from './Logo'

const links = [
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/areas-atendidas', label: 'Áreas atendidas' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
]

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Logo />
        <nav aria-label="Navegação principal">
          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue-700">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/orcamento"
                className="rounded-md bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600"
              >
                Solicitar orçamento
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
