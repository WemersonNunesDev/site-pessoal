import Navbar from "@/components/Navbar";
import Bio from "@/components/Bio";
import About from "@/components/About";
import Projetos from "@/components/Projetos";
import CardServ from "@/components/CardServ";
import Habilit from "@/components/Habilit";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <div>
        <section className="container-base mx-auto px-4">
          <Navbar />
          <Bio id={'inicio'} />
          <About id={'about'} />
          <Projetos id={'projetos'} />
          <section id="servicos" className="mb-64">
            <ScrollReveal>
              <h1 className="text-emerald-400 text-center text-3xl mb-8">Serviços</h1>
              <div className="flex justify-center gap-8">
                <CardServ title={'Criação de sites'}/>
                <CardServ title={'Sites Responsivos'}/>
              </div>
            </ScrollReveal>
          </section>

          <section id="habilidades" className="mb-32">
            <h1 className="text-3xl text-emerald-500 text-center py-4">Habilidade</h1>
            <div className="flex flex-row gap-4">
              <Habilit pathImg={'img/icons/js-icon.svg'} altDesc={'Tecnologia Javascript'} />
              <Habilit pathImg={'img/icons/react-icon.svg'} altDesc={'Tecnologia Javascript'} />
              <Habilit pathImg={'img/icons/tailwind-icon.svg'} altDesc={'Tecnologia Javascript'} />
            </div>
          </section>
        </section>

      <footer className="bg-neutral-900 p-4">
        <div className="container-base mx-auto flex flex-col justify-center">
          <h3 className="text-zinc-50">Wemerson Nunes</h3>
          <p className="text-zinc-50">&#169;	2025 by wemerson.dev.br</p>
        </div>
      </footer>
    </div>
  );
}
