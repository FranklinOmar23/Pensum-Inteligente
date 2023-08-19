import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Registro2.css';
import '@fortawesome/fontawesome-free/css/all.css';
import CarrerasPorUniversidadComponent from './Comp_helpers/CarrerasComponent';

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
    <div className="container mt-3">
        
      <h1 className="mb-3">Hora de elegir tu universidad</h1>
      <div className="row">
        {universidades.map((universidad) => (
          <div className="col-md-4 mb-3 book d-flex flex-column" key={universidad.Id}>
            <div className="card">
              <div className="image">
                <img
                  src={`data:${universidad.imagenTipo};base64,${universidad.imagen}`}
                  className="card-img-top mx-auto w-50"
                  alt="Universidad"
                />
              </div>
              <div className="content">
                <a href="#">
                  <span className="title">
                    {universidad.Nombre}
                  </span>
                </a>
                <p className="desc">
                  {universidad.Ubicacion}
                </p>
                <CarrerasPorUniversidadComponent universidadId={universidad.Id} />
                <button class="btn"> Seleccionar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversidadComponent;
