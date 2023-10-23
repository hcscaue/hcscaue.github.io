import { styled } from "@stitches/react";
import { defaultTheme } from "../../global/theme";

export const Container = styled("div", {
	width: "fit-content",

	"& .text-group": {
		display: "flex",
		flexDirection: "row",

		a: {
			textDecoration: "none",
			opacity: "0.8",
			transition: defaultTheme.transitions.default,
		},

		"a:hover": {
			opacity: "1",

			"& img": {
				opacity: "1",
			},
		},

		img: {
			opacity: "0.8",
			aspectRatio: "1/1",
			width: "1em",
			transition: defaultTheme.transitions.default,
		},
	},

	"& .underline": {
		width: "0",
		height: ".3em",
		transition: defaultTheme.transitions.default,
	},

	":hover + .underline": {
		width: "100%",
	},
});
