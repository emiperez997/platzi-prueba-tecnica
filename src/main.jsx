import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App/App.jsx";
import "./index.css";
import { ShoppingCartProvider } from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </React.StrictMode>
);
