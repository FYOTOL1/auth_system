import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import RegisterComp from "../components/Register";
import { useEffect, useState } from "react";

const Register = () => {
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
          <Layout>
            <RegisterComp />
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default Register;
