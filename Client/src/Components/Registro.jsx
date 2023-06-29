import React, { useState } from 'react';
import './Registro.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Form} from 'react-bootstrap';
import InputContra from './Compo_Helpers/InputContra';
import ButtonRegis from './Compo_Helpers/ButtonRegis';
import InputRegistro from './Compo_Helpers/InputRegistro';
import CheckB from './Compo_Helpers/CheckB';


function Registro(){
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
    return(
      <div className="registro-container">
        
        <div className='formulario-registro'>
        <h1 className='ColorFuente font-weight-bold'>¡Registrate!</h1>
        <br />

      <Form>
      
      <InputRegistro label="Nombre" id="Nombre"/>

      <InputRegistro label="Correo" id="Correo"/>

      <InputContra label="Contraseña" id="Contraseña"showPassword={showPassword}
        handlePasswordChange={handlePasswordChange}/>

      <InputContra label="Confirmar Contraseña" id="Confirmar Contraseña"showPassword={showPassword}
        handlePasswordChange={handlePasswordChange}/>

      <CheckB handleCheckboxChange={handleCheckboxChange}/>

      <ButtonRegis label="Registrarse"/>

    </Form>
    </div>
    </div>
    );
}

export default Registro;
