import React, { useContext } from "react";
import '../../../sb-admin-2.css'
import '../../../sb-admin-2.min.css'
import { UserContext } from "../../../Context/UserContext";
export  function BarraLatealBrand(){
    const  {User}  = useContext(UserContext);
    return(<>
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">{User.name}</div>
        </a>

    </>)
}