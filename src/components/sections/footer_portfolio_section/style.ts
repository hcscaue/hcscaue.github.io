import { styled } from "@stitches/react";
import { defaultTheme } from "../../../global/theme";

export const Container = styled("footer", {
	backgroundColor: defaultTheme.colors.black,

	display: "flex",
	flexDirection: "column",
	padding: "64px 88px",

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
		color: defaultTheme.colors.white,

		fontSize: "1.9rem",
		fontWeight: "800",
		textTransform: "uppercase",

		marginBottom: "16px",

		"& span": {
			color: "goldenrod",
		},
	},
});
