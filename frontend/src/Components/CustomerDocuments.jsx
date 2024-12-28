import React, { useState, useEffect } from "react";
import axios from "axios";

function CustomerDocuments() {
  const [customerId, setCustomerId] = useState("");
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDocuments = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`http://localhost:5000/${customerId}`, {
        withCredentials: true, // Important for cookies if needed
      });
      setDocuments(response.data.documents);
    } catch (error) {
      setError("Failed to fetch documents. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!customerId.trim()) {
      setError("Please enter a valid Customer ID.");
      return;
    }
    fetchDocuments();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl mb-4">Customer Documents</h2>

      <form onSubmit={handleSearch} className="mb-4 space-y-4">
        <div className="flex flex-col">
          <label className="mb-1">Customer ID:</label>
          <input
            type="text"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="border p-2 rounded"
            placeholder="Enter Customer ID"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Fetching..." : "Get Documents"}
        </button>
      </form>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {!loading && documents.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Documents List</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">File Name</th>
                <th className="border p-2">File Type</th>
                <th className="border p-2">Upload Date</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="border p-2">{doc.id}</td>
                  <td className="border p-2">{doc.original_name}</td>
                  <td className="border p-2">{doc.file_type}</td>
                  <td className="border p-2">{new Date(doc.upload_date).toLocaleString()}</td>
                  <td className="border p-2">
                    <a
                      href={`http://localhost:5000/${doc.file_path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && documents.length === 0 && customerId && (
        <p className="text-gray-500">No documents found for this customer.</p>
      )}
    </div>
  );
}

export default CustomerDocuments;
