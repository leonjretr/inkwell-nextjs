import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import jwt from 'jsonwebtoken';

export async function GET() {
    const token = cookies().get("jwt")?.value;
    const secret = process.env.JWT_SECRET;
    const id = cookies().get("id")?.value;
    if (!token) {
        return NextResponse.json({message: "Unauthorized", id: id}, {status: 401});
    }
    if (secret) {
        try {
            const decoded = jwt.verify(token, secret);
            return NextResponse.json({message: 'Authorized', decoded: decoded}, {status: 200});
        } catch (error) {
            return NextResponse.json({message: 'Unauthorized'}, {status: 401});
        }
    }
}