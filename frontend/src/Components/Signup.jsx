import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "./Logo";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        signupData
      );
      if (response.status === 200) {
        toast.success("Signup successful!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Logo />
      <div className="flex items-center justify-center w-full">
        <div className="mt-12 w-10/12 md:w-1/2 lg:w-1/4 rounded-lg shadow-lg bg-white">
          <form
            className="bg-gray-300 p-6 rounded-lg"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              className="input-box mb-6 my-3 p-3 border border-gray-300 rounded w-full"
              placeholder="Email"
              name="email"
              value={signupData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="input-box mb-6 my-3 p-3 border border-gray-300 rounded w-full"
              placeholder="Password"
              name="password"
              value={signupData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              className="input-box mb-6 my-3 p-3 border border-gray-300 rounded w-full"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={handleChange}
            />
            <button className="bg-black text-white py-2 px-4 rounded w-full hover:bg-blue-600">
              Signup
            </button>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-700 underline">
                Login
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Signup;
