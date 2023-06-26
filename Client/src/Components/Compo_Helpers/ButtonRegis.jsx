import React, { useState } from 'react';

function ButtonRegis ({label}){
  const [fieldsValid, setFieldsValid] = useState(false);
  

  const handleValidation = (e) => {
    e.preventDefault();


    const nombre = document.getElementById('Nombre').value;
    const universidad = document.getElementById('Universidad').value;
    const correo = document.getElementById('Correo').value;
    const contra = document.getElementById('Contraseña').value;
    const confircontra = document.getElementById('Confirmar Contraseña').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre && universidad && correo && contra && confircontra) {
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