import { styled } from "@stitches/react";
import { defaultTheme } from "../../global/theme";

export const Container = styled("div", {
	display: "flex",

	justifyContent: "center",
	gap: "16px",

	".banner-image": {
		objectFit: "cover",
		aspectRatio: "16/9",
		width: "40vw",
		boxShadow: "0px 4px 12px 4px rgba(0, 0, 0, 0.25)",
	},

	".project-texts": {
		width: "30vw",
		color: defaultTheme.colors.black,

		"a, h1": {
			textTransform: "uppercase",
		},

		h1: {
			fontSize: "1.5rem",
		},

		p: {
			margin: "16px 0 24px",
		},

		a: {
			color: defaultTheme.colors.black,
			marginTop: "32px",
			opacity: "0.8",
			fontWeight: "800",
			textDecoration: "none",
			transition: "all 0.2s ease-in-out",
		},

		"a:hover": {
			opacity: "1",
		},
	},
});
