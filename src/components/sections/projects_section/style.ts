import { styled, theme } from "../../../global/theme";

export const Container = styled("section", {
	width: "100%",
	height: "100%",
	backgroundColor: theme.colors.white,

	display: "flex",
	flexDirection: "column",
	padding: "64px 88px",

	justifyContent: "center",
	alignItems: "center",
	gap: "32px",

	"& .title-section, & .all-projects-text a": {
		textTransform: "uppercase",
		fontWeight: "800",
		fontSize: "1.6rem",
		color: theme.colors.black,
	},

	variants: {
		align: {
			left: {
				"& .project-presentation": {
					flexDirection: "row",
				},
				"& .techs-list": {
					justifyContent: "flex-start",
				},
				"& .project-texts": {
					textAlign: "left",
				},
			},
			right: {
				"& .project-presentation": {
					flexDirection: "row-reverse",
				},
				"& .project-texts": {
					textAlign: "right",
				},
				"& .techs-list": {
					justifyContent: "flex-end",
				},
				"& .text-underline": {
					float: "right",
				},
			},
		},
	},

	defaultVariants: {
		align: "left",
	},
});
