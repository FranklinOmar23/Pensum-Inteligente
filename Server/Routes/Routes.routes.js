// routes.js
import express from 'express';
const router = express.Router();

import { registroController } from '../Controller/RegistroController.js';

router.post('/registro', registroController);

export default router;
