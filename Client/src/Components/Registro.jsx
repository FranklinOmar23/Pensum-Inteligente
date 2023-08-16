import React, { useState, useContext } from "react";
import './Registro.css';
import { Form } from 'react-bootstrap';
import { UserContext } from "../Context/UserContext";
import CheckB from './Compo_Helpers/CheckB';
import ButtonRegis from './Compo_Helpers/ButtonRegis';
import toast, { Toaster } from 'react-hot-toast';



function Registro() {

   //Formulario del Registro
   const [showPassword, setShowPassword] = useState(false);
  //Realizo la implementacion para usar los valores del contexto 
  const { User, UpdateUser } = useContext(UserContext);
  const [fieldsValid, setFieldsValid] = useState(false);
  //uso el From data coon useState para cambiar sus valores 
  const [formData, setFormData] = useState({
    name: '',
    Id: '',
    confirmPassword: '',
    password: '',
    carrera: '',
    email: '',
  });
// Aqui verifico los cambios del imputs con una copia de los valores de formdata
  const ChagesInInputs = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  //aqui realizo la funcion de actualizar el contexto atravez del fromdata y veficio los datos y comparo als contraseñas
  const Submit = (e) => {
    console.log("Datos del usuario:", User);
 
    UpdateUser(formData) 
    if (formData.password !== formData.confirmPassword) {
      toast.success('Insertado Correctamente');
      // Mostrar mensaje de error de contraseña no coincidente
      return;
    } 
  }
  
  const Validation =(e)=>{
   
    
     
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
    //Guardo en el LocalStorage los datos que se hayan insertado para pasar a la siguiente fase del registro.
    

<<<<<<< HEAD
=======
  }
>>>>>>> 1c1a020 (combinacion de logicas)
  //Hago la constante para el chechbox
  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="registro-container">
      <div className='formulario-registro'>
        <h1 className='ColorFuente font-weight-bold'>¡Regístrate!</h1>
        <br />
        <Form  onSubmit={Submit}>
          <Form.Group className="mb-3">
          <div className="form-control-container">
          <Form.Control className="effect-2 custom-input"  plaintext id="Nombre" type="text" name="name" placeholder="Nombre" value={formData.name} onChange={ChagesInInputs} required style={{ width: '400px', color: '#DAFFFB' }} />
          <div className="focus-border"></div>
          </div>
          </Form.Group>

          <Form.Group className="mb-3">
          <div className="form-control-container">
          <Form.Control className="effect-2 custom-input"   plaintext id="Correo" type="text" name="email" placeholder="Correo" value={formData.email} onChange={ChagesInInputs} required style={{ width: '400px', color: '#DAFFFB' }} />
          <div className="focus-border"></div>
          </div>
          </Form.Group>

        
          <Form.Group className="mb-3">
          <div className="form-control-container text-dark">
          <Form.Control
                className="effect-2 custom-input"
                type={showPassword ? "text" : "password"}
                id="Contraseña"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={ChagesInInputs}
                required
                style={{ width: '400px', color: '#000000' }} 
              />
          <div className="focus-border"></div>
          </div>
          </Form.Group>


          <Form.Group className="mb-3">
          <div className="form-control-container">
          <Form.Control
                className="effect-2 custom-input"
                type={showPassword ? "text" : "password"}
                id="Confirmar Contraseña"
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                value={formData.confirmPassword}
                onChange={ChagesInInputs}
                required
                style={{ width: '400px', color: '#000000' }} 
              />
          <div className="focus-border"></div>
          </div>
          </Form.Group>

          <CheckB handleCheckboxChange={handleCheckboxChange}/>

         

          <div className='button-container'>
              <button  type="submit"
              className={`btn btn1 ${fieldsValid ? 
                'valid' : ''}`}
              style={{ color: '#DAFFFB', fontWeight: 'bold' }}
              onClick={() => { Submit(); Validation(); }}
            >Registrarse</button>
    
              <Toaster 
              toastOptions={{
                style: {
                  height: '70px',
                  width: '280px',
                  fontSize: '16px',
                },
              }}/>
           </div>

         
        </Form>
      </div>
    </div>
  );
}

export default Registro;
