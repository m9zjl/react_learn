import React, { createRoot } from "react-dom/client";
import "./styless.css"
import App from "./App";
import { StrictMode } from "react";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
