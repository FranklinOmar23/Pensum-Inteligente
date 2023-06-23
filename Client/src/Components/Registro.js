import React from 'react'
import './Registro.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Form, Button } from 'react-bootstrap';

function Registro(){
    return(
      <div className="registro-container">
        <div className="fondoregistro"></div>
        <div className='formulario-registro'>
        <h1 >Registrate</h1>
        <br />
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="bold-label">Nombre:</Form.Label>
        <Form.Control type="name" placeholder="" style={{ width: '400px', backgroundColor: 'rgba(245, 255, 255, 0.7)' }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="bold-label">Universidad:</Form.Label>
        <Form.Control type="universidad" placeholder="" style={{ width: '400px', backgroundColor: 'rgba(245, 255, 255, 0.7)' }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="bold-label">Correo Electronico:</Form.Label>
        <Form.Control type="email" placeholder="" style={{ width: '400px', backgroundColor: 'rgba(245, 255, 255, 0.7)' }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="bold-label">Contraseña:</Form.Label>
        <Form.Control type="password" placeholder="" style={{ width: '400px', backgroundColor: 'rgba(245, 255, 255, 0.7)' }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="bold-label">Confirmar Contraseña:</Form.Label>
        <Form.Control type="password" placeholder="" style={{ width: '400px', backgroundColor: 'rgba(245, 255, 255, 0.7)' }} />
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
