const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const cors=require('cors');
const user_router = require('./Routers/user_router.js');
const authenticateToken=require('./Middleware/authToken.js');


const app = express();


app.use(cors()); // Autoriser les requêtes cross-origin
app.use(express.json()); // Parser les requêtes JSON


app.use('/profil', authenticateToken);

// Utiliser les routes définies dans user_router
app.use('', user_router);

app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré sur le port ${process.env.PORT}`);
});