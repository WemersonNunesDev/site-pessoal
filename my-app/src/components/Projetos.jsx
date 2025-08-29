import ScrollReveal from "./ScrollReveal";
import CardProj from "@/components/CardProj";
import { meusProjetos } from "@/listProj/myProjects"

export default function Projetos({ id }) {
    return(
        <section id={id} className="mb-64">
            <ScrollReveal>
                <h1 className="text-emerald-400 text-3xl font-semibold text-center pt-4 mb-8">Projetos</h1>

                <div className="flex flex-wrap gap-6">
                    {meusProjetos.map(projeto => (
                        <CardProj
                            key={projeto.name}
                            title={projeto.name}
                            text={projeto.description}
                            linkProjeto={projeto.urlVercel}
                            linkGit={projeto.urlGit}
                        />
                    ))}
                </div>
            </ScrollReveal>
        </section>
    )
}