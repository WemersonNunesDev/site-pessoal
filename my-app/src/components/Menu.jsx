export default function Menu() {
    const anchor = {
        style: 'text-blue-500 font-regular border-1 border-blue-500 px-4 py-1 rounded',
    }
    return (
        <nav className="mt-7 mb-24 flex gap-3">
            <a className={`${anchor.style}`} href="#">Inicio</a>
            <a className={`${anchor.style}`} href="#">Projetos</a>
        </nav>
    )
}