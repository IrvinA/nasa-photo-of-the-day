import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import theme from "./theme"
import { ThemeProvider } from "styled-components"

ReactDOM.render(
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>, 
document.getElementById("root")
)
