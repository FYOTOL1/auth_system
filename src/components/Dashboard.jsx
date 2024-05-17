import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout";

const Dashboard = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("user_info");
    navigate("/login");
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-between items-center gap-20 w-full">
          <header className="flex justify-center items-center gap-5 h-10 w-full bg-gray-100 shadow-md shadow-gray-300">
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
            <button onClick={() => Logout()}>Logout</button>
          </header>
          <h1 className="text-4xl text-blue-400">Dashboard</h1>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
