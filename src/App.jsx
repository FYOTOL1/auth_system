import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import Dashboard from "./pages/dashboardPage";
import Button from "./components/common/Button";

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
    element: (
      <div className="text-4xl font-semibold text-blue-500 flex justify-center items-center h-screen w-full">
        <Link className="transition-all text-white" to="/dashboard">
          <Button text="Visit To Dashboard" disabled={true} />
        </Link>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
