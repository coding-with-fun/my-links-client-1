import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LinksProvider } from "./contexts/LinksContext";
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <LinksProvider>
            <App />
        </LinksProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
