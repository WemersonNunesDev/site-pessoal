import Menu from "@/components/Menu"
import Image from "next/image"
import CardSkils from "@/components/CardsSkils.server"


export default function BioHome() {
    return (
        <div className="w-auto">
            <Menu />
                <section className="grid grid-cols-2">
                    <div className="flex flex-col gap-2 justify-center items-left">
                        <h1 className="text-gray-50-500 md:text-2xl lg:text-[27px] xl:text-3xl font-bold"><span>&#x1F44B;</span> Olá, eu sou o Wemerson</h1>
                        <h2 className="text-blue-500 md:text-[18px] lg:text-[20px] xl:text-2xl font-medium">Desenvolvedor Full-Stack React | Node.js</h2>
                        <p className="text-gray-300">Crio interfaces responsivas e modernas focado em alta performacer.</p>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <Image
                            src={'/img/react.svg'}
                            alt="Logo do React"
                            width={88}
                            height={88}
                        />
                        <Image
                            src={'/img/node.svg'}
                            alt="Logo do Node"
                            width={88}
                            height={88}
                        />
                    </div>
                </section>
                <article className="mt-32">
                    <section className="md:felx lg:grid lg:grid-cols-2">
                        <div className="flex flex-col gap-2 text-gray-300 justify-center">
                            <h1 className="text-blue-500 md:text-2xl lg:text-3xl font-semibold">Sobre mim</h1>
                            <p>
                                Sou um programador apaixonado por JavaScript, com experiência em React e TailwindCSS no front-end, além de Node.js e Express no back-end. Também estou me aprofundando em bancos de dados como MySQL e MongoDB.
                            </p>
                            <p>
                                <span className="text-xl">&#x1F4DA;</span> Atualmente, curso Análise e Desenvolvimento de Sistemas (ADS) pela Anhanguera, com previsão de conclusão em 2027.
                            </p>
                            <p>
                                Fora do teclado, sou mestre de RPG de mesa, cinéfilo, autodidata incansável — e perdidamente apaixonado pela minha esposa <span>&#x1F499;</span>
                            </p>
                        </div>
                        <aside className="flex justify-center items-center">
                            <Image src={'/img/tableDev.png'} alt="Imagem de um programador trabalhando" width={324} height={324} />
                        </aside>
                    </section>
                </article>
                <article className="mt-56 mb-32 felx justify-center items-center">
                    <aside className="h-[400px] bg-[url('/img/wemerson.jpg')] bg-cover bg-right-top bg-no-repeat rounded-2xl">
                        <div className="h-full flex flex-col justify-end items-end gap-2 px-4 py-3 bg-linear-to-l from-gray-900 from-10% to-transparent to-90%">
                            <h2 className="text-xl font-bold"><span>&#x1F382;</span> Idade</h2>
                            <p>24 anos</p>
                            <h2 className="text-xl font-bold"><span>&#x1F30E;</span> Localização</h2>
                            <p>Rio das Ostras, RJ</p>
                            <h2 className="text-xl font-bold"><span>&#x1F393;</span> Formação</h2>
                            <p>Análise e Desenvolvimento de Sistemas - Anhanguera</p>
                            <p>Conclusão prevista: Janeiro de 2027</p>
                        </div>
                    </aside>
                </article>
                <article className="mb-32">
                    <h1 className="text-blue-500 text-3xl font-semibold mt-32 mb-3">Conhecimento</h1>
                    <CardSkils />
                </article>
        </div>
    )
}