import "../DataBase/Conection.js" // Ruta al archivo de conexión a la base de datos

class Estudiante {
  constructor(Nombre, Email, Contraseña, ID_Universidad, Matricula, Indice, ID_Carrera) {
    this.Nombre = Nombre;
    this.Email = Email;
    this.Contraseña = Contraseña;
    this.ID_Universidad = ID_Universidad;
    this.Matricula = Matricula;
    this.Indice = Indice;
    this.ID_Carrera = ID_Carrera;
  }

  guardar() {
    return new Promise((resolve, reject) => {
      // Consulta SQL para insertar un nuevo estudiante en la tabla Estudiante
      const sql = `
        INSERT INTO Estudiante (Nombre, Email, Contraseña, ID_Universidad, Matricula, Indice, ID_Carrera)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

      // Valores a insertar en la consulta SQL
      const values = [
        this.Nombre,
        this.Email,
        this.Contraseña,
        this.ID_Universidad,
        this.Matricula,
        this.Indice,
        this.ID_Carrera
      ];

      // Ejecutar la consulta SQL con los valores
      connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = Estudiante;
