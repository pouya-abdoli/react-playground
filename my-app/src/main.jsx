import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Test from "./Test.jsx";
import "./index.css";
import Parent from "./Parent.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <div>
    <Parent />
  </div>,
  // </StrictMode>,
);
