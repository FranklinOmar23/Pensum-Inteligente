import React from 'react'
import { Form } from 'react-bootstrap';

function InputRegistro ({label}){
    return(
        <Form.Group className="mb-3" controlId="formBasicEmail">
      <div className="form-control-container">
        <Form.Control plaintext className="effect-2 custom-input" type="text" placeholder={label} style={{ width: '400px', color: '#DAFFFB' }}/>
        <div className="focus-border"></div>
      </div>
    </Form.Group>
    );
}

export default InputRegistro;