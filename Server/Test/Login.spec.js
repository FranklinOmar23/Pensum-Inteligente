import request from "supertest";
import app from "../App";
import { getConnection } from "../DataBase/Conection";
import { loginController } from "../Controller/loginController";
import Estudiante from "../Models/Usuario";

describe("POST /inicioSecion", () => {
  it("debería realizar el inicio de sesión correctamente", async () => {
    const estudiante = new Estudiante(
      1234577958845,//ID
      'Franklin Disla',//Nombre
      'estudiante@itla.com',//Email
      'contraseña12342',//Contraseña
      987654321, // ID_Universidad
      20210328, // Matrícula como número en lugar de cadena
      3.9, // Indice
      1 // ID_Carrera
    );
    
    // Establecer la conexión a la base de datos
    const connection = await getConnection();

    // Realizar el inicio de sesión
    await loginController(
      estudiante.getEmail(),
      estudiante.getContraseña(),
      connection
    );

    // Enviar la solicitud de inicio de sesión al endpoint
    const response = await request(app)
    .post("/inicioSecion")
    .send({
      email: estudiante.getEmail(),
      contraseña: estudiante.getContraseña(),
    });

    // Comprobar el estado de la respuesta
    if (response.statusCode === 200) {
      expect(response.body).toEqual({ message: "Inicio de sesión exitoso" });
    } else if (response.statusCode === 409) {
      expect(response.body).toEqual({ message: "Credenciales inválidas" });
    }

    // Cerrar la conexión a la base de datos
    await connection.end();
  });
});
