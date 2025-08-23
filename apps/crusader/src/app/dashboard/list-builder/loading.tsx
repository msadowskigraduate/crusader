"use client";

import { useState, useEffect } from "react";

export default function Loading() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (progress < 90) {
			const timer = setInterval(() => {
				setProgress((prev) => Math.min(prev + Math.random() * 10, 90));
			}, 200);
			return () => clearInterval(timer);
		}
	}, [progress]);

	return (
		<div style={{ width: "100%", padding: "1rem" }}>
			<div
				style={{
					height: "8px",
					width: "100%",
					background: "#eee",
					borderRadius: "4px",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						height: "100%",
						width: `${progress}%`,
						background: "#0070f3",
						transition: "width 0.2s",
					}}
				/>
			</div>
		</div>
	);
}
