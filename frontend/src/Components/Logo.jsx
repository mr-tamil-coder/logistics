import React from "react";
import "./logo.css";
import ivw from "./img/logo.png";
import { useState } from "react";
function Logo() {
  const [role, setRole] = useState("Customer");
  localStorage.setItem("userRole", role);

  return (
    <div className="containers flex justify-between items-center bg-gray-400">
      <div className="img">
        <img src={ivw} className="logostyle"></img>
      </div>

      <div className="w-1/2 flex justify-end mx-5">
        <span className=" text-xl">Role :</span>{" "}
        <select
          id=""
          className="select-role border border-gray-300 rounded w-1/6 mt-2"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Customer">Customer</option>
          <option value="Shipper">Shipper</option>
          <option value="Agents">Agents</option>
          <option value="Port">Port</option>
        </select>
      </div>
    </div>
  );
}

export default Logo;
