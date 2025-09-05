import postgres from 'postgres';
import { FactionDefinition, Unit } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, {
  host: 'localhost',
  port: 5432,
  database: 'crusader',
  username: 'postgres',
  password: 'postgres',
});

const factions = await sql<
  FactionDefinition[]
>`SELECT * FROM factions ORDER BY id`;

export async function getFactions(): Promise<FactionDefinition[]> {
  return factions;
}

export async function getFactionById(id: string): Promise<Unit[]> {
  const result = await sql<
    Unit[]
  >`SELECT * FROM datasheets WHERE faction_id = ${id}`;
  return result;
}
