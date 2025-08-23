import { Card, CardBody } from "@heroui/react";

export function RecentGame() {
	return (
		<Card className="m-1 hover:scale-[1.02] transition-transform duration-150">
			<CardBody className="flex items-center flex-row bg-gray-600 text-slate-100 px-4 py-3">
				<p className="flex-1 font-manufacturing text-3xl w-1/3">Victory</p>
				<div className="flex flex-col justify-evenly items-end text-right w-2/3">
					<p className="text-l">Black Templars vs. Tyranids</p>
					<div className="flex flex-row gap-4 text-sm text-gray-300">
						<p>72-30</p>
						<p>10/10/2023</p>
					</div>
				</div>
			</CardBody>
		</Card>
	);
}

export default RecentGame;
