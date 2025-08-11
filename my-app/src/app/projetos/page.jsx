import Menu from "@/components/Menu"
import { meusProjetos } from "@/listProj/myProjects"

export default function Projetos() {
    return (
        <div className="container mx-auto">
            <Menu />
            <main className="">
                <h1 className="text-blue-500 text-3xl mb-8">Projetos</h1>

                <ul>
                    {meusProjetos.map(projeto => (
                        <li key={projeto.name} className=" border p-4 rounded text-teal-500">
                            <h2 className="text-xl uppercase mb-4">{projeto.name}</h2>
                            <p className="mb-3 text-white/72">
                                {projeto.description}
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href={projeto.urlGit}
                                    target="_blank"
                                    className="text-orange-300 text-sm font-medium capitalize border px-2 py-1 hover:text-teal-400 transition duration-300 ease-in-out"
                                >
                                    gitHub
                                </a>
                                <a
                                    href={projeto.urlVercel}
                                    target="_blank"
                                    className="text-yellow-300 text-sm font-medium capitalize border px-2 py-1 hover:text-teal-400 transition duration-300 ease-in-out"
                                >
                                    vercel
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}