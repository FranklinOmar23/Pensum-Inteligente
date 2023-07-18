import express from 'express';
import path from 'path'; // Agrega esta línea para importar el módulo path
import Routes from './Routes/Routes.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(Routes);

export default app;
