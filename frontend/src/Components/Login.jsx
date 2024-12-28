import React, { useState } from "react";
import "./login.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alert from "./Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = ({ setAuthenticated, setApiAvailable }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        loginData
      );
      console.log(response);

      if (response.status === 200) {
        Alert("success", "Login successful!");
        setTimeout(() => {
          const token = response.data.token;
          localStorage.setItem("authToken", token);
          setAuthenticated(true);
          navigate("/overview");
        }, 2000);
      } else {
        console.log("err");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        Alert("error", "Password Incorrect. Please try again.");
      } else if (err.response && err.response.status === 404) {
        Alert("error", "Email Incorrect.");
      } else {
        Alert("error", "An error occurred. Please try again.");
      }
      setAuthenticated(false);
    }
  };

  const handleLoginSuccess = async (response) => {
    const { credential } = response;
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/google-login",
        { credential }
      );
      console.log(res.data.message); // 'User signed up' or 'User logged in'
      setAuthenticated(true);
      navigate("/overview");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLoginError = () => {
    console.error("Login Failed");
  };

  const clientId =
    "139241175378-bja01i0fg7dpv9q77rk0qod54cu7ikhc.apps.googleusercontent.com";

  return (
    <>
      <Logo />
      <div className="flex items-center justify-center w-full">
        <div className="mt-12 w-10/12 md:w-1/2 lg:w-1/4 rounded-lg shadow-lg bg-white">
          <form
            className="bg-gray-300 p-6 rounded-lg login-height"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="input-box mb-6 my-3 p-3 border border-gray-300 rounded w-full"
              placeholder="Username/Email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
            <br />
            <div className="pwd relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input-box border border-gray-300 rounded w-full"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
              <div
                className="icon absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye />}
              </div>
            </div>
            <br />
            <p className="p-3 underline">
              <Link to="/forget">Forgot Password?</Link>
            </p>
            <div className="role text-center">
              <br />
              <p className="mb-4">
                <Link to="/signup">
                  New user?{" "}
                  <span className="text-blue-700 underline">Create account</span>
                </Link>
              </p>
              <button className="bg-black text-white py-2 px-4 rounded w-2/5 hover:bg-blue-600">
                Login
              </button>
              <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onFailure={handleLoginError}
                />
              </GoogleOAuthProvider>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Login;
