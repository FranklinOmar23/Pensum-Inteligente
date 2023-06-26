import './App.css';
import { Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import {UserHome} from "./components/UserHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                         <Route path="/HomeUser" element={<UserHome/>}/>

                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
