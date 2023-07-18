import { styled } from "@stitches/react";
import { defaultTheme } from "../../global/theme";

export const Container = styled("button", {
	position: "fixed",
	bottom: "50px",
	right: "50px",
	borderRadius: "50%",

	width: "50px",
	height: "50px",

	backgroundColor: "goldenrod",

	border: "none",
	outline: "none",
	opacity: "0",
	cursor: "pointer",

	transition: defaultTheme.transitions.default,

	img: {
		rotate: "90deg",
	},

	"&.visible": {
		opacity: "1",
	},
});
