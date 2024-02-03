const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); // o express-session según preferencia
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Configurar el motor de plantillas
app.set('view engine', 'ejs');

// Importar rutas
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const charactersRouter = require('./routes/characters');

// Usar rutas
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/characters', charactersRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});