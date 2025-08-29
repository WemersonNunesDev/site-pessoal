import ScrollReveal from "./ScrollReveal"

export default function Bio({ id }) {
    return(
        <div 
            id={id}
            className="w-full mx-auto my-32"
        >
            <ScrollReveal>
                <div className="h-[500px] grid grid-cols-2">
                    <section className="text-white flex flex-col justify-center">
                        <h2 className="font-semibold text-3xl mb-2">Olá, eu sou</h2>
                        <h2 className="font-semibold text-5xl capitalize bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-88% bg-clip-text text-transparent">wemerson nunes</h2>
                        <h2 className="text-white/72 text-xl my-4">Análista & Desenvolvedor Fullstack</h2>
                        <a href="files/WemersonNunes-Curriculo.pdf" download='WemersonNunes-Curriculo.pdf'
                        className="text-center bg-emerald-500 text-black text-md font-semibold px-2 py-1 rounded max-w-36 
                        hover:bg-gradient-to-l hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-32% hover:to-emerald-500 hover:to-88% hover:text-emerald-50
                        transition duration-300 ease-in-out">Baixar currículo</a>
                    </section>
                    <section className="flex justify-center items-center">
                        <div className="relative flex justify-center items-center w-32 h-32">
                            <div className="absolute w-full h-full rounded-full bg-radial from-sky-500/50 to-emerald/50 blur-2xl animate-pulse"></div>
                            <span className="text-8xl relative z-10">&#x1F578;</span>
                        </div>
                    </section>
                </div>
            </ScrollReveal>
        </div>
    )
}