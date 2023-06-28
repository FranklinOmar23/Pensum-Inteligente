import React from 'react';
import { Form } from 'react-bootstrap';

const CheckB = ({ handleCheckboxChange }) => {
    return (
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Mostrar contraseña"
          onChange={handleCheckboxChange}
          className="custom-label"
        />
      </Form.Group>
    );
  };

export default CheckB;