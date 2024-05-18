import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
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
    element: (
      <div className="text-4xl font-semibold text-blue-500 flex justify-center items-center h-screen w-full">
        <Link
          className="transition-all text-white hover:bg-blue-700 py-3 px-6 bg-blue-500"
          to="/dashboard"
        >
          Visit to Dashboard
        </Link>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
