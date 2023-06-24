import React from "react";
export  function  LI(props){
    return(
        <>
            <li className="nav-item"><a className="nav-link" href={props.href}>{props.Name}</a></li>
        </>

    );
};

