import './App.css';
import { Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Components/Home';
import {UserHome} from './Components/UserHome';
import VistaHRegistro from './Components/VistaHRegistro';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                         <Route path="/HomeUSER" element={<UserHome/>}/>
                         <Route path="/registro" element={<VistaHRegistro/>}/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
