'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CardsSkils() {
    const [svgFiles, setSvgFiles] = useState([]);
    const [hoveredFigure, setHoveredFigure] = useState(null);

    let description = '*Passe o mouse por cima para ver a descrição';

    switch(hoveredFigure) {
        case 'css.svg':
            description = 'É uma linguagem de estilo utilizada para controlar o visual de uma página Web';
            break;
        case 'html.svg':
            description = 'É uma linguagem de marcação usada para criar a estrutura e o conteúdo de páginas web';
            break;
        case 'javascript.svg':
            description = 'É uma linguagem de programação de alto nível, usada principalmente para criar interatividade em páginas web';
            break;
        case 'express.svg':
            description = 'É um framework web minimalista e flexível para Node.js'
            break;
        case 'figma.svg':
            description = 'É uma ferramenta de design colaborativa usada para criar interfaces de usuário (UI)'
            break;
        case 'node-js.svg':
            description = 'Baseado em JavaScript, é usado para construir aplicações do lado do servidor'
            break;
        case 'git.svg':
            description = 'É um sistema de controle de versão usado para gerenciar alterações em arquivos ao longo do tempo'
            break;
        case 'react-tec.svg':
            description = 'Uma framework baseada em JavaScript para construir interfaces de usuário interativas. É usada para criar componentes reutilizáveis que podem ser combinados para formar interfaces complexas'
            break;
        case 'sql.svg':
            description = 'É uma linguagem de programação padrão utilizada para gerenciar e manipular dados em bancos de dados relacionais'
            break;
        case 'tailwind.svg':
            description = 'É um framework CSS "utility-first" que oferece um conjunto de classes utilitárias para estilizar diretamente o HTML, permitindo um desenvolvimento rápido e personalizado de interfaces de usuário.'
            break;
        default:
            break;
    }

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
        <article className='grid grid-cols-2 gap-2'>
            <section className='flex'>
                        <span className={`transition-colors duration-300 ${hoveredFigure ? 'text-gray-50 opacity-85' : 'text-gray-300 opacity-45'}`}>{description}</span>
            </section>

            <div className="grid grid-cols-4 gap-4 justify-center items-center">
                {svgFiles.map((file, index) => (
                    <Image
                        key={index}
                        src={`/logo/${file}`}
                        alt={`Logo ${file}`}
                        width={72}
                        height={72}
                        className='border-gray-300 border-1 px-3 py-2 w-[256px] rounded'
                        onMouseEnter={() => setHoveredFigure(file)}
                        onMouseLeave={() => setHoveredFigure(null)}
                    />
                ))}
            </div>
        </article>
    );
}
