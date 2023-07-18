import React from "react";
import Registro from "./Registro";
import '../VHR.css';
import Menu from "./Menu";
import { Texto } from "./Texto";

export function VistaHRegistro (){

    return (

            <>
            <Menu/>
            <div className="N">
            <Texto/>

            </div>
            <Registro />
            </>

    );

}

export default VistaHRegistro;