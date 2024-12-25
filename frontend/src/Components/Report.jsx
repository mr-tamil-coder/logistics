import React from "react";
import "./Report.css";

const Report = () => {
  return (
    <>
      <div>
        <table className="container-report">
          <tbody>
            <th>Pre-defined Reports</th>
            <th className="head-report">Custom Reports</th>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Report;
