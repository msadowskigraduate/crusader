import { use } from "react";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	return {
		title: "Crusader - Edit Order of Battle",
	};
}

export default function EditListBuilderPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(params);
	return (
		<div>
			<p className="text-5xl font-bold mb-4 font-manufacturing">
				Edit Order of Battle
			</p>
			<p className="text-lg text-gray-400">
				This page is under construction. Please check back later.
			</p>
			<div>
				<h1>Edit List: {id}</h1>
			</div>
		</div>
	);
}
