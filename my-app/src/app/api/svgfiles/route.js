// /app/api/svgfiles/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const logoPath = path.join(process.cwd(), 'public', 'logo');

    try {
        const files = fs.readdirSync(logoPath);
        const svgFiles = files.filter(file => file.endsWith('.svg'));

        return NextResponse.json({ svgFiles });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao ler arquivos' }, { status: 500 });
    }
}
