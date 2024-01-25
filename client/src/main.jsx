import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Css
import "./index.css";

// Pages
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import GdcAre from "./pages/GdcAre.jsx";
import Galleri from "./pages/Galleri.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gdc-are", element: <GdcAre /> },
      { path: "/galleri", element: <Galleri /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
