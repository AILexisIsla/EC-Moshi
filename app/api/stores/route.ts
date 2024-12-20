import prismadb from "@/lib/prismadb";
import { getAuth as clerkAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


import { NextRequest } from "next/server";

export async function POST(
    req: NextRequest,
) {
    try {
        const auth = clerkAuth(req);
        const { userId } = auth;
        const body = await req.json();

        const { name } = body;

        if (!userId) {
            return new NextResponse("unauthorized", { status: 401 });
        }

        if (!name) {
            return new NextResponse("name is required", { status: 400 });
        }

        const store = await prismadb.store.create({
            data: {
                name,
                userId,
            },
        });
        
        return NextResponse.json(store);

    } catch (error) {
       console.log('[STORE_POST]', error);
       return new NextResponse("internal error", { status: 500 });
    }
}