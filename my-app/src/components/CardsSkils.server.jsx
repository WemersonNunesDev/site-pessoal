'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CardsSkils() {
    const [svgFiles, setSvgFiles] = useState([]);

    useEffect(() => {
        const fetchSVGs = async () => {
        try {
            const res = await fetch('/api/svgfiles');
            const data = await res.json();
            setSvgFiles(data.svgFiles || []);
        } catch (error) {
            console.error("Erro ao buscar os arquivos SVG:", error);
        }
        };

        fetchSVGs();
    }, []);

    return (
        <article className='grid grid-cols-2'>
            <section className='flex'>
                <span className='text-gray-300 opacity-45'>*Passe o mouse por cima para ver a descrição</span>
            </section>

            <div className="grid grid-cols-4 gap-4 justify-center items-center">
                {svgFiles.map((file, index) => (
                    <Image
                        key={index}
                        src={`/logo/${file}`}
                        alt={`Logo ${file}`}
                        width={72}
                        height={72}
                        className='border-gray-300 border-1 px-3 py-2 w-[256px]'
                    />
                ))}
            </div>
        </article>
    );
}
