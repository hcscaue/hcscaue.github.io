import { styled } from "../../global/theme";

export const Container = styled("section", {
	width: "100%",
	padding: "32px 20dvw",

	"@media screen and (max-width: 768px)": {
		padding: "32px 32px",
	},
});
