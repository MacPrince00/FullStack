import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePluginGhPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA(),
    VitePluginGhPages({
      // Specify other options here
      domain: "https://yourusername.github.io/repository-name/",
    }),
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
