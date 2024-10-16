import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function POST() {
    const cookieStore = cookies();
    cookieStore.delete("jwt");
    if (!cookieStore.get("jwt")?.value) {
        return NextResponse.json({message: "Logout successful"}, {status: 200})
    } else {
        return NextResponse.json({message: "Logout failed"}, {status: 400})
    }
}