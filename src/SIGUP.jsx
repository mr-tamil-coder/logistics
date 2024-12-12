import React from "react";

function SIGUP(){


    return(
        <div>
            <form>
                <input type="text" className="input-box" placeholder="Username"></input><br></br>
                <input type="password" className="input-box" placeholder="Password"></input><br></br>
                <input type="email" className="input-box" placeholder="E-mail"></input><br></br>
               <button className="submit-button">Sign up</button>
            </form>
        </div>
    );
}

export default SIGUP