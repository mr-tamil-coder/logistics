import React, { useState } from "react";
import { AlertCircle, Check, Package, Truck, FileText, DollarSign } from "lucide-react";

function Enquiry() {
  const [formData, setFormData] = useState({
    customer_code: "",
    customer_name: "",
    service_request: "Import",
    mode: "Air",
    origin_port: "",
    delivery_port: "",
    no_of_packages: "",
    weight: "",
    dimensions: "",
    commodity: "",
    terms_of_shipment: "",
    invoice_no: "",
    invoice_value: "",
    service_request2: "",
    currency: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/overview/enquiry", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSubmitStatus('success');
      console.log("Enquiry response:", data);
    } catch (error) {
      setSubmitStatus('error');
      console.log("Enquiry error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const renderInput = (label, name, type = "text", options = null) => (
    <div className="grid lg:grid-cols-2 gap-4 my-3 animate-fadeIn">
      <label className="label text-gray-700 font-medium">
        {label}:
      </label>
      {options ? (
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out"
        >
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out"
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <form 
        className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8"
        onSubmit={handleSubmit}
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Customer Details Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Package className="w-6 h-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Customer Details</h2>
              </div>
              {renderInput("Customer Code", "customer_code")}
              {renderInput("Customer Name", "customer_name")}
            </div>

            {/* Service Details Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Truck className="w-6 h-6 text-green-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Service Details</h2>
              </div>
              {renderInput("Service Request", "service_request", "text", ["Import", "Export"])}
              {renderInput("Mode", "mode", "text", ["Air", "Sea"])}
            </div>

            {/* Shipment Details Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-purple-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Shipment Details</h2>
              </div>
              {renderInput("Origin Port", "origin_port")}
              {renderInput("Delivery Port", "delivery_port")}
              {renderInput("No of Packages", "no_of_packages")}
              {renderInput("Weight", "weight")}
              {renderInput("Dimensions", "dimensions")}
              {renderInput("Commodity", "commodity")}
              {renderInput("Terms of Shipment", "terms_of_shipment")}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Invoice Details Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <DollarSign className="w-6 h-6 text-yellow-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Invoice Details</h2>
              </div>
              {renderInput("Invoice No", "invoice_no")}
              {renderInput("Invoice Value", "invoice_value")}
              {renderInput("Service Request", "service_request2")}
              {renderInput("Currency", "currency")}
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full max-w-md px-6 py-3 rounded-lg text-white font-semibold
                  ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}
                  transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg
                  flex items-center justify-center space-x-2
                `}
              >
                {isSubmitting ? (
                  <span className="inline-block animate-pulse">Processing...</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    {submitStatus === 'success' && <Check className="w-5 h-5 ml-2" />}
                    {submitStatus === 'error' && <AlertCircle className="w-5 h-5 ml-2" />}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Enquiry;