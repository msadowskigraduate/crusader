"use client";

import CrusadesList from "@/components/crusades/crusades-list";
import RecentGames from "@/components/recent-games/recent-games";

export default function Dashboard() {
	/*
	 * Replace the elements below with your own.
	 *
	 * Note: The corresponding styles are in the ./index.tailwind file.
	 */
	return (
		<div className="flex flex-col h-svh ">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
				<div>
					<CrusadesList />
				</div>
				<RecentGames />
			</div>
		</div>
	);
}
