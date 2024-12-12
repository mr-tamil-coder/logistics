import React from "react";
import "./login.css";
function Signup() {
  return (
    <>
    <div className=" min-h-screen flex items-center justify-center">
     <div className="w-10/12 md:w-1/2 lg:w-1/3  h-4/5 md:h-4/5 max-h-screen rounded-lg shadow-lg bg-gray-400">
     <form className=" web-color p-6 rounded-lg shadow-lg max-h-96">
        <input
          type="text"
          className="input-box mb-4 p-2 border border-gray-300 rounded w-full"
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          className="input-box mb-4 p-2 border border-gray-300 rounded w-full"
          placeholder="Password"
        />
        <br />
        <input
          type="email"
          className="input-box mb-4 p-2 border border-gray-300 rounded w-full"
          placeholder="E-mail"
        />
        <br />
       <div className="text-center">
       <button
          type="submit"
          className=" bg-black text-white py-2 px-4 rounded w-2/5 hover:bg-blue-600 "
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
