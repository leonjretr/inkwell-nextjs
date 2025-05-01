import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { cookieName } = await request.json();

        if (!cookieName) {
            return NextResponse.json(
                { error: 'Cookie name is required' },
                { status: 400 }
            );
        }

        const cookieValue = request.cookies.get(cookieName)?.value || null;

        return NextResponse.json({ cookieValue });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch cookie' },
            { status: 500 }
        );
    }
}