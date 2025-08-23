import fs from "fs";
import path from "path";
import { Client } from "pg";
import csvParser from "csv-parser";

interface CsvRow {
	[key: string]: string;
}

async function importCSV(
	filePath: string,
	tableName: string,
	columns: string[],
	client: Client,
): Promise<void> {
	return new Promise((resolve, reject) => {
		const rows: unknown[][] = [];

		fs.createReadStream(filePath)
			.pipe(
				csvParser({
					separator: "|",
					mapHeaders: ({ header }) => header.trim(),
				}),
			)
			.on("data", (row: CsvRow) => {
				const values = columns.map((col) => {
					const val = row[col];
					if (val === "true") return true;
					if (val === "false") return false;
					return val === "" ? null : val;
				});
				rows.push(values);
			})
			.on("end", async () => {
				try {
					for (const row of rows) {
						// Use parameter placeholders ($1, $2, etc)
						const placeholders = row.map((_, i) => `$${i + 1}`).join(", ");
						// Use table and column names carefully - assuming safe (or use proper sanitization)
						const query = `INSERT INTO ${tableName} (${columns.join(
							", ",
						)}) VALUES (${placeholders}) ON CONFLICT DO NOTHING`;

						await client.query(query, row as any[]);
					}
					resolve();
				} catch (error) {
					reject(error);
				}
			})
			.on("error", (error) => {
				reject(error);
			});
	});
}

async function main() {
	const client = new Client({
		database: process.env.POSTGRES_DB,
		connectionString: process.env.DATABASE_URL,
	});

	try {
		await client.connect();

		await importCSV(
			path.resolve("/app/", "assets/Factions.csv"),
			"factions",
			["id", "name", "link"],
			client,
		);
		await importCSV(
			path.resolve("/app/", "assets/Source.csv"),
			"source",
			[
				"id",
				"name",
				"type",
				"edition",
				"version",
				"errata_date",
				"errata_link",
			],
			client,
		);
		await importCSV(
			path.resolve("/app/", "assets/Datasheets.csv"),
			"datasheets",
			[
				"id",
				"name",
				"faction_id",
				"source_id",
				"legend",
				"role",
				"loadout",
				"transport",
				"virtual",
				"leader_head",
				"leader_footer",
				"damaged_w",
				"damaged_description",
				"link",
			],
			client,
		);

		// Add more CSV imports as needed
	} catch (error) {
		console.error("Error importing CSV:", error);
	} finally {
		await client.end();
	}
}

main();
