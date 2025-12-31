// src/router.tsx
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import AppLayout from "layouts/AppLayout";
import Home from "components/Home";
import About from "components/About";

const rootRoute = createRootRoute({
  component: () => <AppLayout />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({ routeTree });

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
