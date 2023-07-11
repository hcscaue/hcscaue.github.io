import { styled } from "@stitches/react";

export const Container = styled("section", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	padding: "16px 64px",
	gap: "32px",

	"& > .about-text-group": {
		width: "50%",
		maxWidth: "720px",
		textAlign: "left",
	},

	"& > .about-text-group > h1": {
		margin: "16px 0",

		fontWeight: 700,
		fontSize: "2.5rem",

		textTransform: "uppercase",
		color: "var(--gray-dark)",
	},

	"& > .about-text-group span": {
		color: "goldenrod",
	},

	"& > .about-text-group > p": {
		fontWeight: 400,
		fontSize: "1rem",

		textAlign: "justify",

		color: "var(--gray-medium-dark)",
	},
});
