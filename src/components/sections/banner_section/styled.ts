import { styled } from "../../../global/theme";

export const Container = styled("section", {
	width: "100%",
	height: "100%",

	"& > img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},

	"& > .banner-text": {
		position: "absolute",
		color: "white",
		top: "50%",
		left: "50%",
		width: "70%",
		transform: "translate(-50%, -50%)",
		textTransform: "uppercase",

		"@bp1": {
			top: "80%",
		},
	},

	"& > .banner-text > h3": {
		marginBottom: "32px",

		fontSize: "1rem",
		fontWeight: 700,
		opacity: 0.6,
	},

	"& > .banner-text > h1": {
		fontSize: "2.5rem",
		fontWeight: 700,
		lineHeight: 1.1,
	},

	"& > .banner-text > h1 > span": {
		fontSize: "3.5rem",
		color: "goldenrod",
	},
});
