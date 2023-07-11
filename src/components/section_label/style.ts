import { styled } from "@stitches/react";
import { defaultTheme } from "../../global/theme";

export const Container = styled("p", {
	position: "absolute",
	top: "50%",
	left: "0px",
	transform: "translateY(-50%) rotate(-180deg)",
	marginLeft: "24px",

	fontWeight: "700",
	fontSize: "0.8rem",

	writingMode: "vertical-lr",
	textTransform: "uppercase",

	variants: {
		color: {
			white: {
				color: defaultTheme.colors.white,
			},
			black: {
				color: defaultTheme.colors.black,
			},
		},
	},
});
