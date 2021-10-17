import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LinksProvider } from "./contexts/LinksContext";
import { UserProvider } from "./contexts/UserContext";
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <LinksProvider>
                <App />
            </LinksProvider>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
