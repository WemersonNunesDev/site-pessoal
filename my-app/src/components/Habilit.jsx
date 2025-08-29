export default function Habilit({ pathImg, altDesc }) {
    return(
        <div className="h-64 w-64 bg-neutral-900 flex flex-1 basis-full sm:basis-1/2 lg:basis-1/3 justify-center items-center p-2 border border-zinc-400/25">
            <img src={pathImg} alt={altDesc} />
        </div>
    )
}