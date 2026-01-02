import { styled } from "@stitches/react";
import { defaultTheme } from "../../../global/theme";

export const Container = styled("section", {
	height: "100%",
width: "100%",

	display: "flex",
	backgroundColor: defaultTheme.colors.white,

	padding: "64px 88px",
	flexDirection: "column",

	justifyContent: "center",
	alignItems: "center",

	"& #group-skillset": {
		display: "grid",
		gap: "32px",
		gridTemplateColumns: "1fr 1fr",

		justifyContent: "center",
		alignItems: "start",
	},

	"& #group-skillset .skill": {
		color: defaultTheme.colors.black,
		maxWidth: "480px",
		textAlign: "center",
	},

	"& #group-skillset .skill img": {
		width: "10%",
		maxWidth: "48px",
	},

	"& #group-skillset .skill h2": {
		fontSize: "1rem",

		margin: "8px 0",
		textTransform: "uppercase",
	},

	"& #group-skillset .skill p": {
		fontSize: "0.9rem",

		opacity: "0.8",
		textAlign: "center",
	},
});
