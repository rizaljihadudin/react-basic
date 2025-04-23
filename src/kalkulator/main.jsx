import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Kalkulator from "./Kalkulator";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Kalkulator/>
    </StrictMode>
)