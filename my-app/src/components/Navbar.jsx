export default function Navbar() {
    return(
        <header className="flex justify-between border-b-2 border-zinc-900 py-4">
            <h2 className="text-emerald-500 text-xl capitalize">&lt;wemerson nunes &#47;&gt;</h2>

            <ul className="text-white text-md flex justify-center items-center gap-4">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#about">Sobre mim</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
            </ul>
        </header>
    )
}