import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="bg-gray-400 min-h-screen flex items-center justify-center">

      <div className="bg-red-300">
        <form action="" className="bg-white p-6"> 
          <input
            type="text"
            className="input-box mb-4 p-2 border border-gray-300 rounded w-full"
            placeholder={"username"}
          />{" "}
          <br />
          <input
            type="text"
            className="input-box mb-4 p-2 border border-gray-300 rounded w-full"
            placeholder={"Password"}
          />{" "}
          <br />
          <p className="p-3">Forgot Password</p>
          <div className="role text-center">
          Role:
          <select  id="" className="select-role">
            <option value="Customer">Customer</option>
            <option value="Shipper">Shipper</option>{" "}
            <option value="Agents">Agents</option>{" "}
            <option value="Port">Port</option>
          </select>
          </div>
          <br />
          <p>New user? Create account</p>
          <button className=" bg-black text-white py-2 px-4 rounded w-full hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
