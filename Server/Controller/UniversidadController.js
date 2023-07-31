// UniversidadController.js
import { getConnection } from "../DataBase/Conection.js";

export const obtenerUniversidades = async (req, res) => {
  try {
    // Obtener la conexión desde el pool
    const pool = getConnection();

    // Consulta SQL para obtener los datos de la tabla
    const sql = "SELECT * FROM universidad";

    // Ejecutar la consulta en la base de datos
    const result = await new Promise((resolve, reject) => {
      pool.query(sql, (err, result) => {
        if (err) {
          console.error("Error al obtener los datos de la tabla: ", err);
          reject(err);
        } else {
          console.log("Datos obtenidos correctamente");
          console.log("Resultado de la consulta: ", result);
          resolve(result);
        }

        // ¡IMPORTANTE! Libera la conexión después de que la consulta haya finalizado
        pool.end();
      });
    });

    console.log("Resultado enviado en la respuesta: ", result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error al obtener la conexión: ", error);
    res.status(500).send("Error al obtener la conexión");
  }
};
