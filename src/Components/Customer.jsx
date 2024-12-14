import React from "react";
import { FaSave } from "react-icons/fa";
import "./customer.css";

function Customer() {
  return (
    <>
      <div className="ml-12">
        <form>
          <div>
            <h1 className="font-bold">Customer Identification</h1>
            <label>Customer Code:</label>
            <input type="text" />
            <br />

            <label>Customer Name:</label>
            <input type="text" />
            <br />
            <label>Contact Person Name:</label>
            <input type="text" />
            <br />
            <label>Address: </label>
            <input type="text" />
            <br />
            <label>Phone Number: </label>
            <input type="text" />
            <br />
            <label>Mail Id: </label>
            <input type="email" />
            <br />
          </div>
          <div>
            <h1 className="font-bold">Sales Information</h1>
            <label>LKC Sales Person:</label>
            <input type="text" />
          </div>
          <div>
            <h1 className="font-bold">Follow-Up Information</h1>
            <label>Visit Date: </label>
            <input type="date" />
            <br />
            <label>Follow Up Date</label>
            <input type="date" />
          </div>
          <div>
            <h1 className="font-bold">Customer Requirements</h1>
            <textarea rows={5} cols={20}></textarea>
          </div>
          <div>
            <h1>Feedback:</h1>
            <textarea rows={5} cols={20}></textarea>
          </div>
          <div>
            <h1 className="font-bold">Document Uploads:</h1>
            <div>
              <h1 className="font-bold">Identification Proofs:</h1>
              <label> PAN Copy:</label>
              <div style={{ position: "relative", display: "inline-block" }}>
                <input type="text" />
                <FaSave
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
              <br />
              <label>TAN Copy</label>
              <div style={{ position: "relative", display: "inline-block" }}>
                <input type="text" />
                <FaSave
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
              <br />
              <label>Aadhaar Copy:</label>
              <div style={{ position: "relative", display: "inline-block" }}>
                <input type="text" />
                <FaSave
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
              <br />
              <label>Telephone Bill Copy:</label>
              <div style={{ position: "relative", display: "inline-block" }}>
                <input type="text" />
                <FaSave
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
              <br />
            </div>
            <div>
              <h1 className="font-bold">Financial Documents</h1>
              <div>
                <label>Bank cheque Copy:</label>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <input type="text" />
                  <FaSave
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                <br />
                <label>Credit Application Form:</label>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <input type="text" />
                  <FaSave
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                <br />
                <label>Incorportation Certificate:</label>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <input type="text" />
                  <FaSave
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                <br />
                <label>GST Form 6 Annexure B:</label>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <input type="text" />
                  <FaSave
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                  <br />
                </div>
              </div>
            </div>
            <button>Upload</button>
            <button>Save all</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Customer;
