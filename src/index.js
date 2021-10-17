import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { LinksProvider } from "./contexts/LinksContext";
import { UserProvider } from "./contexts/UserContext";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
    <React.StrictMode>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
        />
        <UserProvider>
            <LinksProvider>
                <App />
            </LinksProvider>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
