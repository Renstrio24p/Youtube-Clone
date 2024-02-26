import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client"
import './css/index.css'
import Start from "./Start";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root') as HTMLElement)
.render(
    <StrictMode>
        <BrowserRouter>
            <Start />
        </BrowserRouter>
    </StrictMode>
)