import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './Login.css';
import { useState } from 'react';
import { handleSubmit } from './Validacion'; // Importa la función handleSubmit

const BasicExample = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showpassword, setShowPassword] = useState(false);

  const handleFormSubmit = (event) => {
    handleSubmit(event, email, password, setShowError); // Llama a la función handleSubmit desde el archivo formUtils.js
  };

  const viewpassword = () => {
    setShowPassword(!showpassword);
  };

  return (
    <div className="login-container">
      <h1 className='title'>Iniciar sesión</h1>
      <Form onSubmit={handleFormSubmit} className='form'>
      <Form.Group controlId="formEmail" className='formgroup'>   
    <Form.Label className='label'>Email</Form.Label>
    <Form.Control
    className='input'
      type="email"
      placeholder="Ingrese su email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formPassword" className='formgroup'>
    <Form.Label className='label'>Password</Form.Label>
    <Form.Control
    className='input'
      type={showpassword? 'text': 'password'}
      placeholder="Ingrese su contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </Form.Group>
  <div className='checkContainer'>
    <div checked={showpassword} onClick={viewpassword} className={showpassword?'form-check-input-green':'form-check-input-red'} ></div>
     <p>show password</p>
     </div>
  {showError && <Alert className='alert' variant="danger">Por favor, completa todos los campos.</Alert>}
  <Button className='buttom' variant="primary" type="submit">
    INICIAR SESION
  </Button>
      </Form>
    </div>
  );
};

export default BasicExample;