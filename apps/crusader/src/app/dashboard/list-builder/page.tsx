"use client";

import { useState } from "react";
import FactionChooser from "@/components/list-builder/faction-chooser";
import { addToast, Button, Form, Input, ToastProvider } from "@heroui/react";
import { Suspense } from "react";
import { FactionDefinition } from "@/app/lib/definitions";
import FactionOverview from "@/components/list-builder/faction-overview";
import { useRouter } from "next/navigation";

export default function ListBuilder() {
	const [selectedFaction, setSelectedFaction] =
		useState<FactionDefinition | null>(null);
	const [errors, setErrors] = useState({});
	const router = useRouter();

	const handleFactionSelect = (faction: FactionDefinition) => {
		console.log("Selected faction:", faction);
		setSelectedFaction(faction);
	};

	const onSubmit = (e: any) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		form.append("faction", selectedFaction ? selectedFaction.id : "");
		const data = Object.fromEntries(form);

		const newErrors: Record<string, string> = {};

		if (!data.crusade_force_name) {
			newErrors.crusade_force_name = "Crusade Force Name is required";
		}

		if (!selectedFaction) {
			const error_description = "Faction is not selected";
			newErrors.faction = error_description;
			addToast({
				title: "You must select a faction.",
				description: error_description,
				variant: "bordered",
				color: "danger",
			});
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setErrors({});
		console.log("Form data submitted:", data);
		const id = "123"; // replace with actual ID from backend or form
		const query = new URLSearchParams({
			crusade_force_name: String(data.crusade_force_name),
			faction: String(data.faction),
		});
		router.push(`/dashboard/list-builder/${id}/edit?${query.toString()}`);
	};

	return (
		<div>
			<p className="text-5xl font-bold mb-4 font-manufacturing">
				Create a New Order of Battle
			</p>
			<Form
				action="/dashboard/list-builder"
				className="flex flex-col gap-10 w-full max-w-7xl space-y-4 items-center"
				validationErrors={errors}
				onSubmit={onSubmit}
			>
				<Input
					isRequired
					errorMessage="Crusade Force Name is required"
					label="Crusade Force Name"
					labelPlacement="outside"
					name="crusade_force_name"
					placeholder="Crusade Force Name"
					radius="sm"
					classNames={{
						label: "!text-slate-100 font-cinzel text-2xl",
					}}
					type="text"
				/>

				<Input
					errorMessage="Crusade Force Description is required"
					label="Crusade Force Description"
					labelPlacement="outside"
					name="crusade_force_description"
					placeholder="Crusade Force Description"
					radius="sm"
					type="text"
					classNames={{
						label: "!text-slate-100 font-cinzel text-2xl",
					}}
				/>

				{selectedFaction && <FactionOverview faction={selectedFaction} />}
				<Suspense>
					<FactionChooser onFactionSelect={handleFactionSelect} />
				</Suspense>

				<div className="fixed z-[100]">
					<ToastProvider placement="top-right" toastOffset={70} />
				</div>

				<div className="w-full flex flex-row justify-around">
					<Button
						type="submit"
						radius="sm"
						size="lg"
						variant="ghost"
						className="font-cinzel text-white font-bold basis-1/3 hover:scale-110"
					>
						To Unit Selection
					</Button>

					<Button
						type="submit"
						radius="sm"
						size="lg"
						variant="ghost"
						className="font-cinzel text-white font-bold basis-1/3 hover:scale-110"
					>
						Reset
					</Button>
				</div>
			</Form>
		</div>
	);
}
