import './App.css';
import BasicExample from './componets/Login/loginController';

import { Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./components/Home"
import {UserHome} from "./components/UserHome"
import VistaHRegistro from "./components/VistaHRegistro"

/*import Home from "./components/Home";
import {UserHome} from "./components/UserHome";
import VistaHRegistro from "./components/VistaHRegistro";*/


function App() {
  return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                         <Route path="/HomeUSER" element={<UserHome/>}/>
                         <Route path="/Registro" element={<VistaHRegistro/>}/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
