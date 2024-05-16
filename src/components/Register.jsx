import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Show_Password, setShow_Password] = useState(false);

  const navigate = useNavigate();

  const special_chars_list = [
    "*",
    "-",
    "_",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "+",
    "-",
    "~",
  ];

  const password_required_List = [
    { id: 1, text: "Use 8 or more characters", check: password.length >= 8 },
    {
      id: 2,
      text: "One Uppercase Character",
      check: Array.from(password).some((f) => f == f.toUpperCase()),
    },
    {
      id: 3,
      text: "One lowercase Character",
      check: Array.from(password).some((f) => f == f.toLowerCase()),
    },
    {
      id: 4,
      text: "One Special Character",
      check: Array.from(password).some((char) =>
        special_chars_list.includes(char)
      ),
    },
    {
      id: 5,
      text: "One number",
      check: /\d/.test(password),
    },
  ];

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

  const render_required = () => {
    return password_required_List.map((e) => {
      return (
        <li
          className={`flex items-center ${
            e.check ? "text-green-400" : "text-red-500"
          }`}
          key={e.id}
        >
          <RxDotFilled />
          <p>{e.text}</p>
        </li>
      );
    });
  };

  const RegisterFunc = () => {
    const check_password_correct = password_required_List.some(
      (f) => f.check === false
    );
    if (
      username.length &&
      email.length &&
      password.length &&
      check_password_correct === false
    ) {
      localStorage.setItem(
        "user_info",
        JSON.stringify({ username, password, email })
      );

      const get_email_list = localStorage.getItem("emails_list") ?? [];
      const new_email_list = [...get_email_list, email];
      localStorage.setItem("emails_list", JSON.stringify(new_email_list));
      navigate("/dashboard");
    } else {
      password_required_List.map((e) => {
        if (e.check === false) {
          toast.error(e.text + " Required", {
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
      <div className="w-full max-w-[800px] min-h-[700px] outline outline-1 outline-gray-100 rounded-md p-4">
        <img className="w-40" src="/logo.png" alt="Logo" />
        <div className="px-2 sm:px-16">
          <h1 className="mt-10 text-4xl font-sans text-zinc-700 font-semibold">
            Welcome to Learn2Earn
          </h1>
          <p className="text-sm mt-2 text-zinc-800">
            Already have an ccount?
            <Link className="underline text-black ms-1" to="/login">
              Log in
            </Link>
          </p>

          <form
            onSubmit={(s) => s.preventDefault()}
            className="mt-8 w-full max-w-[700px]"
          >
            <div className="flex flex-col gap-2 w-full text-zinc-500">
              <label htmlFor="email">Email</label>
              <input
                onChange={(c) => setEmail(c.target.value)}
                id="email"
                className="outline outline-1 outline-gray-300 px-4 py-3 rounded-lg text-zinc-800 transition-all focus:outline-gray-700"
                type="text"
                required
                name="email"
                value={email}
              />
            </div>

            <div className="flex flex-col gap-2 w-full text-zinc-500 mt-6">
              <label htmlFor="username">Username</label>
              <input
                onChange={(c) => setUsername(c.target.value)}
                id="username"
                className="outline outline-1 outline-gray-300 px-4 py-3 rounded-lg text-zinc-800 transition-all focus:outline-gray-700"
                type="text"
                required
                name="username"
                value={username}
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
                className="outline outline-1 outline-gray-300 px-4 py-3 rounded-lg text-zinc-800 transition-all focus:outline-gray-700"
                type={Show_Password ? "text" : "password"}
                value={password}
                required
                name="password"
              />
              <ul className="flex gap-x-10 gap-y-2 flex-wrap">
                {render_required()}
              </ul>
            </div>

            <p className="mt-7 text-zinc-700">
              By creating an account, you agree to the{" "}
              <span className="underline text-zinc-700">Terms of use</span> and{" "}
              <span className="underline text-zinc-700">Privacy Policy</span>.
            </p>

            <button
              onClick={() => RegisterFunc()}
              className="py-4 px-10 rounded-full bg-gray-400 text-white mt-10 transition-all hover:bg-zinc-900"
            >
              create an account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
