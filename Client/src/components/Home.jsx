import React from "react";
import  '../styles.css'
import {Menu} from "./Menu";
import {Texto} from "./Texto";
import '../App.css';
export const Home = () => {
    return(
        <>
            <Menu/>
            <Texto/>
            <div className="juan">
                <p className="juan">juan</p>
            </div>

        </>
    );
};
export default Home;

