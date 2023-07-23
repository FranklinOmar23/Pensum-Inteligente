import React from 'react'
import { Form } from 'react-bootstrap';

function InputRegistro ({label, id, value, onChange}){
    return(
        <Form.Group className="mb-3">
      <div className="form-control-container">
        <Form.Control plaintext id={id} className="effect-2 custom-input" value={value} type="text" placeholder={label} onChange={onChange} style={{ width: '400px', color: '#DAFFFB' }}/>
        <div className="focus-border"></div>
      </div>
    </Form.Group>
    );
}

export default InputRegistro;