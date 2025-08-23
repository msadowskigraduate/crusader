"use client";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@heroui/react";
import { useState } from "react";

export const NavBrand = () => {
	return (
		<svg fill="none" height="36" viewBox="0 0 64 64" width="36">
			<path
				fill="currentColor"
				clipRule="evenodd"
				fillRule="evenodd"
				d="M32 12L38 8H42L36 12H40L48 8H52L42 14H46L58 8L56 12L48 16H52L64 12L60 20L48 24L42 20H46L36 24L40 20H36L32 24L28 20H24L28 24L18 20H22L16 24L4 20L0 12L12 16H16L8 12L6 8L18 14H22L12 8H16L24 12H28L22 8H26L32 12Z"
			/>
		</svg>
	);
};

export default function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<Navbar className="bg-slate-900 text-slate-100">
			<NavbarBrand>
				<NavBrand />
				<p className="font-bold text-inherit text-slate-100">++CRUSADER++</p>
			</NavbarBrand>

			{!isLoggedIn && (
				<NavbarContent justify="start">
					<NavbarItem>
						<Link href="/dashboard">Dashboard</Link>
					</NavbarItem>
					<NavbarItem></NavbarItem>
					<NavbarItem>
						<Link href="/settings">Settings</Link>
					</NavbarItem>
				</NavbarContent>
			)}
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="/dashboard" onClick={() => setIsLoggedIn(true)}>
						Login
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
