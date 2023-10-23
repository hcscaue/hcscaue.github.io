import { styled } from "@stitches/react";
import { defaultTheme } from "../../../global/theme";

export const Container = styled("section", {
	backgroundColor: defaultTheme.colors.white,

	display: "flex",
	flexDirection: "column",
	padding: "64px 88px",

	justifyContent: "center",
	alignItems: "center",
	gap: "32px",

	"& .title-section, & .all-projects-text a": {
		textTransform: "uppercase",
		fontWeight: "800",
		fontSize: "1.6rem",
		color: defaultTheme.colors.black,
	},

	"& .main-projects": {
		display: "flex",
		flexDirection: "column",
		gap: "64px",
	},

	".project-presentation:nth-child(2n + 1) ": {
		flexDirection: "row",

		"& .techs-list": {
			justifyContent: "flex-start",
		},
	},

	".project-presentation:nth-child(2n) ": {
		flexDirection: "row-reverse",

		".project-texts": {
			textAlign: "right",
		},

		"& .techs-list": {
			justifyContent: "flex-end",
		},

		"& .text-underline": {
			float: "right",
		},
	},
});
