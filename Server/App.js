import express from 'express';
import Routes from './Routes/Routes.routes.js'

const app = express();

app.use(express.json());

app.post('/api/registro', (req, res) => {
    // Obtener los datos enviados desde el formulario en el cuerpo de la solicitud
    const { nombre, universidad, email, contrasena } = req.body;
  
    // Realizar acciones de inserción en la base de datos u otras operaciones necesarias
  
    // Enviar respuesta al cliente
    res.send('Datos guardados correctamente');
  });

app.use(Routes);

export default app