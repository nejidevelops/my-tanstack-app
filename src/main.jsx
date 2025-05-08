import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createRootRoute, createRouter, createRoute } from "@tanstack/react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

const routeRoot = createRootRoute({
  component: App,
  errorComponent: () => <div>Oops! Something went wrong.</div>,
  errorBoundary: true,
});

const homeRoute = createRoute({
  getParentRoute: () => routeRoot,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => routeRoot,
  path: "/about",
  component: About,
});

const userRoute = createRoute({
  getParentRoute: () => routeRoot,
  path: `/users/$userId`,
  component: User,
  loader: async({ params }) => {
    if (params.userId === '404') throw new Error('User not found');
    return { name: `User ${params.userId}`, id: params.userId };
  }
})

const router = createRouter({
  routeTree: routeRoot.addChildren([homeRoute, aboutRoute, userRoute]),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);