import React, { useRef, useState } from "react";
import { CiSaveUp2 } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai"; // Import eye icon for view

const FileExplorer = ({handleFile}) => {
  const fileInputRef = useRef(null);
  //extra
  const [selectedFile, setSelectedFile] = useState(null);

  const openFileExplorer = () => {
    fileInputRef.current.click();
  };

  //extra file
  const handleFileChange = (event) => {
    console.log(event.target.files);
    
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log(file);
      
      console.log("Selected file:", file.name);
      handleFile(file.name);
    }
  };

  //extra view
  const viewFile = () => {
    if (selectedFile) {
      // Create object URL for the file
      const fileURL = URL.createObjectURL(selectedFile);
      console.log(fileURL);
      
      window.open(fileURL, '_blank');
    }
  };

  return (
    <div className="flex gap-2 absolute top-3 right-3">
      {/* Upload button */}
      <CiSaveUp2 
        onClick={openFileExplorer}
        className="cursor-pointer text-gray-600 hover:text-gray-800"
        size={20}
      />

      {/* View button - only show if file is selected */}
      {selectedFile && (
        <AiOutlineEye
          onClick={viewFile}
          className="cursor-pointer text-gray-600 hover:text-gray-800"
          size={20}
        />
      )}

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