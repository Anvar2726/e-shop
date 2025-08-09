import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import StoreProvider from "./redux/store/index.jsx";

import App from "./App.jsx";


import AOS from "aos";

import "swiper/css";
import "aos/dist/aos.css"; 
import "react-toastify/dist/ReactToastify.css"
import "./index.css";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
