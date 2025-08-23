import Header from "@/layout/header";
import "../global.css";

export const metadata = {
	title: "Crusader",
	description: "There is only war.",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-[url(/img/intro.png)] bg-no-repeat bg-cover bg-gray-800 text-slate-300 min-h-screen">
			<Header />
			<div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
				{children}
			</div>
		</div>
	);
}
