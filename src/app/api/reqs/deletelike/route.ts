import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function DELETE(req: Request) {
    const { story } = await req.json();
    const jwt = cookies().get("jwt")?.value;
    const userId = cookies().get("id")?.value;

    // First, find the favourite ID
    const getRes = await fetch(`${process.env.STRAPI_API}/api/favourites?filters[user][id][$eq]=${userId}&filters[story][id][$eq]=${story}`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    });

    const data = await getRes.json();
    const favId = data?.data?.[0]?.id;

    if (!favId) {
        return NextResponse.json({ message: 'Favourite not found' }, { status: 404 });
    }

    const delRes = await fetch(`${process.env.STRAPI_API}/api/favourites/${favId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    });
    const res = await delRes.json();

    return NextResponse.json({ message: 'Deleted successfully', data: res });
}