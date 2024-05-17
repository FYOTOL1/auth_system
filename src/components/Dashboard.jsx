import { Link } from "react-router-dom";
import Layout from "../Layout";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <header className="flex justify-center items-center gap-5 h-10 w-full bg-gray-50 shadow-sm">
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </header>
        <h1 className="text-4xl text-blue-400">Dashboard</h1>
      </Layout>
    </>
  );
};

export default Dashboard;
