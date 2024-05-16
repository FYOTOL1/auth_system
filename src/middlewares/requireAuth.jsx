/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const requireAuth = ({ children }) => {
  const [Authed, setAuthed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_info")) {
      setAuthed(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);
  return <>{Authed && children}</>;
};

export default requireAuth;
