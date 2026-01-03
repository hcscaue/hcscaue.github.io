import { styled } from "../../global/theme";
import { theme } from "../../global/theme";

export const Container = styled("div", {
	width: "fit-content",

	"& .text-group": {
		display: "flex",
		flexDirection: "row",

		a: {
			textDecoration: "none",
			opacity: "0.8",
			transition: theme.transitions.default,
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
			transition: theme.transitions.default,
		},
	},

	"& .underline": {
		width: "0",
		height: ".3em",
		transition: theme.transitions.default,
	},

	":hover + .underline": {
		width: "100%",
	},
});
