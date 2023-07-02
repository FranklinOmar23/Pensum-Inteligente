import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/registro', (req, res) => {
  const { nombre, email, contrasena } = req.body;


  res.status(200).json({ message: 'Successfully registered user' });
});

app.use(express.static('build'));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto: ${PORT}`);
});