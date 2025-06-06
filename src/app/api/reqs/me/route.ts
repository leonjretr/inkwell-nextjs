import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function GET() {
    const token = cookies().get("jwt")?.value;

    const getMyData = await fetch(`${process.env.STRAPI_API}/api/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        cache: "force-cache",
    });
    const data = await getMyData.json();

    if (getMyData.ok) {
        cookies().set({
            name: "id",
            value: data.id,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7 * 55,
            sameSite: 'strict',
        })
        cookies().set({
            name: "username",
            value: data.username,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7 * 55,
            sameSite: 'strict',
        })
        return NextResponse.json({message: 'Data received successful', data: data});
    } else {
        // Send error response
        return NextResponse.json({message: 'Data has not been received'}, {status: 401});
    }
}