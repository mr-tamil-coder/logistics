import React from "react";
import './logo.css';
import ivw from "./img/logo.png"

  function Logo(){
    return(
        
        <div className="con">
        <div className="container bg-gray-400">
            <img src={ivw} className="logostyle"></img>

        </div> 
        </div>
 );
  }
   
    
    

export default Logo