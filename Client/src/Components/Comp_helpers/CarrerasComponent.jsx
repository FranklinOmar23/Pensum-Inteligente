import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import '../Registro2.css'

const CarrerasPorUniversidadComponent = ({ universidadId }) => {
  const [carreras, setCarreras] = useState([]);

  useEffect(() => {
    if (universidadId) {
      axios.get(`http://localhost:4000/carreras/${universidadId}`)
        .then((response) => {
          setCarreras(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [universidadId]);

  return (
    <div>
      <h4>Carreras</h4>
      <Carousel pause="hover" interval={null}>
        {carreras.map((carrera) => (
          <Carousel.Item key={carrera.Id}>
            <div className="carrera-card">
              <div className="carrera-image-container">
                <img
                  src={`data:${carrera.imagenTipo};base64,${carrera.imagen}`}
                  alt={`Imagen de ${carrera.Nombre}`}
                  className="carrera-image"
                />
                <div className="carrera-details">
                  <h5>{carrera.Nombre}</h5>
                  <p>Cuatrimestres: {carrera.Cuatrimestres}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarrerasPorUniversidadComponent;
