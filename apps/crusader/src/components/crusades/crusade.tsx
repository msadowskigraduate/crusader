import { Card, CardBody, CardHeader } from "@heroui/react";

export function Crusade({ name, body }: { name: string; body: string }) {
	return (
		<Card>
			<CardHeader>{name}</CardHeader>
			<CardBody>{body}</CardBody>
		</Card>
	);
}

export default Crusade;
