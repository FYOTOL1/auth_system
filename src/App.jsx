import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import Dashboard from "./pages/dashboardPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
