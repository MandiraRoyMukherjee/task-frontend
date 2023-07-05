import { useState } from "react";
import Dashboard from "./Dashboard";

const Createmap=()=>{
    const[name,setname]=useState("")

    function onsubmit(e){
        let name=document.getElementById('namegeo').value;
        console.log("name",name);
        
    }

    return(
        <div>
            <Dashboard/>
            hello createmap
            
        <div id="geometry" />
        <input id="pac-input" className="controls" type="text" placeholder="Search Box" /> <br/>
        <input type="hidden" id="namegeo" />
       
      
        </div>

    )
}

export default Createmap;