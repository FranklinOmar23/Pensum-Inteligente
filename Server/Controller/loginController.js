import { getConnection } from "../DataBase/Conection.js";

async function loginController(Email, Contraseña) {
  try {
    const pool = getConnection(); // Obtener el pool de conexiones

    const values = [Email, Contraseña];

    const query = "SELECT * FROM Estudiante WHERE Email = ? AND Contraseña = ?";

    console.log(query);

    await new Promise((resolve, reject) => {
      pool.query(query, values, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        console.log("Estudiante logueado correctamente");
        resolve();
      });
    });
  } catch (error) {
    console.error("Error al establecer la conexión:", error);
  }
}

export { loginController };
