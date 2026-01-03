import { styled } from "../../global/theme";
import { theme } from "../../global/theme";

export const Container = styled("div", {
	display: "flex",
	gap: "8px",
	flexWrap: "wrap",

	"& .tech": {
		fontWeight: "800",
		textTransform: "uppercase",
		padding: "4px 8px",
		color: theme.colors.white,
		backgroundColor: theme.colors.black,
	},
});
