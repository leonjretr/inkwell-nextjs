import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function POST(req: Request) {

    const {title, description, story_text, genre} = await req.json();
    const jwt = cookies().get("jwt")?.value;
    // console.log(jwt)

    const registerRes = await fetch(`${process.env.STRAPI_API}/api/stories`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify({
            data: {
                title: title,
                description: description,
                story_text: story_text,
                genre: {
                    id: genre
                }
            }
        }),
    });

    const resp = await registerRes.json();

    // Handle response (saving JWT token)
    if (registerRes.ok) {
        return NextResponse.json({message: 'Story posted successfully'}, {status: 200});
    } else {
        // Handle error if registration fails
        return NextResponse.json({message: 'Posting failed. Try again', error: resp.error}, {status: 400});
    }
}
