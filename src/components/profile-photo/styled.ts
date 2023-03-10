import { styled } from "@stitches/react";

export const Container = styled("div", {
  height: "70vh",
  width: "50vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",

  ".limiter": {
    height: "90%",

    position: "relative",

    backgroundColor: "$color-background",
    boxShadow: "$sh1",
    borderRadius: "10px",

    img: {
      height: "120%",

      position: "absolute",
      bottom: 0,
      left: "50%",

      borderRadius: "10px",
      transform: "translateX(-50%)",
    },

    ".background": {
      width: "50vh",
    },
  },
});
