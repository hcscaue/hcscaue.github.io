import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import * as styled from "./styles/global";
import "./styles/colors";
import "./styles/shadows";

styled.globalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
