import ScrollReveal from "./ScrollReveal"

export default function About({ id }) {
    
    return(
        <section id={id} className="w-full mx-auto pt-4 mt-32 mb-64">
            <ScrollReveal>
                <div className="h-[405px] flex flex-col justify-between">
                    <div className="text-center">
                        <h2 className="text-emerald-400 text-2xl mb-8">Sobre mim</h2>
                        <p className="text-white/88">
                            Meu nome é Wemerson Nunes, sou desenvolvedor Fullstack em formação no curso de Análise e Desenvolvimento de Sistemas <span>&#40;2027&#41;</span>. Desenvolvo interfaces modernas e de alta qualidade, concentrando em performace, responsividade e SEO.
                        </p>
                    </div>
                    <ul className="w-[68%] mx-auto flex justify-between">
                        <li className="flex flex-col gap-2 text-white items-center">
                            <img src="img/icons/smile_icon_google.svg" alt="#" className="bg-white/6 p-2 rounded-4xl"/>
                            <strong>Nome</strong>
                            <p className="text-white/88">Wemerson Nunes</p>
                        </li>
                        <li className="flex flex-col gap-2 text-white items-center">
                            <img src="img/icons/mail_icon_google.svg" alt="#"  className="bg-white/6 p-2 rounded-4xl"/>
                            <strong>E-mail</strong>
                            <p className="text-white/88">wemersononunes@gmail.com</p>
                        </li>
                        <li className="flex flex-col gap-2 text-white items-center">
                            <img src="img/icons/insta_icon_iconify.svg" alt="#" className="w-16 bg-white/6 p-2 rounded-4xl"/>
                            <strong>Instagram</strong>
                            <p className="text-white/88">@wemerson.onunes</p>
                        </li>
                        <li className="flex flex-col gap-2 text-white items-center">
                            <img src="img/icons/phone_icon_google.svg" alt="#"  className="bg-white/6 p-2 rounded-4xl"/>
                            <strong>Telefone</strong>
                            <p className="text-white/88">&#40;22&#41; 99222-4998</p>
                        </li>
                    </ul>
                </div>
            </ScrollReveal>
        </section>
    )
}