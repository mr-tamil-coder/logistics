import React from 'react';
import { AiOutlineUser } from "react-icons/ai"; 
import { RxDashboard } from "react-icons/rx";
import { RiFocus3Line } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { VscPieChart } from "react-icons/vsc";
import { TbReport } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFillBoxSeamFill } from "react-icons/bs";
import './overview.css';

import Overviewlogo from"./Overviewlogo";



function Overview(){
    

    return(
    <>
    <div>
       <Overviewlogo/>
        <ul className='overview-container'>
            <li><RxDashboard style={{display:"inline-block"}}/>Dashboard</li>
            <li><AiOutlineUser style={{display:"inline-block"}}/>Customer</li>
            <li><RiFocus3Line style={{display:"inline-block"}}/>Enquiry</li>
            <li><BsFillBoxSeamFill style={{display:"inline-block"}}/>Air</li>
            <li><AiOutlineGlobal style={{display:"inline-block"}}/>Sea</li>
            <li><TbReport style={{display:"inline-block"}}/>Customer Clearance</li>
            <li><FaTruckFast style={{display:"inline-block"}}/>Transporter</li>
            <li><CiLocationArrow1 style={{display:"inline-block"}}/>Opus-corner</li>
                <li><VscPieChart style={{display:"inline-block"}}/>Reports</li>
        </ul>
    </div>



    
    
    
    
    
    </>);
}



export default Overview