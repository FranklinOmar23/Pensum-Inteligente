// routes.js
import express from 'express';
import { registroController } from '../Controller/RegistroController.js';
import { loginController } from '../Controller/loginController.js';

const router = express.Router();

router.post('/registro', registroController);

router.post('/inicioSecion', loginController);

export default router;
