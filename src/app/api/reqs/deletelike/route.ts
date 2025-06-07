import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function DELETE(req: Request) {
    const {searchParams} = new URL(req.url);
    const storyId = searchParams.get("storyId");
    const jwt = cookies().get("jwt")?.value;
    const userId = cookies().get("id")?.value;

    console.log("юзерайди: " + userId);
    console.log("стори айди: " + storyId);
    // First, find the favourite ID
    const getRes = await fetch(`http://localhost:1337/api/favourites?filters[user][id][$eq]=${userId}&filters[story][id][$eq]=${storyId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    });

    const data = await getRes.json();
    const favId = data?.data?.[0]?.id;
    console.log("АЙДИ ФАВОРИТКИ: " + favId)
    if (!favId) {
        return NextResponse.json({message: 'Favourite not found'}, {status: 404});
    }

    await fetch(`http://localhost:1337/api/favourites/${favId}&populate=*`, {
        method: 'DELETE',
        // headers: {
        //     Authorization: `Bearer ${jwt}`,
        // }
    });

    return NextResponse.json({message: 'Deleted successfully'});
}