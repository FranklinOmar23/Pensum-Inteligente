import { getConnection } from "../DataBase/Conection.js";
import Estudiante from '../Models/Usuario.js';

async function registroController(Nombre, Email, Contraseña) {
  try {
    const pool = getConnection(); // Obtener el pool de conexiones

    const estudiante = new Estudiante(null, Nombre, Email, Contraseña, null, null, null, null);

    // Verificar si el correo electrónico ya está registrado
    const checkQuery = "SELECT COUNT(*) AS count FROM estudiante WHERE Email = ?";
    const checkValues = [estudiante.getEmail()];

    const checkResult = await new Promise((resolve, reject) => {
      pool.query(checkQuery, checkValues, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results[0].count > 0); // Devuelve true si el correo electrónico ya está registrado
      });
    });

    if (checkResult) {
      console.warn("El correo electrónico ya está registrado. No se puede agregar.");
      return;
    }

    // Insertar el estudiante si el correo electrónico no está registrado
    const insertQuery = "INSERT INTO estudiante (Nombre, Email, Contraseña) VALUES (?, ?, ?)";
    const insertValues = [estudiante.getNombre(), estudiante.getEmail(), estudiante.getContraseña()];

    await new Promise((resolve, reject) => {
      pool.query(insertQuery, insertValues, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        console.warn("Estudiante insertado correctamente");
        resolve();
      });
    });

  } catch (error) {
    console.error("Error al establecer la conexión:", error);
  }
}

export { registroController };
