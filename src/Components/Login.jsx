import React from "react";
import "./login.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Login = () => {
  return (
  <>
      <Logo/>

<div className=" flex items-center justify-center w-full ">
  <div className="mt-12 w-10/12 md:w-1/2 lg:w-1/4  rounded-lg shadow-lg bg-white">
    <form action="" className="bg-gray-300 p-6 rounded-lg login-height">
      <input
        type="text"
        className="input-box  mb-6 my-5 p-3 border border-gray-300 rounded w-full"
        placeholder={"Username/Email"}
      />
      <br />
      <input  
        type="password" 
        className="input-box  p-3 mt-5 border border-gray-300 rounded w-full"
        placeholder={"Password"}
      />
      <br />
      <p className="p-3 ">
        <Link to="/forget">Forgot Password ?</Link>
      </p>
      <div className="role mt-12 text-center ">
    
        <br />
        <p className=""><Link to="/signup"> New user? Create account </Link></p>
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
