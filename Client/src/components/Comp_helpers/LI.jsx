import React from "react";
import { Outlet, Link } from "react-router-dom";

export  function  LI(props){
    return(
        <>
             <li className="nav-item"><Link className="nav-link" to={`${props.href}`}>{props.Name}</Link ></li>
        </>

    );
};

