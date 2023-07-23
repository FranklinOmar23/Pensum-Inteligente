import React, { useState } from 'react';
import axios from 'axios';

function ButtonRegis({ label,type }) {
  const [fieldsValid, setFieldsValid] = useState(false);

  const handleFormSubmit = (e) => {
  e.preventDefault();

  const nombre = document.getElementById('Nombre').value;
  const correo = document.getElementById('Correo').value;
  const contrasena = document.getElementById('Contraseña').value;
  const confircontra = document.getElementById('Confirmar Contraseña').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nombre && nombre.length >= 2 && correo && contrasena && confircontra) {
    if (contrasena === confircontra) {
      if (contrasena.length >= 8) {
        if (emailRegex.test(correo)) {
          axios
            .post('/registro', {
              Nombre: nombre,
              Email: correo,
              Contraseña: contrasena
            })
            .then((response) => {
              console.log(response.data);
              alert('Insertado Correctamente');
            })
            .catch((error) => {
              console.error('Error al enviar el formulario:', error);
            });
        } else {
          alert('Por favor, ingrese un correo electrónico válido.');
        }
      } else {
        alert('La contraseña debe tener al menos 8 caracteres.');
      }
    } else {
      alert('Las contraseñas no coinciden. Por favor, verifique nuevamente.');
    }
  } else {
    alert('Por favor, complete todos los campos.');
  }
};

  return (
    <div className='button-container'>
      <button
        className={`btn btn1 ${fieldsValid ? 'valid' : ''}`}
        style={{ color: '#DAFFFB', fontWeight: 'bold' }}
        type={type}
        onClick={handleFormSubmit}
      >
        {label}
      </button>
    </div>
  );
}

export default ButtonRegis;