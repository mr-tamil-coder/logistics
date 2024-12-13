import React from "react";
import './logo.css';
import ivw from "./img/logo.png"
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai"; 

  function Overviewlogo(){
    return(
        
        
        <div className="containers bg-gray-400">
            <img src={ivw} className="logostyle"></img>
            <div className="notification-login">
            <button style={{backgroundColor:"lightgreen"}}><MdNotificationsNone style={{display:"inline-block"}} /></button>
            <button ><AiOutlineUser style={{marginLeft:"6px"}}/>name</button>
            </div>

        </div> 
 );
  }
   
    
    

export default Overviewlogo

