import { styled } from "@stitches/react";

export const Container = styled("div", {
	width: "fit-content",

	"& .text-group": {
		display: "flex",
		flexDirection: "row",

		a: {
			textDecoration: "none",
			opacity: "0.8",
			transition: "all 0.2s ease-in-out",
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
			transition: "all 0.2s ease-in-out",
		},
	},

	"& .underline": {
		width: "0",
		height: ".3em",
		transition: "all 0.2s ease-in-out",
	},

	":hover + .underline": {
		width: "100%",
	},
});
