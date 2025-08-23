import { useState } from "react";
import RecentGame from "./recent-game";
import { ScrollShadow } from "@heroui/react";

export function RecentGames() {
	const [recentGames, setRecentGames] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	]);

	return (
		<div className="flex flex-col gap-4 border-slate-10">
			<p className="text-5xl text-gray-200 font-thin">Recent Games</p>
			<ScrollShadow hideScrollBar className="h-[400px] overflow-y-auto">
				<div className="">
					{recentGames.map((game, index) => (
						<RecentGame key={index} />
					))}
				</div>
			</ScrollShadow>
		</div>
	);
}

export default RecentGames;
