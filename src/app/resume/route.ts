import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const RESUME_PATH = path.join(process.cwd(), 'public', 'Piyush Sagar Resume.pdf');

export async function GET() {
  try {
    const fileBuffer = await fs.readFile(RESUME_PATH);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Piyush Sagar Resume.pdf"',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Resume not found' }, { status: 404 });
  }
}

export async function HEAD() {
  try {
    await fs.access(RESUME_PATH);
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Piyush Sagar Resume.pdf"',
      },
    });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}
