import { PORT } from "./config.js"
import app from "./App.js"
import "./DataBase/Conection.js"

app.listen(PORT)
console.log('Servidor corren en el puerto', PORT)