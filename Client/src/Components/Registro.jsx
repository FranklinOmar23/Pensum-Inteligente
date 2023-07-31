import React, { useState, useContext } from "react";
import './Registro.css';
import { Form } from 'react-bootstrap';
import { UserContext } from "../Context/UserContext";

function Registro() {
  //Realizo la implementacion para usar los valores del contexto 
  const { User, UpdateUser } = useContext(UserContext);
  //uso el From data coon useState para cambiar sus valores 
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    Id: '',
    password: '',
    confirmPassword: '',
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
    e.preventDefault();
    UpdateUser(formData);
    if (formData.password !== formData.confirmPassword) {
      // Mostrar mensaje de error de contraseña no coincidente
      return;
    }
    
    
  }

  //Hago la constante para el chechbox
  const handleCheckboxChange = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  }

  return (
    <div className="registro-container">
      <div className='formulario-registro'>
        <h1 className='ColorFuente font-weight-bold'>¡Regístrate!</h1>
        <br />
        <Form  onSubmit={Submit}>
          <Form.Group className="mb-3">
            <Form.Label >Nombre</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={ChagesInInputs} required />
          </Form.Group>

          <Form.Group> 
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={ChagesInInputs} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type={formData.showPassword ? "text" : "password"} name="password" value={formData.password} onChange={ChagesInInputs} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control type={formData.showPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={ChagesInInputs} required />
          </Form.Group>

          <Form.Group>
            <Form.Check type="checkbox" label="Mostrar Contraseña" checked={formData.showPassword} onChange={handleCheckboxChange} />
          </Form.Group>

          <button type="submit" >Registrarse</button>
        </Form>
      </div>
    </div>
  );
}

export default Registro;
