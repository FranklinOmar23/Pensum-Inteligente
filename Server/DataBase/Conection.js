import mysql from "mysql"

const dbSettings = {
  user: "root",
  password: "",
  host: "localhost",
  database: "db_pensum",
   port: 3306
};

export async function getConnection() {
  try {
    const connection = mysql.createConnection(dbSettings);

    connection.connect((err) => {
      if (err) {
        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;
      }
      console.log('Conexión a la base de datos establecida');
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

getConnection();
