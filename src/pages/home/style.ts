import { styled, theme } from "../../global/theme";

export const MainContainer = styled("div", {
    position: "fixed", 
    top: 0,
    left: 0,
    
    width: "100%",
    height: "100dvh",
    
    overflow: "hidden", 
    margin: 0,
    padding: 0,
    
    backgroundColor: theme.colors.white, 
});

export const SliderWrapper = styled("div", {
    width: "100%",
    height: "100%",
    transition: "transform 1s cubic-bezier(0.645, 0.045, 0.355, 1.000)",
});

export const Section = styled("div", {
    height: "100%", 
    width: "100%",
    
    boxSizing: "border-box",
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});