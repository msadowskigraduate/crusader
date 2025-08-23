import "./global.css";
import { Providers } from "./providers";

export const metadata = {
	title: "Crusader",
	description: "There is only war.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
