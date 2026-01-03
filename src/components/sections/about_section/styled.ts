import { styled } from "../../../global/theme";

export const Container = styled("section", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	padding: "16px 64px",
	gap: "32px",

	width: "100%",
	height: "100dvh",

	"@bp1": {
		padding: "0px 24px",
	},

	"& > .about-text-group": {
		width: "50%",
		minWidth: "560px",
		maxWidth: "720px",
		textAlign: "left",

		"@bp1": {
			width: "100%",
			minWidth: "0px",
			maxWidth: "calc(100dvw - 48px)",
		},
	},

	"& > .about-text-group > h1": {
		margin: "16px 0",

		fontWeight: 700,
		fontSize: "2.5rem",

		textTransform: "uppercase",
		color: "var(--gray-dark)",

		"@bp1": {
			fontSize: "1.2rem",
		},
	},

	"& > .about-text-group span": {
		color: "goldenrod",
	},

	"& > .about-text-group > p": {
		fontWeight: 400,
		fontSize: "1rem",

		textAlign: "justify",

		color: "var(--gray-medium-dark)",

		"@bp1": {
			fontSize: ".7rem",
		},
	},
});
