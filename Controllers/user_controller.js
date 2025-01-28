const user_service = require('../Services/user_service.js');


const getUsers = async (req, res) => {
    try {
        const users = await user_service.getUsers();
        res.json(users);
    } catch (err) {
        res.json({ error: err.message });
    }
}

const createUser = async (req, res) => {// req -> cote client (front use axios) res -> cote serveur (back)
    try {
        const userData = req.body;
        const user = await user_service.createUser(userData);
        res.json(user);
    } catch (err) {
        res.json({ error: err.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await user_service.login(email, password);
        res.status(200).json(token); // Renvoyer un objet JSON
    } catch (err) {
        res.status(400).json({ error: err.message }); // Renvoyer un code d'erreur 400
    }
};



module.exports= {getUsers,createUser,login};