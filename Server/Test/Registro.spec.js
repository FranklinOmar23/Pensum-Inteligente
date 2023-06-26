import request from 'supertest';
import app from '../App.js'; 
import {registroController} from '../Controller/RegistroController.js'; // Ajusta la ruta y el nombre del archivo según tu implementación

describe('POST /registro', () => {
  beforeAll(() => {
    // Configura las rutas y controladores necesarios para el test
    app.post('/registro', registroController);
  });

  it('debería guardar los datos en la base de datos y responder con código 200', async () => {
    // Datos de ejemplo para la solicitud POST
    const datos = {
      nombre: 'John Doe',
      email: 'johndoe@itla.com',
      contrasena: 'password123',
      universidad: '1',
      matricula: '123456789',
    };

    // Realizar la solicitud POST al controlador
    const response = await request(app)
      .post('/registro')
      .send(datos);

    // Verificar que la respuesta tenga el código de estado 200
    expect(response.status).toBe(200);

    // Verificar que los datos se hayan guardado correctamente en la base de datos
    // Agrega las aserciones necesarias según tu implementación

    // Verificar que la respuesta contenga el mensaje esperado
    expect(response.text).toBe('Datos guardados correctamente');
  });

  it('debería responder con código 500 en caso de error al guardar los datos', async () => {
    // Datos de ejemplo para la solicitud POST con error
    const datos = {
      // Proporciona datos incorrectos o faltantes aquí para simular un error al guardar los datos
    };

    // Realizar la solicitud POST al controlador
    const response = await request(app)
      .post('/registro')
      .send(datos);

    // Verificar que la respuesta tenga el código de estado 500
    expect(response.status).toBe(500);

    // Verificar que la respuesta contenga el mensaje de error esperado
    expect(response.text).toBe('Error al guardar los datos');
  });
});
