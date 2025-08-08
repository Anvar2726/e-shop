import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AOS from "aos";

import App from "./App.jsx";
import "aos/dist/aos.css"; 
import "./index.css";
import StoreProvider from "./redux/store/index.jsx";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
