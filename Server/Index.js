import { PORT } from "./config.js"
import app from "./App.js"

app.listen(PORT)
console.log('Servidor corren en el puerto', PORT)