import { styled, theme } from "../../../global/theme";

export const Container = styled("section", {
	height: "100%",
	width: "100%",

	display: "flex",
	backgroundColor: theme.colors.white,

	padding: "64px 88px",
	flexDirection: "column",

	justifyContent: "center",
	alignItems: "center",

	"@bp1": {
		padding: "16px 24px",
	},

	"& #group-skillset": {
		display: "grid",
		gap: "32px",
		gridTemplateColumns: "1fr 1fr",

		justifyContent: "center",
		alignItems: "start",

		"@bp1": {
			gap: "16px",
		},
	},

	"& #group-skillset .skill": {
		color: theme.colors.black,
		maxWidth: "480px",
		textAlign: "center",
	},

	"& #group-skillset .skill img": {
		width: "10%",
		maxWidth: "48px",

		"@bp1": {
			width: "20%"
		}
	},

	"& #group-skillset .skill h2": {
		fontSize: "1rem",

		margin: "8px 0",
		textTransform: "uppercase",

		"@bp1": {
			fontSize: ".8rem",
		},
	},

	"& #group-skillset .skill p": {
		fontSize: "0.9rem",

		opacity: "0.8",
		textAlign: "center",

		"@bp1": {
			fontSize: ".7rem",
		},
	},
});
