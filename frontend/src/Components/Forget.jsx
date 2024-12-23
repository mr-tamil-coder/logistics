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
              
              <input
                type="email"
                className="my-4 p-2 border border-gray-300 rounded w-full"
                placeholder="Enter your Email:"
              ></input>
            </div>

            <button className=" mt-5 p-2 px-3 rounded-lg bg-slate-600">Generate OTP</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Forget;
