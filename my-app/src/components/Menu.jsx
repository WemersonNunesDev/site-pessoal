import Link from "next/link"

export default function Menu() {
    const anchor = {
        style: 'text-blue-500 font-regular border-1 border-blue-500 px-4 py-1 rounded',
        hover: 'hover:text-green-500 hover:border-green-500 transition duration-300 easi-in-out'
    }
    return (
        <nav className="mt-7 mb-24 flex gap-3">
            <Link className={`${anchor.style} ${anchor.hover}`} href="/">Inicio</Link>
            <Link className={`${anchor.style} ${anchor.hover}`} href="/projetos">Projetos</Link>
        </nav>
    )
}