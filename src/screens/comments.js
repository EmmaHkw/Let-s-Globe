import React from "react";
import "./comments.css";
import { Navigate, useNavigate } from "react-router-dom";

function Comments() {
    const Navigate = useNavigate();
    const PageChange = () => {
        Navigate("/login");
    }

    return(
        <div> 
            <h1 className="pageTitle">Japan</h1>
            <h2>Resident's Comments</h2>

            <p>@James12 : Fushimi Inari Taisha is a must see!</p>
            <p>@Naruto : It’s a beautiful place.</p>
            <p>@James13 : Try takoyaki at the night market</p>

            <button className="inputButton" onClick={() => PageChange()}>Say Something</button>

        </div>  
        
        );
}

export default Comments;