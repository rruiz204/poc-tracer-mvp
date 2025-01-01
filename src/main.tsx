import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css"

const root = document.getElementById("root")!;

const component = (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

createRoot(root).render(component);
