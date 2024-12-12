import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center w-full ">
      <div className="w-10/12 md:w-1/2 lg:w-1/4 max-h-screen rounded-lg shadow-lg bg-white">
        <form action="" className="bg-gray-300 p-6 rounded-lg login-height">
          <input
            type="text"
            className="input-box mb-6 my-5 p-3 border border-gray-300 rounded w-full"
            placeholder={"Username/Email"}
          />
          <br />
          <input  
            type="password"
            className="input-box  p-3 mt-5 border border-gray-300 rounded w-full"
            placeholder={"Password"}
          />
          <br />
          <p className="p-3 ">Forgot Password</p>
          <div className="role mt-12 text-center ">
            <span>Role :</span>{" "}
            <select
              id=""
              className="select-role border border-gray-300 rounded w-1/3 mt-2"
            >
              <option value="Customer">Customer</option>
              <option value="Shipper">Shipper</option>
              <option value="Agents">Agents</option>
              <option value="Port">Port</option>
            </select>
            <br />
            <p className="py-5">New user? Create account</p>
            <button className="bg-black  text-white py-2 px-4 rounded w-2/5 hover:bg-blue-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
