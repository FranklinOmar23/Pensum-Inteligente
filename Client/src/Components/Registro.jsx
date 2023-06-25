import React from 'react'
import './Registro.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Form} from 'react-bootstrap';
import InputContra from './Compo_Helpers/InputContra';
import ButtonRegis from './Compo_Helpers/ButtonRegis';
import InputRegistro from './Compo_Helpers/InputRegistro';


function Registro(){
    return(
      <div className="registro-container">
        
        <div className='formulario-registro'>
        <h1 className='ColorFuente font-weight-bold'>¡Registrate!</h1>
        <br />

      <Form>
      
      <InputRegistro label="Nombre"/>
      <br />

      <InputRegistro label="Universidad"/>
      <br />

      <InputRegistro label="Correo"/>
      <br />

      <InputContra label="Contraseña"/>
      <br />

      <InputContra label="Confirmar Contraseña"/>
      <br />

      <ButtonRegis label="Registrarse"/>
    </Form>
    </div>
    </div>
    );
}

export default Registro;
