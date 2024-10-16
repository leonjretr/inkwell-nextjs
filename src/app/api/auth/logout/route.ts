import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import registerStore from "@/stores/registerStore";

export async function POST() {
    const cookieStore = cookies();
    cookieStore.delete("jwt");
    if (!cookieStore.get("jwt")?.value) {
        registerStore.setAuthorizedTrue();
        return NextResponse.json({message: "Logout successful"}, {status: 200})
    } else {
        registerStore.setAuthorizedFalse();
        return NextResponse.json({message: "Logout failed"}, {status: 400})
    }
}