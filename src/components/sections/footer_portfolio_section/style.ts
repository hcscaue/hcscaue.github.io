import { styled } from "@stitches/react";
import { theme } from "../../../global/theme";

export const Container = styled("footer", {
	backgroundColor: theme.colors.black,

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",

	width: "100%",
	height: "100dvh",

	"& .cta-group": {
		width: "100%",

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",

		gap: "32px",

		div: {
			width: "30%",
		},
	},

	"& .cta-group-image": {
		width: "30%",
	},

	"& .cta-group-text": {
		color: theme.colors.white,

		fontSize: "1.9rem",
		fontWeight: "800",
		textTransform: "uppercase",

		marginBottom: "16px",

		"& span": {
			color: "goldenrod",
		},
	},

	"& .cta-button": {
		color: theme.colors.black,
		backgroundColor: theme.colors.white,

		fontSize: "1.4rem",
		fontWeight: "800",
		textTransform: "uppercase",
		textDecoration: "none",
	
		padding: "0px 8px",

		cursor: "pointer",

		"&:hover": {
			opacity: ".8"
		}
	},
});
