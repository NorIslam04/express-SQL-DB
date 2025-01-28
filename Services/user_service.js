const userModel=require('../Models/user_model');
const jwt = require('jsonwebtoken');
const supabase = require('../Config/supabase.js'); // Importez votre client Supabase configuré

const getUsers=async()=>{
    return await userModel.getAll();
}


const createUser=async(userData)=>{
    return await userModel.create(userData);
}

const login = async (email, password) => {
    try {
      const { user, error } = await userModel.findByEmail(email);

    if (error) {
      throw new Error(`Erreur lors de la recherche de l'utilisateur: ${error.message}`);
    }
  
    // Si aucune correspondance n'est trouvée
    if (!user) {
      throw new Error("L'email ou le mot de passe est incorrect.");
    }
  
      // Vérifier le mot de passe avec bcrypt
    if (password!==user.password) {
      throw new Error("le mot de passe est incorrect.");
    }
    const token = jwt.sign(
      { userId: user.id, username:user.username, email:user.email }, // Données à inclure dans le token
      process.env.JWT_SECRET, // Clé secrète pour signer le token
      { expiresIn: '1h' } // Durée de validité du token
      );

    return token;

    } catch (err) {
      console.error('Erreur dans le service de connexion:', err.message);
      throw new Error(err.message);
    }
  };


module.exports={getUsers,createUser,login};