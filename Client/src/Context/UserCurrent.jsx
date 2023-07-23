// UserProvider.js
import React, {  useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const [User, setUser] = useState({
    
    name: "juan",
    lastname: "",
    Id: "",
    password: "",
    Carrera: "",
    email: ""
  }
  );
    return (
    <UserContext.Provider value={{ User,
     setUser }}>
      {children}
    </UserContext.Provider>
  );
}
