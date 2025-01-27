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


module.exports= {getUsers,createUser};