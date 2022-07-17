import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./index.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <BrowserRouter basename="/yaqeen-patient/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
