import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./components/Profile";
import Spinach from "./components/Spinach";
import Popeye from "./components/Popeye";
import DefaultProfile from "./components/DefaultProfile";
import ErrorPage from './components/ErrorPage';
import Router from './components/Router';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);