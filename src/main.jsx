import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectedComponenContext from "./components/SelectedComponenContext.jsx";
import DesignToCodeMainPage from "./components/DesignToCode/Components/DesingToCodeMainPage.jsx";
import FileUpload from "./components/example.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={App} />{" "}
  </React.StrictMode>
);
