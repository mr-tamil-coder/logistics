import React from "react";
import "./login.css";
import Logo from "./Logo.jsx";
function Signup() {
  return (
    <>
    <Logo/>
    <div className=" mt-12 flex items-center justify-center ">
     <div className="w-10/12 md:w-1/2 lg:w-1/4  h-4/5 md:h-4/5 max-h-screen rounded-lg shadow-lg bg-gray-300">
     <form className=" web-color p-6 rounded-lg shadow-lg signup-height">
        <input
          type="text"
          className="input-box my-4 p-4 border border-gray-300 rounded w-full"
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          className="input-box my-4 p-4 border border-gray-300 rounded w-full"
          placeholder="Password"
        />
        <br/>
        <input
          type="email"
          className="input-box my-4 p-4 border border-gray-300 rounded w-full"
          placeholder="E-mail"
        />
        <br />

        <div className="mt-5 text-center">
        <span className="font-">Role :</span>{" "}
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
        </div>
       <div className="text-center mb-3">
       <button
          type="submit"
          className=" bg-black text-white py-2 mt-12  px-4 rounded w-2/5 hover:bg-blue-600 "
        >
          Sign up
        </button>
       </div>
      </form>
     </div>
    </div>
    </>
  );
}

export default Signup;
