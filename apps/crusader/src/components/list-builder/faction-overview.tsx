import { FactionDefinition } from "@/app/lib/definitions";

export default function FactionOverview({
	faction,
}: {
	faction: FactionDefinition;
}) {
	return (
		<div className="w-full font-[Cinzel] drop-shadow-md text-2xl flex flex-row">
			<div className="text-2xl font-black drop-shadow-[0_0_15px_rgba(255,255,0,0.7)] basis-1/3">
				✠ Selected Faction:
			</div>
			<div className="text-white text-2xl font-extrabold drop-shadow-[0_0_25px_rgba(255,100,0,0.9)] basis-2/3">
				{faction.name}
			</div>
		</div>
	);
}
