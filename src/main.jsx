import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import EnglishMenu from "./pages/EnglishMenu.jsx";
import GridMenu from "./pages/GridMenu.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/qr-menu" element={<GridMenu />} />
      <Route path="/qr-menu/home" element={<App />} />
      <Route path="/qr-menu/english-menu" element={<EnglishMenu />} />
      <Route path="/qr-menu/grid-menu" element={<GridMenu />} />
    </Routes>
  </BrowserRouter>
);
