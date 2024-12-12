import React from "react";

function Signup() {
  return (
    <div className="bg-gray-400 min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded-lg shadow-lg">
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
        <button
          type="submit"
          className=" bg-black text-white py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
