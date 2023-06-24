import React from "react";
import  '../styles.css'

export function Texto(){

    return (
        <>
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"/>
                    <div className="col-lg-8 align-self-end">
                        <h1 className="font-weight-bold" >¡Bienvenido(a) a nuestra guía de pensum universitario!</h1>
                        <hr className="divider"/>
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">Nuestra página web está diseñada para ser tu compañero confiable en tu trayectoria académica. Aquí encontrarás información clave para comenzar, identificar las asignaturas más desafiantes y descubrir cómo se relacionan entre sí.</p>
                        <a className="btn btn-primary btn-xl" href="">Leard More</a>
                 </div>
            </div>
        </>
    );

};

