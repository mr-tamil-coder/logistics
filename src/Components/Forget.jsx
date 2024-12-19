import React from "react";
import Logo from "./Logo";
import "./login.css";
const Forget = () => {
  return (
    <>
      <div>
        <Logo />
        <div className="container-forget">
          <form className="forget-container">
            <div>
              <label>Enter your Email:</label>
              <input
                type="email"
                className="my-4 p-2 border border-gray-300 rounded w-full"
              ></input>
            </div>

            <div className=" mt-5 p-2 bg-slate-600">Generate OTP</div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Forget;
