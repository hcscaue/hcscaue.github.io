import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  minHeight: "100vh",

  position: "relative",

  padding: "24px",
  gap: "48px",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",

  ".detail": {
    width: "96px",
    height: "4px",

    backgroundColor: "#F2F2F2",

    borderRadius: "4px",
  },

  ".introduction": {
    width: "40%",

    gap: "24px",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    ".description": {},

    ".assign": {
      height: "48px",
    },
    ".social": {
      img: {
        width: "32px",
        height: "32px",
      },
    },
  },
});
