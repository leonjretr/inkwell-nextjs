import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function POST(req: Request) {

    const {storyId} = await req.json();

    const jwt = cookies().get("jwt")?.value;
    const userId = cookies().get("id")?.value;

    console.log("STORY ID: " + storyId);
    const postFav = await fetch(`${process.env.STRAPI_API}/api/favourites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify({
            data: {
                user: {
                    id: userId
                },
                story: {
                    id: storyId,
                },
            }
        }),
    });
    const resp = await postFav.json();

    if (postFav.ok) {
        return NextResponse.json({message: 'Story posted successfully'}, {status: 200});
    } else {
        return NextResponse.json({message: 'Posting failed. Try again', error: resp.error}, {status: 400});
    }

}