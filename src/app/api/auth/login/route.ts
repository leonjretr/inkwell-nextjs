import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    const { identifier, password } = await req.json();

    // Send login request to Strapi's API
    const loginRes = await fetch(`${process.env.STRAPI_API}/api/auth/local`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            identifier: identifier,
            password: password,
        }),
    });

    const data = await loginRes.json();

    if (loginRes.ok && data.jwt) {
        cookies().set({
            name: 'jwt',
            value: data.jwt,
            httpOnly: true,   // Security measure: Makes the cookie HttpOnly
            secure: process.env.NODE_ENV === 'production', // Use secure flag in production (HTTPS)
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // Set cookie for 1 week
            sameSite: 'strict',       // Prevent CSRF attacks
        });
        // Send success response
        return NextResponse.json({ message: 'Login successful' });
    } else {
        // Send error response
        return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
    }
}
