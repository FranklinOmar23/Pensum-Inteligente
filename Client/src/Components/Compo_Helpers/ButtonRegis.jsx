import React, { useState } from 'react';
import axios from 'axios';

function ButtonRegis ({label}){
  const [fieldsValid, setFieldsValid] = useState(false);
  

  const handleValidation = (e) => {
    e.preventDefault();

    const nombre = document.getElementById('Nombre').value;
    const correo = document.getElementById('Correo').value;
    const contra = document.getElementById('Contraseña').value;
    const confircontra = document.getElementById('Confirmar Contraseña').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre && nombre.length >= 2 && correo && contra && confircontra) {
      if (contra === confircontra) {
        if (contra.length >= 8) {
          if (emailRegex.test(correo)) {
            setFieldsValid(true);
            alert('Formulario enviado correctamente.');
            window.location.href = '/';
          } else {
            setFieldsValid(false);
            alert('Por favor, ingrese un correo electrónico válido.');
          }
        } else {
          setFieldsValid(false);
          alert('La contraseña debe tener al menos 8 caracteres.');
        }
      } else {
        setFieldsValid(false);
        alert('Las contraseñas no coinciden. Por favor, verifique nuevamente.');
      }
    } else {
      setFieldsValid(false);
      alert('Por favor, complete todos los campos.');
    }
  };

  const handleFormSubmit = () => {
    if (fieldsValid) {
      const nombre = document.getElementById('Nombre').value;
      const correo = document.getElementById('Correo').value;
      const contra = document.getElementById('Contraseña').value;

      axios
        .post('/registro', {
          nombre: nombre,
          email: correo,
          contrasena: contra
        })
        .then((response) => {
          alert(response.data);
          window.location.href = '/';
        })
        .catch((error) => {
          console.error('Error al enviar el formulario:', error);
          alert('Error al enviar el formulario. Por favor, inténtelo nuevamente.');
        });
    }
  };

    return(
      <div className='button-container'>
      <button
        className={`btn btn1 ${fieldsValid ? 'valid' : ''}`}
        style={{ color: '#DAFFFB', fontWeight: 'bold' }}
        onClick={handleValidation}
      >
        {label}
      </button>
    </div>
    );
}


export default ButtonRegis;