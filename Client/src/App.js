
import { Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Home from "./components/Home";
import {UserHome} from "./components/UserHome";
import VistaHRegistro from "./components/VistaHRegistro";

import $ from 'jquery';
import {Prueba} from "./components/Comp_helpers/SubsComponentofUserHome/Prueba";
function App() {

    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                         <Route path="/HomeUSER" element={<UserHome/>}/>
                        <Route path="/Prueba" element={<Prueba/>}/>
                         <Route path="/Registro" element={<VistaHRegistro/>}/>
                    </Routes>
                </BrowserRouter>

            </header>
        </div>
    );
}

export default App;
