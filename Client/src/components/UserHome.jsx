import React from "react";
import {MenuUserHome}from "./Comp_helpers/SubsComponentofUserHome/MenuUserHome";
import '../sb-admin-2.css'
import '../sb-admin-2.min.css'
import {ContentWrapperofSecodHome} from "./Comp_helpers/ContentWrapperofSecodHome";



 export function UserHome(){
    return(
        <>
            <MenuUserHome/>
            <ContentWrapperofSecodHome/>
        </>

    );
}
export default UserHome()