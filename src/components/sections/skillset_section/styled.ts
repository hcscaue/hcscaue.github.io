import { styled } from "@stitches/react";
import { defaultTheme } from "../../../global/theme";

export const Container = styled("section", {
	display: "flex",
	backgroundColor: defaultTheme.colors.black,

	padding: "64px 88px",
	flexDirection: "column",

	justifyContent: "center",
	alignItems: "center",

	"& #group-skillset": {
		width: "100%",

		display: "grid",
		gap: "32px",
		gridTemplateColumns: "1fr 1fr 1fr 1fr",

		justifyContent: "center",
		alignItems: "start",
	},

	"& #group-skillset .skill": {
		color: defaultTheme.colors.white,
		maxWidth: "480px",
		textAlign: "center",
	},

	"& #group-skillset .skill img": {
		width: "20%",
		maxWidth: "96px",
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
