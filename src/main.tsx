import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
