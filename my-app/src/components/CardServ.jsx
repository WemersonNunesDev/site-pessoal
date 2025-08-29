export default function CardServ({ imgSrc, title }) {
    return(
        <div className="w-full h-[240px] bg-white/4 border-b-4 border-emerald-400 flex justify-left items-center gap-6 pl-6">
            <div className="w-[30%]">
                <span className="text-emerald-400 text-5xl">&lt; &gt;</span>
                <h2 className="text-white/80 text-3xl mt-6">{title}</h2>
            </div>
        </div>
    )
}