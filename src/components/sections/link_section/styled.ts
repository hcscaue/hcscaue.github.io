import { styled } from "@stitches/react";

export const Container = styled("section", {
	"& div.link-container": {
		backgroundColor: "white",
		boxShadow: "0px 4px 8px 1px rgba(0, 0, 0, 0.1)",
		padding: "16px 32px",
		borderRadius: "8px",
		marginTop: "16px",
	},

	"& div.link-container:first-of-type": {
		marginTop: "32px",
	},

	"& div.link-container h2.link-title": {
		fontSize: "20px",
		fontWeight: "700",
		wordWrap: "break-word",
		marginBottom: "8px",
	},

	"& div.link-container p.link-description": {
		fontSize: "16px",
		fontWeight: "400",
		wordWrap: "break-word",
		color: "darkgrey",
		marginBottom: "24px",
	},

	"& div.link-container footer": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},

	"& div.link-container footer div": {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "8px",
	},

	"& div.link-container footer p.link-type": {
		fontWeight: "300",
		fontSize: "14px",
		padding: "4px 8px",
		borderRadius: "6px",
		backgroundColor: "#e4f1ff",
	},

	"& a.link-url": {
		display: "flex",
		alignItems: "center",
		gap: "4px",
		fontSize: "16px",
		fontWeight: "700",
		textDecoration: "none",
		color: "black",
	},

	"& a.link-url img": {
		width: "24px",
	},
});
