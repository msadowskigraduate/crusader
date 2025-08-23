// const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

// The above utility import will not work if you are using Next.js' --turbo.
// Instead you will have to manually add the dependent paths to be included.
// For example
// ../libs/buttons/**/*.{ts,tsx,js,jsx,html}',                 <--- Adding a shared lib
// !../libs/buttons/**/*.{stories,spec}.{ts,tsx,js,jsx,html}', <--- Skip adding spec/stories files from shared lib

// If you are **not** using `--turbo` you can uncomment both lines 1 & 19.
// A discussion of the issue can be found: https://github.com/nrwl/nx/issues/26510

const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}",
		"!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}",
		"../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
		//     ...createGlobPatternsForDependencies(__dirname)
	],
	theme: {
		extend: {
			fontFamily: {
				manufacturing: ['"Manufacturing Consent"', "sans-serif"],
				cinzel: ['"Cinzel"', "sans-serif"],
			},
			colors: {
				background: "#1e1e1e", // Dark background color
				text: "#e0e0e0", // Light text color
			},
		},
	},
	darkMode: "class", // Enable dark mode support
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: "#1E40AF", // your primary color
							foreground: "#FFFFFF", // text/icon color on primary
						},
						secondary: {
							DEFAULT: "#9333EA", // your secondary color
							foreground: "#FFFFFF",
						},
					},
				},
				dark: {
					colors: {
						primary: {
							DEFAULT: "#3B82F6",
							foreground: "#FFFFFF",
						},
						secondary: {
							DEFAULT: "#A855F7",
							foreground: "#FFFFFF",
						},
					},
				},
			},
		}),
	],
};
