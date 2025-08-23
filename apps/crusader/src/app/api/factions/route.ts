import { NextResponse } from "next/server";
import { getFactions } from "@/app/lib/data"; // your existing server function

export async function GET() {
	try {
		const factions = await getFactions();
		return NextResponse.json(factions);
	} catch (error) {
		console.error("Error fetching factions:", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
