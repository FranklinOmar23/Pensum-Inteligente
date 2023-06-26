import express from 'express';
import Routes from './Routes/Routes.routes.js'

const app = express();

app.use(express.json());

app.use(Routes);

export default app