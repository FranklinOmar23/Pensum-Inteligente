import { getConnection } from "../DataBase/Conection.js";
import Estudiante from '../Models/Usuario.js';

async function registroController(nombre, email, contrasena) {
  try {
    const pool = getConnection(); // Obtener el pool de conexiones

    const estudiante = new Estudiante(nombre, email, contrasena);

    const query = "INSERT INTO estudiante (Nombre, Email, Contraseña) VALUES (?, ?, ?)";
    const values = [estudiante.getNombre(), estudiante.getEmail(), estudiante.getContraseña()];

    await new Promise((resolve, reject) => {
      pool.query(query, values, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        console.log("Estudiante insertado correctamente");
        resolve();
      });
    });

  } catch (error) {
    console.error("Error al establecer la conexión:", error);
  }
}

export { registroController };