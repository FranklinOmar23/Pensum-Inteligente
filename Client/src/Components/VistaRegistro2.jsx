import React from "react";
import UniversidadComponent from "./ContRegistro";
import './Registro2.css';
import Menu from "./Menu";
import { Texto } from "./Texto";

export function VistaRegistro2 (){


    return (
            //Hago la vista Home+Registro en la cual muestro mi formulario en conjunto con la vista Home.
            <>
            <Menu/>
        
           

            <UniversidadComponent></UniversidadComponent>
            </>
            //Modifico el Texto y añado un responsive al texto para que se oculte segun el tamaño que tenga la pagina.

    );

}

export default VistaRegistro2;