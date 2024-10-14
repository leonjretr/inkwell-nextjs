import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function PUT(req: Request) {

    const cookieStore = cookies();
    const {name, userId} = await req.json();
    const token = cookieStore.get('jwt')?.value;

    const updateRes = await fetch(`${process.env.STRAPI_API}/api/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: name,
        }),
    });
    const data = await updateRes.json();
    if (updateRes.ok) {
        // Return a success message
        return NextResponse.json({message: 'User updated successfully'}, {status: 200});
    } else {
        // Handle error if update fails
        return NextResponse.json({message: 'Update failed', error: data, data: userId}, {status: 400});
    }
}
