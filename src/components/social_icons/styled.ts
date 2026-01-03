import { styled } from "../../global/theme";

export const Container = styled("a", {
	width: "24px",
	opacity: 0.5,
	transition: "all 0.3s ease-in-out",
	fill: "Black",

	"&:hover": {
		opacity: 1,
	},
});
