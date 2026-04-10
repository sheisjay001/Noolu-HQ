import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Onboarding } from "./screens/Onboarding/Onboarding";
import { WorkspaceSetup } from "./screens/WorkspaceSetup/WorkspaceSetup";
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { Login } from "./screens/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/login",
    element: <Login />,
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
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
