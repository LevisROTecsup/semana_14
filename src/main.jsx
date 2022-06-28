import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/tailwind.css";
import "./styles/index.css";

import Router from "./router";
import { AuthProvider } from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
