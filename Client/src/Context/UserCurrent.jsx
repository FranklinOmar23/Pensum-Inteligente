// UserProvider.js
import React, {  useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  //asignos valores por default los cuales espereo
  const DefaultUser={
    name:'',
    lastname: '',
    Id: '',
    password:'',
    Carrera:'',
    email:'',
  }
  

  //utilizo el SessionStorage para que sea constante los datos hasta que se cierre el navegador 
  const [User, setUser]= useState(()=>{
    const StoredUser = sessionStorage.getItem("User");
    return StoredUser ? JSON.parse(StoredUser): DefaultUser;
  })

  //funcion que le paso a los hijos para aactualizar los datos 
  const UpdateUser = (newUser)=>{
    setUser((PrevUser)=>({
      ...PrevUser,
      ...newUser,

    }))

  }
  //aqui usamos el useEffect el cual tiene lugar cuando el componente usado tiene un cambios para lllamar el valor del User y pasarlo al Current USER
  useEffect(() => {
    sessionStorage.setItem("User", JSON.stringify(User));
  }, [User]);
  
    return (
    <UserContext.Provider value={{ User,
      UpdateUser}}>
      {children}
    </UserContext.Provider>
  );
}
