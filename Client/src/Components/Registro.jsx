import React, { useState } from 'react';
import './Registro.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Form } from 'react-bootstrap';
import InputContra from './Compo_Helpers/InputContra';
import ButtonRegis from './Compo_Helpers/ButtonRegis';
import InputRegistro from './Compo_Helpers/InputRegistro';
import axios from 'axios';

function Registro() {
  const [showPassword, setShowPassword] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistro = async () => {
    try {
      const response = await axios.post('/registro', {
        nombre,
        email,
        password
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registro-container">
      <div className='formulario-registro'>
        <h1 className='ColorFuente font-weight-bold'>¡Registrate!</h1>
        <br />

        <Form>
          <InputRegistro
            label="Nombre"
            id="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <InputRegistro
            label="Correo"
            id="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputContra
            label="Contraseña"
            id="Contraseña"
            showPassword={showPassword}
            handlePasswordChange={handlePasswordChange}
          />

          <InputContra
            label="Confirmar Contraseña"
            id="Confirmar Contraseña"
            showPassword={showPassword}
            handlePasswordChange={handlePasswordChange}
          />

          <ButtonRegis label="Registrarse" onClick={handleRegistro} />
        </Form>
      </div>
    </div>
  );
}

export default Registro;
