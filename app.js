const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const user_router = require('./Routers/user_router.js');

const app = express();
app.use(express.json());


// Définir les routes
app.use('', user_router);

// Démarrer le serveur
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Serveur en écoute: http://localhost:${PORT}`);
});