/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import AuthLayout from "./AuthLayout";
import Button from "./common/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Show_Password, setShow_Password] = useState(false);

  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;

  const navigate = useNavigate();

  const show_un_password = () => {
    if (Show_Password) {
      return (
        <>
          <IoMdEyeOff />
          <p>Hide</p>
        </>
      );
    } else {
      return (
        <>
          <IoMdEye />
          <p>Show</p>
        </>
      );
    }
  };

  const LoginFunc = () => {
    const get_email_list = JSON.parse(localStorage.getItem("emails_list"));
    const check_email = get_email_list.some((f) => f === email);

    if (get_email_list && check_email) {
      localStorage.setItem("user_info", JSON.stringify({ email, password }));
      navigate("/dashboard");
    } else {
      toast.error("Incorrect Email or Password", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <AuthLayout>
        <p className="text-sm mt-2 text-zinc-800">
          Don't Have An Account?
          <Link className="underline text-black ms-1" to="/register">
            Register
          </Link>
        </p>

        <form onSubmit={(s) => s.preventDefault()} className="mt-8 w-full">
          <div className="flex flex-col gap-2 w-full text-zinc-500">
            <label htmlFor="email">Email</label>
            <input
              onChange={(c) => setEmail(c.target.value)}
              id="email"
              className={`outline outline-1 ${
                !regex.test(email)
                  ? "outline-red-300 focus:outline-red-700"
                  : "outline-gray-300 focus:outline-blue-600"
              } px-4 py-3 rounded-lg text-zinc-800 transition-all focus:outline-gray-700`}
              type="text"
              required
              value={email}
            />
          </div>

          <div className="flex flex-col gap-2 w-full text-zinc-500 mt-6">
            <label
              className="flex justify-between items-center"
              htmlFor="password"
            >
              <p>Password</p>
              <button
                onClick={() => setShow_Password(!Show_Password)}
                className="flex gap-1 items-center"
              >
                {show_un_password()}
              </button>
            </label>
            <input
              onChange={(c) => setPassword(c.target.value)}
              id="password"
              className={`outline outline-1 ${
                password.length
                  ? "outline-gray-300 focus:outline-blue-700"
                  : "outline-red-300 focus:outline-red-600"
              } px-4 py-3 rounded-lg text-zinc-800 transition-all focus:outline-gray-700`}
              type={Show_Password ? "text" : "password"}
              value={password}
              required
            />
          </div>

          <p className="mt-7 text-zinc-700">
            By creating an account, you agree to the{" "}
            <span className="underline text-zinc-700">Terms of use</span> and{" "}
            <span className="underline text-zinc-700">Privacy Policy</span>.
          </p>
          <Button on_click_func={LoginFunc} text="Login" disabled={true} />
        </form>
      </AuthLayout>
    </>
  );
};

export default Login;
