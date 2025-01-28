const express = require('express');
const user_controller = require('../Controllers/user_controller');
const path = require('path');
const authtkon = require('../Middleware/authToken.js');
const userModel = require('../Models/user_model');

const router = express.Router();

router.get('/getUser', user_controller.getUsers);
router.post('/creatUser', user_controller.createUser);
router.post('/login', user_controller.login);


router.get('/profil', authtkon, async (req, res) => {
    const userId = req.user.userId;
    const user = await userModel.findById(userId);
    console.log(user);
    res.status(200).json(user); // Renvoie les informations de l'utilisateur décodées
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;