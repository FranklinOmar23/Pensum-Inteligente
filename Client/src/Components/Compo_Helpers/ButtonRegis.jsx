import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function ButtonRegis({ label }) {

function ButtonRegis() {


  //Componente que contiene un Boton en el cual esta la logica del Registro.
  const [fieldsValid, setFieldsValid] = useState(false);
  
  const handleFormSubmit = (e) => {
    
  e.preventDefault();
  // Declaro los campos en constantes para su uso.
  const nombre = document.getElementById('Nombre').value;
  const correo = document.getElementById('Correo').value;
  const contrasena = document.getElementById('Contraseña').value;
  const confircontra = document.getElementById('Confirmar Contraseña').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //Procedo a hacer las validaciones para cada campo y cada problema.
  if (nombre && nombre.length >= 2 && correo && contrasena && confircontra) {
    if (contrasena === confircontra) {
      if (contrasena.length >= 8) {
        if (emailRegex.test(correo)) {
          const userData ={
            Nombre: nombre,
            Email: correo,
            Contraseña: contrasena
          };
          //Guardo en el LocalStorage los datos que se hayan insertado para pasar a la siguiente fase del registro.
          localStorage.setItem('userData', JSON.stringify(userData));
              toast.success('Insertado Correctamente');
        } else {
          toast.error('Por favor, ingrese un correo electrónico válido.');
        }
      } else {
        toast.error('La contraseña debe tener al menos 8 caracteres.');
      }
    } else {
      toast.error('Las contraseñas no coinciden. Por favor, verifique nuevamente.');
    }
  } else {
    toast.error('Por favor, complete todos los campos.');
  }
};

  return (

    //Boton del Formulario del Registro.
    <div className='button-container'>
      <button  type="submit"
        className={`btn btn1 ${fieldsValid ? 'valid' : ''}`}
        style={{ color: '#DAFFFB', fontWeight: 'bold' }}
        onClick={handleFormSubmit}
      >
        Registrarse
      </button>
    
      <Toaster 
      toastOptions={{
        style: {
          height: '70px',
          width: '280px',
          fontSize: '16px',
        },
      }}
        />
    </div>
    //Añado un Toaster para mas una UI mas interactiva y facil de entender.
  );
}
}

export default ButtonRegis;