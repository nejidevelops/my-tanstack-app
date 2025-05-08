import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createRootRoute, createRouter, createRoute, Outlet } from "@tanstack/react-router";

function Homepage() {
  return <h1>Home</h1>;
}
function About() {
  return <h1>About</h1>;
}

const routeRoot = createRootRoute({
  component: () => (
    <div>
      <h1>Root</h1>
      <Outlet />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => routeRoot,
  path: "/",
  component: Homepage,
});

const aboutRoute = createRoute({
  getParentRoute: () => routeRoot,
  path: "/about",
  component: About,
});

const router = createRouter({
  routeTree: routeRoot.addChildren([homeRoute, aboutRoute]),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);