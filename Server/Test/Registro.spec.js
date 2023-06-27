import request from 'supertest';
import app from '../App';
import { getConnection } from '../DataBase/Conection';
import { registroController } from '../Controller/RegistroController';
import Estudiante from '../Models/Usuario';

describe('POST /registro', () => {
  it('debería insertar un estudiante en la base de datos', async () => {
    // Datos del estudiante a insertar
    const estudiante = new Estudiante(
      123457795,//ID
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

    // Insertar el estudiante en la base de datos
    await registroController(
      estudiante.getId(),
      estudiante.getNombre(),
      estudiante.getEmail(),
      estudiante.getContraseña(),
      estudiante.getIDUniversidad(),
      estudiante.getMatricula(),
      estudiante.getIndice(),
      estudiante.getIDCarrera(),
      connection
    );

    // Verificar si el estudiante se insertó correctamente
    const response = await request(app)
      .post('/registro')
      .send({
        id: estudiante.getId(),
        nombre: estudiante.getNombre(),
        email: estudiante.getEmail(),
        contraseña: estudiante.getContraseña(),
        ID_Universidad: estudiante.getIDUniversidad(),
        matricula: estudiante.getMatricula(),
        Indice: estudiante.getIndice(),
        ID_Carrera: estudiante.getIDCarrera()
      });

    // Comprobar el estado de la respuesta
    if (response.statusCode === 200) {
      expect(response.body).toEqual({ message: 'Estudiante insertado correctamente' });
    } else if (response.statusCode === 409) {
      expect(response.body).toEqual({ message: 'El estudiante ya existe en la base de datos' });
    }

    // Cerrar la conexión a la base de datos
    await connection.end(); 
  });
});
