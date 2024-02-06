import React, { createRoot } from "react-dom/client";
import "./styless.css"
import { StrictMode } from "react";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
