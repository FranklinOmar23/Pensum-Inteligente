import React from "react";
import {Alerts, Messages, SearchDropdown, UserInformation} from "./NavarItemsOfTopbar";
import '../../../sb-admin-2.css'
import '../../../sb-admin-2.min.css'
export function TopbarNavar(){
    return(
        <>
            <ul className="navbar-nav ml-auto">
                <SearchDropdown/>
                <Alerts/>
                <Messages/>

                <div className="topbar-divider d-none d-sm-block"></div>
                <UserInformation/>

            </ul>
        </>
    );
}export default TopbarNavar();