import React from 'react'
import { Form } from 'react-bootstrap';

function InputContra ({label, id, showPassword, handlePasswordChange}){
    return(
        <Form.Group className="mb-3">
      <div className="form-control-container">
        <Form.Control plaintext id={id} className="effect-2 custom-input" type={showPassword ? 'text' : 'password'} placeholder={label} onChange={handlePasswordChange}  required  style={{ width: '400px', color: '#DAFFFB' }}/>
        <div className="focus-border"></div>
      </div>
    </Form.Group>

    );
}

export default InputContra;