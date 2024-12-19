import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

function Profile() {
  // State to toggle the dropdown
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  

  

  // Function to handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Function to handle logout (example)
  const handleLogout = () => {
    console.log("sign out");
    // Add your logout logic here, e.g., clearing tokens or redirecting
  };

  return (
    <div className="relative inline-block">
      {/* Profile Icon */}
      <div
        className="text-red-700 flex items-center justify-center flex-col px-5  space-x-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <AiOutlineUser className="text-4xl mr-5" />
        <div>
          <p className="text-sm font-medium"></p>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div className="absolute top-12 right-0 bg-white  rounded shadow-md w-40">
          <ul>
          <li
              className="hover:bg-blue-300 px-4 py-2 cursor-pointer text-gray-700 text-sm bg-blue-200 border-none"
              onClick={handleLogout}
            >
              Username
            </li>
            <li style={{}}
              className="hover:bg-red-300 px-4 py-2 cursor-pointer text-gray-700 text-sm bg-blue-200 border-none "
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;
