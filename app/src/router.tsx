// src/router.tsx
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

import Home from "components/Home";
import AppLayout from "layouts/AppLayout";
import About from "components/About";

// Root route that wraps header/footer and shared layout
const rootRoute = createRootRoute({
  component: AppLayout,
});

// Child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/", // index (home) path
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

// Build route tree
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

// Create router instance
export const router = createRouter({ routeTree });

// Export a provider component used in index.tsx
export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
