import React, { useState } from 'react';
import './Registro.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [universidad, setUniversidad] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/registro', {
        nombre,
        universidad,
        email,
        contrasena,
      });
      console.log(response.data);
      // Realizar acciones adicionales después de registrar correctamente
    } catch (error) {
      console.error(error);
      // Manejar el error de registro
    }
  };

  return (
    <div className="registro-container">
      <div className="fondoregistro"></div>
      <div className="formulario-registro">
        <h1>Registrate</h1>
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="bold-label">Nombre:</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              style={{ width: '400px', backgroundColor: 'rgba(245, 255, 255, 0.7)' }}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="bold-label">Universidad:</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              style={{ width: '400px', backgroundColor: 'rgba(245, 255, 255, 0.7)' }}
              value={universidad}
              onChange={(e) => setUniversidad(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="bold-label">Correo Electronico:</Form.Label>
            <Form.Control
              type="email"
              placeholder=""
              style={{ width: '400px', backgroundColor: 'rgba(245, 255, 255, 0.7)' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="bold-label">Contraseña:</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              style={{ width: '400px', backgroundColor: 'rgba(245, 255, 255, 0.7)' }}
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="bold-label">Confirmar Contraseña:</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              style={{ width: '400px', backgroundColor: 'rgba(245, 255, 255, 0.7)' }}
            />
          </Form.Group>
          <Button className="bold-label" variant="primary" type="submit">
            Registrar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Registro;
