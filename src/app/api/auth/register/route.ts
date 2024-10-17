import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function POST(req: Request) {

    const {username, email, password} = await req.json();

    const registerRes = await fetch(`${process.env.STRAPI_API}/api/auth/local/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        }),
    });
    const data = await registerRes.json();

    // Handle response (saving JWT token)
    if (registerRes.ok && data.jwt) {
        // Store JWT in a cookie
        cookies().set({
            name: 'jwt',
            value: data.jwt,
            httpOnly: true,   // Security measure: Makes the cookie HttpOnly
            secure: process.env.NODE_ENV === 'production', // Use secure flag in production (HTTPS)
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // Set cookie for 1 week
            sameSite: 'strict',       // Prevent CSRF attacks
        })
        // After registration, make an additional request to update the user's name
        return NextResponse.json({message: 'Registration successful', user: data}, {status: 200});
    } else {
        // Handle error if registration fails
        return NextResponse.json({message: 'Registration failed', error: data.error}, {status: 400});
    }
}
