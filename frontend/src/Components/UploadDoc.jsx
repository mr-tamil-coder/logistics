import React, { useState } from "react";
import axios from "axios";

function UploadDoc() {
  const [file, setFile] = useState(null);
  const [customerId, setCustomerId] = useState("");
  const [fileType, setFileType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(""); // Clear any previous errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (!file || !customerId || !fileType) {
      setError("Please fill in all fields and select a file.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("document", file);
    formData.append("customerId", customerId);
    formData.append("fileType", fileType);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true // Important for sending cookies
      });
      
      alert(response.data.message);
      // Clear form after successful upload
      setFile(null);
      setCustomerId("");
      setFileType("");
    } catch (error) {
      setError(error.response?.data?.error || "File upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl mb-4">Upload Document</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1">Customer ID:</label>
          <input
            type="text"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label className="mb-1">File Type:</label>
          <select
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
            className="border p-2 rounded"
            required
          >
            <option value="">Select file type</option>
            <option value="document">Document</option>
            <option value="image">Image</option>
            <option value="pdf">PDF</option>
          </select>
        </div>
        
        <div className="flex flex-col">
          <label className="mb-1">Choose File:</label>
          <input 
            type="file"
            onChange={handleFileChange}
            className="border p-2 rounded"
            required 
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}

export default UploadDoc;