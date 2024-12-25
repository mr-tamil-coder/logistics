import React, { useState } from "react";
import "./login.css";
import Logo from "./Logo.jsx";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alert from "./Alert";
function Signup() {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        signupData
      );
      if (response.status === 201) {
        Alert("success", "Signup successful!");
      }
      console.log(response);
    } catch (error) {
      Alert("error", "Signup failed. Please try again.");
      console.log("Signup error:", error);
    }
  };
  return (
    <>
      <Logo />
      <div className=" mt-12 flex items-center justify-center ">
        <div className="w-10/12 md:w-1/2 lg:w-1/4  h-4/5 md:h-4/5 max-h-screen rounded-lg shadow-lg bg-gray-300">
          <form
            className=" web-color p-6 rounded-lg shadow-lg signup-height"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="input-box my-2 p-4 border border-gray-300 rounded w-full"
              placeholder="Username"
              name="username"
              value={signupData.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              className="input-box my-3 p-4 border border-gray-300 rounded w-full"
              placeholder="Password"
              name="password"
              value={signupData.password}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              className="input-box my-3 p-4 border border-gray-300 rounded w-full"
              placeholder="E-mail"
              name="email"
              value={signupData.email}
              onChange={handleChange}
            />

            <br />
            <div className="text-center mb-3">
              <button
                type="submit"
                className=" bg-black text-white py-2 mt-7  px-4 rounded w-2/5 hover:bg-blue-600 "
              >
                Sign up
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Signup;
