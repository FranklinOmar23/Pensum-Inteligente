import './App.css';


import {Router, Routes} from "react-router";
import Routers from "./Routers/Routers";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import React from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                         <Route path="/#Registro" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
