import React from 'react'
import { Form } from 'react-bootstrap';

function InputContra ({label, id, showPassword, handlePasswordChange}){
    return(

      //Componente que contiene un Input de Contraseña que se usa en el formulario de Registro
        <Form.Group className="mb-3">
      <div className="form-control-container">
        <Form.Control plaintext id={id} className="effect-2 custom-input" type={showPassword ? 'text' : 'password'} placeholder={label} onChange={handlePasswordChange}  required  style={{ width: '400px', color: '#DAFFFB' }}/>
        <div className="focus-border"></div>
      </div>
    </Form.Group>
    //En este componente añado parametros para que se puedan agregar fuera del componente
    );
}

export default InputContra;