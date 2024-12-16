import React from "react";


function Enquiry(){


    return(

        <>
         <form style={{marginTop:"100px"}}>
        <div>
            <h1>Customer Details</h1>
            <label>Customer Code:</label>
            <input type="text"/><br/>
            <label>Customer Name:</label>
            <input type="text" />
        </div>
        <div>
            <h1>Service Details</h1>
            <label>Service Request:</label>
            <select>
                <option >Import</option>
                <option>Export</option>
            </select><br/>
            <label>Mode:</label>
            <select>
                <option >Air</option>
                <option>Sea</option>
            </select>
        </div>
        <div>
            <h1>Shipment Details</h1>
            <label>Origin Port:</label>
            <input type="text"></input><br/>
            <label>Delivery Port:</label>
            <input type="text"></input><br/>
            <label>Service Request:</label>
            <input type="text"></input><br/>
            <label>No of Packages:</label>
            <input type="text"></input><br/>
            <label>Weight:</label>
            <input type="text"></input><br/>
            <label>Dimensions:</label>
            <input type="text"></input><br/>
            <label>Commodity:</label>
            <input type="text"></input><br/>
            <label>Terms of Shipment:</label>
            <input type="text"></input><br/>

        </div>
        <div>
            <h1>Invoice Details</h1>
            <label>Invoice No:</label>
            <input type="text"></input><br/>
            <label>Invoice Value:</label>
            <input type="text"></input><br/>
            <label>Service Requset:</label>
            <input type="text"></input><br/>
        </div>
        </form>
            
        

        
        </>
    );
}
export default Enquiry