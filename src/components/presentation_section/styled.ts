import { styled } from "@stitches/react";

export const Container = styled("section", {
	position: "relative",

	display: "flex",
	flexDirection: "column",
	alignItems: "center",

	color: "black",

	"& img#photo-presentation": {
		width: "120px",
		height: "120px",

		marginBottom: "16px",
		padding: "4px",

		border: "2px dashed black",
		borderStyle: "solid",
		borderRadius: "50%",
	},

	"& h1": {
		fontSize: "24px",
		fontWeight: "600",
		textAlign: "center",

		marginBottom: "4px",
	},

	"& h2": {
		fontSize: "20px",
		fontWeight: "400",
		textAlign: "center",

		marginBottom: "16px",

		opacity: "0.8",
	},

	"& div#social-media": {
		position: "relative",
		display: "flex",
		gap: "8px",
	},

	"& div#social-media a": {
		width: "24px",
		height: "24px",
	},

	"& div#social-media a img": {
		width: "100%",
		height: "100%",

		opacity: "0.7",
		transition: "all 0.2s ease-in",
	},

	"& div#social-media a img:hover": {
		opacity: "1",
	},
});
