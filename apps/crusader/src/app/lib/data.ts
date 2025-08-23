import postgres from "postgres";
import { FactionDefinition } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, {
	host: "localhost",
	port: 5432,
	database: "crusader",
	username: "postgres",
	password: "postgres",
});

const factions = await sql<
	FactionDefinition[]
>`SELECT * FROM factions ORDER BY id`;

export async function getFactions(): Promise<FactionDefinition[]> {
	return factions;
}

export async function getFactionById(id: string): Promise<FactionDefinition> {
	const result = await sql<
		FactionDefinition[]
	>`SELECT * FROM factions WHERE id = ${id}`;
	return result[0]; // Assuming IDs are unique
}
