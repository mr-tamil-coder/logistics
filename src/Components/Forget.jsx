import React from "react";
import Logo from "./Logo";

const Forget=()=>{
    const style={

    }

return(
    <>
    <div>
        <Logo/>
   <div className="container-forget" >
  
  <form className="container">
      <div><label>Email:</label>
          <input type="email"></input>
      </div>
    
    <button >Generate OTP</button>
  </form>
  
</div></div>
    
    </>
);

}
export default Forget