import { styled } from "@stitches/react";
import { defaultTheme } from "../../global/theme.ts";

export const Container = styled("div", {
	position: "fixed",
	width: "100vw",
	top: 0,
	left: 0,
	padding: "24px",
	zIndex: 100,
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	backgroundColor: defaultTheme.colors.black,

	"& > .assign": {
		width: "40px",
		aspectRatio: "1/1",
	},

	"& > .social-group": {
		display: "flex",
		alignItems: "center",
		gap: "8px",
	},

	"& > .social-group > a": {
		width: "24px",
		opacity: 0.5,
		transition: "all 0.3s ease-in-out",
	},

	"& > .social-group > a:hover": {
		opacity: 1,
	},
});
