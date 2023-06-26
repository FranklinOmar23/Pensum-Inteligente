// routes.js
import express from 'express';
import { registroController } from '../Controller/RegistroController.js';

const router = express.Router();

router.post('/registro', registroController);

export default router;
