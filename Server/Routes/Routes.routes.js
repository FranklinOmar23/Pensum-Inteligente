import express from 'express';
import { registroController } from '../Controller/RegistroController.js';
import { loginController } from '../Controller/loginController.js';

const router = express.Router();

router.post('/registro', (req, res) => {
  const { nombre, email, password } = req.body;

  registroController(nombre, email, password);

  res.status(200).json({ message: 'Successfully registered user' });
});

router.post('/inicioSecion', loginController);

export default router;
