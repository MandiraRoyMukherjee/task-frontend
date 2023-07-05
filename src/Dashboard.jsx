import './App.css';
import Signup from './Signup';
import { Link } from "react-router-dom";
import React,{useEffect} from 'react';
const Dashboard=()=>{
    useEffect(() => {
        window.addEventListener('popstate', (e) => {
          window.history.go(1);
        });
      }, [])

    return(
        
        <div>
            <div >
                {/* <a href="#home" class="active">Dashboard</a>
                <a href="#news">Create New</a>
                <a href="#contact">Logout</a> */}
                <nav>
        <ul class="navbar" id="myNavbar">
 
            <Link to="/dashboard">Dashboard</Link>


            <Link to="/createmap">Create</Link>

            <Link to="/">logout</Link>

        </ul>
      </nav>


            </div>
        </div>
    )


}

export default Dashboard;