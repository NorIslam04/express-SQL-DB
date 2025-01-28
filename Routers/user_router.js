const express = require('express');
const user_controller = require('../Controllers/user_controller');
const path = require('path');
const authtkon = require('../Middleware/authToken.js');

const router = express.Router();

router.get('/getUser', user_controller.getUsers);
router.post('/creatUser', user_controller.createUser);
router.post('/login', user_controller.login);

router.get('/profil', authtkon, (req, res) => {
    console.log("user:",req.user);
    res.json({ user: req.user }); // Renvoie les informations de l'utilisateur décodées
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;