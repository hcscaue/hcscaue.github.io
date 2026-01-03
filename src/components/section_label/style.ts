import { styled } from "../../global/theme";
import { theme } from "../../global/theme";

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

	"@bp1": {
		display: "none",
	},

	variants: {
		color: {
			white: {
				color: theme.colors.white,
			},
			black: {
				color: theme.colors.black,
			},
		},
	},
});
