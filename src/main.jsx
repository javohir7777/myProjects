import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
