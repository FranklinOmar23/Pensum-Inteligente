import React from 'react'
import { Form } from 'react-bootstrap';

function InputRegistro ({label,name, id, ChagesInInputs,formData} ){
    return(
      //Componente que contiene un Input de texto para el formulario de Registro
        <Form.Group className="mb-3">
      <div className="form-control-container">
        <Form.Control  onChange={ChagesInInputs}  name={name} value={formData} plaintext id={id} className="effect-2 custom-input" type="text" placeholder={label} required style={{ width: '400px', color: '#DAFFFB' }}/>
        <div className="focus-border"></div>
      </div>
    </Form.Group>
    //En este componente añado parametros para que se puedan agregar fuera del componente
    //En este componente aÃ±ado parametros para que se puedan agregar fuera del componente

    );
}

export default InputRegistro;