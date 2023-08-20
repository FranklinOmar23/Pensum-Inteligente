import { getConnection } from "../DataBase/Conection.js";

export const obtenerCarrerasPorUniversidad = async (req, res) => {
  try {
    const pool = getConnection();

    const { universidadId } = req.params;

    const sql = "SELECT * FROM Carrera WHERE ID_Universidad = ?";

    const result = await new Promise((resolve, reject) => {
      pool.query(sql, [universidadId], (err, result) => {
        if (err) {
          console.error("Error al obtener las carreras: ", err);
          reject(err);
        } else {
          console.log("Carreras obtenidas correctamente");
          // Convertir los datos de tipo BLOB a base64 antes de enviarlos al cliente
          const carrerasWithImages = result.map((carrera) => {
            const imageData = Buffer.from(carrera.imagen).toString('base64');
            return {
              ...carrera,
              imagen: imageData,
            };
          });
          resolve(carrerasWithImages);
        }

        pool.end();
      });
    });

    console.log("Resultado de las carreras enviado en la respuesta: ", result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error al obtener la conexión: ", error);
    res.status(500).send("Error al obtener la conexión");
  }
};
