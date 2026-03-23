import Link from 'next/link'

export default function SobrePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-900">Sobre a Mayim</h1>
      <p className="mt-4 text-slate-700">
        A Mayim oferece abastecimento de água potável com agilidade e atendimento
        local no Rio de Janeiro.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/servicos"
          className="rounded-md bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Nossos serviços
        </Link>
        <Link
          href="/areas-atendidas"
          className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
        >
          Áreas atendidas
        </Link>
      </div>
    </section>
  )
}
