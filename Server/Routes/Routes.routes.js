import express from 'express';
import { registroController } from '../Controller/RegistroController.js';
import { loginController } from '../Controller/loginController.js';
import{obtenerUniversidades} from '../Controller/UniversidadController.js'

const router = express.Router();

router.post('/registro', (req, res) => {
  const { Nombre, Email, Contraseña } = req.body;

  registroController(Nombre, Email, Contraseña);

  res.status(200).json({ message: 'Successfully registered user' });
});

router.post('/inicioSecion', loginController);

router.get('/universidad', obtenerUniversidades)

export default router;
