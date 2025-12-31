import { createRouter, RouterProvider } from "@tanstack/react-router";
import { router as routeTree } from "./router";

const router = createRouter({ routeTree });
function App() {
  return <RouterProvider router={router} />;
}

export default App;
