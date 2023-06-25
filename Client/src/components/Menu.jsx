import React, { useState } from "react";
import '../styles.css';
import { LI } from "./Comp_helpers/LI";

export function Menu() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="/">Your Pensum</a>
          <button
            className={`navbar-toggler navbar-toggler-right ${showOptions ? 'open' : ''}`}
            type="button"
            onClick={toggleOptions}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showOptions ? 'show' : ''}`} id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <LI href={"/Inicio de session"} Name={"Inicio de session"} />
              <LI href={"/Registro"} Name={"Registro"} />
              <LI href={"/About us"} Name={"About us"} />
              <LI href={"/HomeUSER"} Name={"HomeUSER"} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
