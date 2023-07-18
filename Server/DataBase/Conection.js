import mysql from "mysql";

const dbSettings = {
  user: "root",
  password: "",
  host: "localhost",
  database: "db_pensum",
  port: 3306,
  connectionLimit: 10 // Número máximo de conexiones en el pool
};

//Conexion a la bd
export function getConnection() {
  try {
    const pool = mysql.createPool(dbSettings);

    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;
      }
      console.log('Conexión a la base de datos establecida');
      // Realizar operaciones con la conexión

      connection.release(); // Liberar la conexión al finalizar

    });

    return pool; // Retornar el pool de conexiones

  } catch (error) {
    console.error("Error:", error);
  }
}