import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('jwt')?.value;

    if (!token && request.nextUrl.pathname.startsWith('/myprofile')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/myprofile/:path*'],
};