import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import AuthenticationContextProvider from "./contexts/AuthenticationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </React.StrictMode>
);
