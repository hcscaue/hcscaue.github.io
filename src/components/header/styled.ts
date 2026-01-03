import { styled } from "../../global/theme";
import { theme } from "../../global/theme.ts";

export const Container = styled("header", {
	position: "fixed",
	width: "100%",
	height: "80px",
	top: 0,
	left: 0,
	padding: "0 24px",
	zIndex: 100,
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	backgroundColor: theme.colors.black,

	"& > .assign": {
		width: "40px",
		aspectRatio: "1/1",
	},
});
