import { getConnection } from "../DataBase/Conection.js";
import Estudiante from '../Models/Usuario.js';

async function registroController(Id, Nombre, Email, Contraseña, ID_Universidad, Matricula, Indice, ID_Carrera) {
  try {
    const pool = getConnection(); // Obtener el pool de conexiones

    const estudiante = new Estudiante(Id, Nombre, Email, Contraseña, ID_Universidad, Matricula, Indice, ID_Carrera);

    const query = "INSERT INTO estudiante (Id, Nombre, Email, Contraseña, ID_Universidad, Matricula, Indice, ID_Carrera) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [estudiante.getId(), estudiante.getNombre(), estudiante.getEmail(), estudiante.getContraseña(), estudiante.getIDUniversidad(), estudiante.getMatricula(), estudiante.getIndice(), estudiante.getIDCarrera()];

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
