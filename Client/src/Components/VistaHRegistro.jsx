import React from "react";
import Registro from "./Registro";
import '../VHR.css';
import Menu from "./Menu";
import { Texto } from "./Texto";

export function VistaHRegistro (){


    return (
            //Hago la vista Home+Registro en la cual muestro mi formulario en conjunto con la vista Home.
            <>
            <Menu/>
        
            <div className="N">
            <Texto/>


            </div>

            <Registro />
            </>
            //Modifico el Texto y añado un responsive al texto para que se oculte segun el tamaño que tenga la pagina.

    );

}

export default VistaHRegistro;