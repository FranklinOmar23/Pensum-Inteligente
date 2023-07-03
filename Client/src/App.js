import './App.css';
<<<<<<< HEAD
import BasicExample from './componets/Login/loginController';

=======
import { Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
>>>>>>> 790bd60ef6f76430d4a0df93f87404f71a798d9b

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from './Components/Home'
import {UserHome} from './Components/UserHome'
import VistaHRegistro from './Components/VistaHRegistro'
function App() {
<<<<<<< HEAD
  return (
   <BasicExample/>
  );
=======
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
>>>>>>> 790bd60ef6f76430d4a0df93f87404f71a798d9b
}

export default App;
