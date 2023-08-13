import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Registro2.css';
import '@fortawesome/fontawesome-free/css/all.css';

const UniversidadComponent = () => {
  const [universidades, setUniversidades] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/universidad')
      .then((response) => {
        setUniversidades(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Hora de elegir tu universidad</h1>
      <div className="row">
      {universidades.map((universidad) => (
        <div className="col-md-4 mb-3 book d-flex flex-column" key={universidad.Id}>
                <h5 className="card-title">{universidad.Nombre}</h5>
                <br />
                <p className="card-text">{universidad.Ubicacion}</p>
                <br />
                <button class="btn"> Seleccionar</button>
            <div className='cover card-body'>
            <img
                src={`data:${universidad.imagenTipo};base64,${universidad.imagen}`}
                className="card-img-top mx-auto w-50"
                alt="Universidad"
              />
            </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default UniversidadComponent;

//src={`data:${universidad.imagenTipo};base64,${universidad.imagen}`}
//{universidades.map((universidad) => (
  //<div className="col-md-4 mb-3" key={universidad.Id}>//</div>