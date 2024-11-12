import express from 'express';
import db from './config/db.js';
import router from './routes/index.js';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos
db.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); // Terminar el proceso si no se puede conectar a la DB
  });

// Usar las rutas definidas
app.use('/', router);

// Iniciar el servidor
app.listen(process.env.PORT || 4000, () => {
  console.log(`El servidor está funcionando en el puerto ${process.env.PORT || 4000}`);
});
