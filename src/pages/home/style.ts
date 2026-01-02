import { styled } from "@stitches/react";

export const MainContainer = styled("div", {
    width: "100%",
    // paddingTop: "80px",
    overflow: "hidden", 
    position: "relative",
});

export const SliderWrapper = styled("div", {
    width: "100%",
    height: "100%", 
    transition: "transform 1s cubic-bezier(0.645, 0.045, 0.355, 1.000)",
});

export const Section = styled("div", {
    height: "100dvh",
    width: "100%",
    
    boxSizing: "border-box",
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});