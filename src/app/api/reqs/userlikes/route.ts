import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function GET() {
    const jwt = cookies().get("jwt")?.value;
    const userId = cookies().get("id")?.value;

    const res = await fetch(`${process.env.STRAPI_API}/api/favourites?filters[user][id][$eq]=${userId}&populate=*`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    });

    const data = await res.json();
    return NextResponse.json(data);
}