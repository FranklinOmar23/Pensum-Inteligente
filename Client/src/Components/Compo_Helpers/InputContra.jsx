import React from 'react'
import { Form } from 'react-bootstrap';

function InputContra ({label}){
    return(
        <Form.Group className="mb-3" controlId="formBasicPassword">
      <div className="form-control-container">
        <Form.Control plaintext id={label} className="effect-2 custom-input" type="password" placeholder={label}  required  style={{ width: '400px', color: '#DAFFFB' }}/>
        <div className="focus-border"></div>
      </div>
    </Form.Group>

    );
}

export default InputContra;