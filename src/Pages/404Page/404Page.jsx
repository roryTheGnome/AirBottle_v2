import React from "react";
import "./404Page.css";
import {useNavigate} from "react-router-dom";

function PageNotFound(){
    const navigate=useNavigate();

    return(
        <div className="pnf">
            <h1 className="pnf-title">404</h1>
            <h3 className="pnf-subtitle">PAGE NOT FOUND</h3>
            <button className="upsiButton" onClick={() => navigate('/')} >Return to Home Page</button>
        </div>
    )
}

export default PageNotFound