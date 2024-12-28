import React, { useState } from "react";
import axios from "axios";
import Logo from "./Logo";
import "./login.css";

const ForgetPwd = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleGenerateOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/generate-otp", { email });
      setMessage(response.data.message);
      console.log("Otp done");
      
      setStep(2);
    } catch (error) {
      setError(error.response?.data?.error || "Failed to send OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", { email, otp });
      setMessage(response.data.message);
      console.log("Otp step 2 done");
      
      setStep(3);
    } catch (error) {
      setError(error.response?.data?.error || "Invalid OTP.");
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/reset-password", {
        email,
        newPassword,
        confirmPassword,
      });
      setMessage(response.data.message);
      setStep(1); // Reset form
    } catch (error) {
      setError(error.response?.data?.error || "Failed to reset password.");
    }
  };

  return (
    <div>
      <Logo />
      <div className="container-forget">
        <form className="forget-container" onSubmit={(e) => e.preventDefault()}>
          {step === 1 && (
            <>
              <input
                type="email"
                className="my-4 p-2 border border-gray-300 rounded w-full"
                placeholder="Enter your Email:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="mt-5 p-2 px-3 rounded-lg bg-slate-600 text-white"
                onClick={handleGenerateOtp}
              >
                Generate OTP
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <input
                type="text"
                className="my-4 p-2 border border-gray-300 rounded w-full"
                placeholder="Enter OTP:"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                className="mt-5 p-2 px-3 rounded-lg bg-slate-600 text-white"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <input
                type="password"
                className="my-4 p-2 border border-gray-300 rounded w-full"
                placeholder="Enter New Password:"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                className="my-4 p-2 border border-gray-300 rounded w-full"
                placeholder="Confirm Password:"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className="mt-5 p-2 px-3 rounded-lg bg-slate-600 text-white"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </>
          )}
          {error && <div className="text-red-500 mt-4">{error}</div>}
          {message && <div className="text-green-500 mt-4">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default ForgetPwd;
