import { styled } from "@stitches/react";

export const Container = styled("section", {
	width: "100%",
	padding: "32px 20vw",

	"@media screen and (max-width: 768px)": {
		padding: "32px 32px",
	},
});
