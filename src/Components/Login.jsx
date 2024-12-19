import React from "react";
import { useState } from "react";
import "./login.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <Logo />

      <div className=" flex items-center justify-center w-full ">
        <div className="mt-12 w-10/12 md:w-1/2 lg:w-1/4  rounded-lg shadow-lg bg-white">
          <form action="" className="bg-gray-300 p-6 rounded-lg login-height">
            <input
              type="text"
              className="input-box  mb-6 my-3 p-3 border border-gray-300 rounded w-full"
              placeholder={"Username/Email"}
            />
            <br />
            <div className="pwd relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input-box  border border-gray-300 rounded w-full"
                placeholder="Password"
              />
              <div
                className="icon absolute right-3 top-1/2 -translate-y-1/2 transform  cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash className="text-xl"/> : <FaEye />}
              </div>
            </div>
            <br />
            <p className="p-3 underline">
              <Link to="/forget">Forgot Password ?</Link>
            </p>
            <div className="role  text-center ">
              <br />
              <p className="mb-4">
                <Link to="/signup"> New user? Create account </Link>
              </p>
              <button className="bg-black  text-white py-2 px-4 rounded w-2/5 hover:bg-blue-600">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
