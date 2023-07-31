import './App.css';
import { Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./Components/Home";
import VistaHRegistro from "./Components/VistaHRegistro";
import {UserHome} from "./Components/UserHome";

import UserProvider from './Context/UserCurrent';







function App() {
// Rodeo el proyecto con el Provider

  return (
      
        <div className="App">
            
            <header className="App-header">
                <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                         <Route path="/HomeUSER" element={<UserHome  />}/>
                         <Route path="/Registro" element={<VistaHRegistro/>}/>
                    </Routes>
                </BrowserRouter>
                </UserProvider>
            </header>
       
        </div>
    );
}

export default App;
