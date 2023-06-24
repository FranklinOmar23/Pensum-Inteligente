import mysql from "mysql"

const dbSettings = {
  user: "root",
  password: "",
  host: "localhost",
  database: "BD_Pensum",
  port: 3306
};

async function getConnection() {
  try {
    const connection = mysql.createConnection(dbSettings);

    connection.connect((err) => {
      if (err) {
        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;
      }
      console.log('Conexión a la base de datos establecida');
    });

    const result = await new Promise((resolve, reject) => {
      connection.query('SELECT 1', (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });

    console.log(result);

    connection.end(); // Cerrar la conexión después de realizar la consulta
  } catch (error) {
    console.error("Error:", error);
  }
}

getConnection();
