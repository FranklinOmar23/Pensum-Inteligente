import './App.css';
import BasicExample from './componets/Login/loginController';
import '@fortawesome/fontawesome-free/css/all.css';


import { Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from "./components/Home"
import {UserHome} from "./components/UserHome"
//import VistaHRegistro from "./Components/VistaHRegistro"
import VistaHRegistro from "./components/VistaHRegistro"
import VistaRegistro2 from './components/VistaRegistro2';

import Home from "./components/Home";
import VistaHRegistro from "./components/VistaHRegistro";
import {UserHome} from "./components/UserHome";

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
                         <Route path="/Registro2" element={<VistaRegistro2/>}/>
                    </Routes>
                </BrowserRouter>
                </UserProvider>
            </header>
       
        </div>
    );
}

export default App;
