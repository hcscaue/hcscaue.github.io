import { styled } from "@stitches/react";
import { defaultTheme } from "../../global/theme";

export const Container = styled("div", {
	display: "flex",
	gap: "8px",
	flexWrap: "wrap",

	"& .tech": {
		fontWeight: "800",
		textTransform: "uppercase",
		padding: "4px 8px",
		color: defaultTheme.colors.white,
		backgroundColor: defaultTheme.colors.black,
	},
});
