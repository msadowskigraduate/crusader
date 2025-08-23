"use client";

import { useEffect, useState } from "react";
import { FactionDefinition } from "@/app/lib/definitions";
import { Card, CardHeader, ScrollShadow, Skeleton } from "@heroui/react";

type Props = {
	onFactionSelect?: (faction: FactionDefinition) => void;
};

export default function FactionChooser({ onFactionSelect }: Props) {
	const [factions, setFactions] = useState<FactionDefinition[]>([]);
	const [isChosen, setIsChosen] = useState<FactionDefinition | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchFactions = async () => {
			try {
				const res = await fetch("/api/factions");
				if (!res.ok) throw new Error("Failed to fetch factions");
				const data = await res.json();
				setFactions(data);
			} catch (err) {
				console.error("Fetch error:", err);
				setError("Failed to load factions. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchFactions();
	}, []);

	const handleSelect = (faction: FactionDefinition) => {
		setIsChosen(faction);
		onFactionSelect?.(faction);
	};

	return (
		<div className="w-full max-w-7xl  text-gray-300 font-cinzel flex flex-col items-center gap-y-10">
			<div className="text-2xl self-start">⚜ CHOOSE YOUR FACTION ⚜</div>
			{loading && (
				<div className="items-center justify-center h-64">
					<p className="text-yellow-400 italic tracking-wide text-4xl">
						Retrieving sacred data...
					</p>
				</div>
			)}
			{error && (
				<p className="text-red-600 font-semibold italic tracking-wider drop-shadow-md">
					{error}
				</p>
			)}
			{!loading && !error && (
				<ScrollShadow
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[30vh]"
					hideScrollBar
				>
					{factions.map((faction) => {
						const isSelected = isChosen?.id === faction.id;
						return (
							<Card
								key={faction.id}
								isPressable
								onClick={() => handleSelect(faction)}
								role="button"
								tabIndex={0}
								className="text-xl opacity-90"
							>
								{isSelected && (
									<div className="absolute top-3 right-3 w-6 h-6 bg-yellow-200 rounded-full shadow-lg animate-pulse">
										⚜
									</div>
								)}
								<CardHeader className="flex flex-col items-center justify-center py-8 px-4">
									<p>{faction.name}</p>
								</CardHeader>
							</Card>
						);
					})}
				</ScrollShadow>
			)}
		</div>
	);
}
