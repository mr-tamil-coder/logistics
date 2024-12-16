import React from "react";

function Air (){
    return(<>
    <form>
        <div>
            <h1>Job Details</h1>
            <label>Job No:</label>
            <input type="text"></input><br/>
            <label>Agent Name:</label>
            <input type="text"></input>
        </div>
        <div>
            <h1>Shipping and Package Details</h1>
            <label>Shipping Bill No:</label>
            <input type="text"></input><br />
            <label>Shipping Bill Date:</label>
            <input type="text"></input><br />
            <label>MAWB No:</label>
            <input type="text"></input><br />
            <label>MAWB Date:</label>
            <input type="text"></input><br />
            <label>HAWB No:</label>
            <input type="text"></input><br />
            <label>No. of Pkg:</label>
            <input type="text"></input><br />
            <label>G.Weight:</label>
            <input type="text"></input><br />
            <label>Ch. Weight:</label>
            <input type="text"></input><br />
            <label>Dimensions:</label>
            <input type="text"></input><br />
            <label>Commodity:</label><br />
            <input type="text"></input>
        </div>
        <div>
            <h1>Port and Flight Details</h1>
            <label>Terms of Shipment:</label>
            <input type="text"></input><br />
            <label>Origin Port:</label>
            <input type="text"></input><br />
            <label>Destination Port:</label>
            <input type="text"></input><br />
            <label>Airlines Name:</label>
            <input type="text"></input><br />
            <label>Flight No:</label>
            <input type="text"></input><br />
            <label>Flight Date:</label>
            <input type="text"></input><br />
            <label>ETA:</label>
            <input type="text"></input><br />
            <label>ETD:</label>
            <input type="text"></input>
        </div>
        <div>
            <h1>Agentand Linear Details</h1>
            <label>Agent Debit Note:</label>
            <input type="text"></input><br />
            <label>Agent Debit Note Date:</label>
            <input type="text"></input><br />
            <label>Amount:</label>
            <input type="text"></input><br />
            <label>Currency:</label>
            <input type="text"></input><br />
            <label>Airline Debit Note:</label>
            <input type="text"></input><br />
            <label>Airline Debit Note Date:</label>
            <input type="text"></input>
        </div>
        <div>
            <h1>Documentation and Blling</h1>
            <label>Shipper Invoice No:</label>
            <input type="text"></input><br />
            <label>Amount:</label>
            <input type="text"></input><br />
            <label>Currency:</label>
            <input type="text"></input><br />
            <label>consol Manifest:</label>
            <input type="text"></input><br />
            <label>Airline DO Issued or Not:</label>
            <select>
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>
    
        
    </form>
    </>);

}

export default Air