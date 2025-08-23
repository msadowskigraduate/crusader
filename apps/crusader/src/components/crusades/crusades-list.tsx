import Crusade from "./crusade";

export function CrusadesList() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl font-bold">Crusades</h1>
			<Crusade name="Arks of Omen" body="Kill them all"></Crusade>
		</div>
	);
}

export default CrusadesList;
