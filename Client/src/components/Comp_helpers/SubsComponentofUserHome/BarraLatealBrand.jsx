import React from "react";
import '../../../sb-admin-2.css'
import '../../../sb-admin-2.min.css'
export  function BarraLatealBrand(){
    return(<>
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

    </>)
}