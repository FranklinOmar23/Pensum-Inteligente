import React from 'react';
import { Form } from 'react-bootstrap';

const CheckB = ({ handleCheckboxChange }) => {
    return (

      //Componente que contiene un Checkbox del Formulario de Registro que permite ver la contraseña
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