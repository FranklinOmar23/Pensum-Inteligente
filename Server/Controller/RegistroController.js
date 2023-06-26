// registroController.js
import { getConnection } from "../DataBase/Conection.js";


export const registroController = async (req, res) => {
  // Obtener los datos enviados desde el formulario en el cuerpo de la solicitud
  const {nombre, email, contrasena, universidad, matricula } = req.body;

  try {
    // Obtener la conexión a la base de datos
    const connection = await getConnection();

    // Realizar la inserción en la base de datos
    const sql = `INSERT INTO estudiante (nombre, email, contrasena, universidad, matricula) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [nombre, email, contrasena, universidad, matricula], (err, result) => {
      if (err) {
        console.error('Error al guardar los datos en la base de datos: ', err);
        res.status(500).send('Error al guardar los datos');
      } else {
        console.log('Datos guardados correctamente');
        res.status(200).send('Datos guardados correctamente');
      }

      // Cerrar la conexión después de realizar la consulta
      connection.end();
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos: ', error);
    res.status(500).send('Error al conectar a la base de datos');
  }
};
