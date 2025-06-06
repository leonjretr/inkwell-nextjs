import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const userId = searchParams.get('user');
    const storyId = searchParams.get('story');
    const jwt = cookies().get("jwt")?.value;

    const res = await fetch(`${process.env.STRAPI_API}/api/favourites?filters[user][id][$eq]=${userId}&filters[story][id][$eq]=${storyId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    });

    const data = await res.json();
    return NextResponse.json(data);
}