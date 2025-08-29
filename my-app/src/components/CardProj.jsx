export default function CardProj({ imgSrc, alt='Imagem projeto', title='Nome do projeto', text='Tecnologias usadas no projeto', linkProjeto, linkGit }) {
    return(
        <div className="flex flex-col flex-1 basis-full sm:basis-1/2 lg:basis-1/3">
            <img src={imgSrc} alt={alt} className="text-emerald-400 bg-white/4 rounded text-xl h-[200px]"/>

            <div className="my-6 flex flex-col gap-4">
                <h2 className="text-white font-semibold text-xl capitalize">{title}</h2>
                <p className="text-emerald-400">{text}</p>
            </div>

            <div className="flex gap-4 mt-auto">
                <a href={linkProjeto} target="_blank" className="flex justify-center items-center text-black font-semibold rounded px-6 md:text-sm py-1 cursor-pointer
                bg-emerald-400
                hover:bg-gradient-to-r hover:from-indigo-500 hover:from-8% hover:via-sky-500 hover:via-32% hover:to-emerald-500 hover:to-88% hover:text-emerald-50
                transition duration-300 ease-in-out">
                    Acessar projeto
                </a>
                
                <a href={linkGit} target="_blank" className="flex justify-center items-center text-emerald-400 bg-transparent border-2 rounded px-6 py-1 md:text-sm cursor-pointer
                border-emerald-400
                hover:border-sky-500 hover:text-sky-100 
                transition duration-300 ease-in-out">
                    Acessar repositório
                </a>
            </div>
        </div>
    )
}