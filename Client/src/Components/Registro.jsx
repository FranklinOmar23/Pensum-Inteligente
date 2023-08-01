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
  //Formulario del Registro
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  //Hago la constante para el chechbox
  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
    return(

      //Formulario de Registro estructurado por Componentes 
      //A Cada Componente le pongo un label y un Id para luego usarlo en la logica
      <div className="registro-container">
        
        <div className='formulario-registro'>
        <h1 className='ColorFuente font-weight-bold'>¡Registrate!</h1>
        <br />

      <Form>

      <InputRegistro label="Nombre" id="Nombre"/>

      <InputRegistro label="Correo" id="Correo"/>

      <InputContra label="Contraseña" id="Contraseña" showPassword={showPassword}
        handlePasswordChange={handlePasswordChange}/>

      <InputContra label="Confirmar Contraseña" id="Confirmar Contraseña" showPassword={showPassword}
        handlePasswordChange={handlePasswordChange}/>

      <CheckB handleCheckboxChange={handleCheckboxChange}/>

      <ButtonRegis label="Registrarse"/>

    </Form>
    </div>
    
    </div>
    //Hago la logica y implemento las constantes y los chechbox para que la contraseña se muestre al darle al Check
);
}

export default Registro;
