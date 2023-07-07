import { createStitches } from "@stitches/react";

export const defaultTheme = createStitches({
	theme: {
		colors: {
			black: "#000",
			white: "#fff",

			"gray-light": "#f2f2f2",
			"gray-medium-light": "#d9d9d9",
			"gray-medium": "#ccc",
			"gray-medium-dark": "#999",
			"gray-dark": "#666",
		},
	},
}).theme;
