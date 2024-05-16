import DashboardComp from "../components/Dashboard";
import RequireAuth from "../middlewares/requireAuth";

const Dashboard = () => {
  return (
    <>
      <RequireAuth>
        <DashboardComp />
      </RequireAuth>
    </>
  );
};

export default Dashboard;
