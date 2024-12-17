import React, { useRef, useState } from "react";
import { FaSave } from "react-icons/fa";

const FileExplorer = ({handleFile}) => {
  const fileInputRef = useRef(null);
  const openFileExplorer = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target?.files[0].name;
    console.log(fileInputRef.current);
    console.log("Selected fiels",selectedFiles)
    handleFile(selectedFiles);
  };

  return (
    <div className={`cursor-pointer absolute top-3 right-3`}>
      {/* Save Icon */}
      <FaSave
        onClick={openFileExplorer}
        className="text-gray-600 hover:text-gray-800"
        size={20}
      />

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileExplorer;
