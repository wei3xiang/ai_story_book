import React from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import routeTree from "./route.jsx";

const App = () => {
  const router = createBrowserRouter(routeTree);
  return <RouterProvider router={router} />;
};

export default App;
