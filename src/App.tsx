import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Onboarding } from "./screens/Onboarding/Onboarding";
import { WorkspaceSetup } from "./screens/WorkspaceSetup/WorkspaceSetup";
import { Dashboard } from "./screens/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/workspace-setup",
    element: <WorkspaceSetup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
