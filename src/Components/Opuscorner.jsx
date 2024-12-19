import React from "react";
import "./opuscorner.css";

const Opuscorner=()=>{

    return(
        <>
        <div>
            <div className="select-container">
                <label className="select-box">Select Customer</label>
                <select className="option-box">
                    <option ></option>
                </select>
            </div>
            <div>
                <table className="container-table"><tr>
                    <th>Shipment Request</th>
                    <th>Order Processing</th>
                    <th>Order Confirmation</th>
                    <th>Update Milestone</th>
                    <th>ASM</th>
                    <th>Co2</th>

                    </tr>
                </table>
            </div>
        </div>
        </>
    )
}
export default Opuscorner