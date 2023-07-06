import { useState } from "react";
import Dashboard from "./Dashboard";

const Createmap=()=>{
    const[name,setname]=useState("")
    document.getElementById("map").style.display = "block";
    document.getElementById("pac-input").style.display = "block";
    document.getElementById("geometry").style.display = "block";

    
    function onsubmit(){
        let name=document.getElementById('namegeo').value;
        console.log("name",name);
        
    }

    return(
        <div>
            <Dashboard/>
            hello createmap
            
        <input type="hidden" id="namegeo"  />
       
      <button type="submit" onClick={onsubmit}>submit</button>
        </div>

    )
}

export default Createmap;