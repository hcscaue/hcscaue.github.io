import { styled } from "../../global/theme";
import { theme } from "../../global/theme";

export const Container = styled("div", {
	display: "flex",

	justifyContent: "center",
	gap: "16px",

	".banner-section": {
		width: "40dvw",
		borderRadius: "4px",
	},

	".banner-image": {
		width: "100%",
		borderRadius: "8px",
		objectFit: "cover",
		aspectRatio: "16/9",
		boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.25)",
	},

	".banner-previews": {
		width: "100%",
		backgroundColor: theme.colors.white,
		boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.25)",

		marginTop: "8px",
		padding: "8px",
		borderRadius: "8px",

		display: "grid",
		gap: "8px",
	},

	".banner-image-preview": {
		width: "100%",
		height: "auto",
		display: "block",
		objectFit: "cover",
		aspectRatio: "16/9",
		borderRadius: "4px",

		"&:hover": {
			cursor: "pointer",
			transition: "filter 0.2s",
			filter: "brightness(80%)",
		},
	},

	".project-texts": {
		width: "30dvw",
		color: theme.colors.black,

		"a, h1": {
			textTransform: "uppercase",
		},

		h1: {
			fontSize: "1.5rem",
		},

		p: {
			margin: "16px 0 24px",
		},

		a: {
			color: theme.colors.black,
			opacity: "0.8",
			fontWeight: "800",
			textDecoration: "none",
			transition: theme.transitions.default,
		},

		"a:hover": {
			opacity: "1",
		},
	},

	variants: {
		orientation: {
			horizontal: {},
			vertical: {
				".banner-section": {
					display: "flex",
					justifyContent: "flex-end",
				},

				".banner-image": {
					width: "auto",
					height: "65dvh",
					aspectRatio: "9/16",
				},

				".banner-previews": {
					marginTop: "0px",
					marginLeft: "8px",
					width: "fit-content",
				},

				".banner-image-preview": {
					height: "calc(16dvh - 8px)",
					aspectRatio: "9/16",
				},
			},
		},
		lengthColumnPreview: {
			"1": { ".banner-previews": { gridTemplateColumns: "1fr" } },
			"2": { ".banner-previews": { gridTemplateColumns: "1fr 1fr" } },
			"3": { ".banner-previews": { gridTemplateColumns: "repeat(3, 1fr)" } },
			"4": { ".banner-previews": { gridTemplateColumns: "repeat(4, 1fr)" } },
		},
	},

	defaultVariants: {
		orientation: "horizontal",
		lengthColumnPreview: "1",
	},
});
