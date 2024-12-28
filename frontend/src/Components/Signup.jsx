import React, { useState } from "react";
import "./login.css";
import Logo from "./Logo.jsx";
import axios from "axios";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
function Signup() {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const clientid="139241175378-bja01i0fg7dpv9q77rk0qod54cu7ikhc.apps.googleusercontent.com";
  const [userInfo, setUserInfo] = useState(null);
  
  const handleError =() => { 
    console.error('Login Failed');
  }

   const handleLoginSuccess = async (response) => {
    const { credential } = response;

    try {
      const res = await axios.post('http://localhost:5000/api/auth/google-login', { credential });
      setUserInfo(res.data.user);
      console.log(res.data.message); // 'User signed up' or 'User logged in'
 
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        signUpData
      );
      alert("Success");
    } catch (err) {
      alert("Signup failed. Please try again.");
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
              value={signUpData.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              className="input-box my-3 p-4 border border-gray-300 rounded w-full"
              placeholder="Password"
              name="password"
              value={signUpData.password}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              className="input-box my-3 p-4 border border-gray-300 rounded w-full"
              placeholder="E-mail"
              name="email"
              value={signUpData.email}
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
              <GoogleOAuthProvider className="bg-black  text-white py-2 px-4 rounded w-2/5 hover:bg-blue-600"
               clientId={clientid}>
               <GoogleLogin onSuccess={handleLoginSuccess } Failure={handleError}  />
               </GoogleOAuthProvider>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
