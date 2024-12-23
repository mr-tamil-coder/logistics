import React, { useState } from "react";
import "./login.css";
import Logo from "./Logo.jsx";
import axios from "axios"; 

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <Logo />
      <div className="mt-12 flex items-center justify-center">
        <div className="w-10/12 md:w-1/2 lg:w-1/4 h-4/5 md:h-4/5 max-h-screen rounded-lg shadow-lg bg-gray-300">
          <form
            className="web-color p-6 rounded-lg shadow-lg signup-height"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="username"
              className="input-box my-2 p-4 border border-gray-300 rounded w-full"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              name="password"
              className="input-box my-3 p-4 border border-gray-300 rounded w-full"
              placeholder="Password"
              value={formData.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              name="email"
              className="input-box my-3 p-4 border border-gray-300 rounded w-full"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <div className="text-center mb-3">
              <button
                type="submit"
                className="bg-black text-white py-2 mt-7 px-4 rounded w-2/5 hover:bg-blue-600"
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
