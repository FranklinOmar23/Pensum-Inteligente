import express from 'express';
import cors from 'cors'; // Importa el paquete 'cors'
import path from 'path';
import Routes from './Routes/Routes.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

/*app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});*/

app.use(Routes);

export default app;
