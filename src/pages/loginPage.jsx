import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import LoginComp from "../components/Login";

const Login = () => {
  const [Authed, setAuthed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_info")) {
      navigate("/dashboard");
    } else {
      setAuthed(true);
    }
  }, [navigate]);

  return (
    <>
      {Authed && (
        <Layout>
            <LoginComp />
          
        </Layout>
      )}
    </>
  );
};

export default Login;
