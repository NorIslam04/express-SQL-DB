const userModel=require('../Models/user_model.js');

const getUsers=async()=>{
    return await userModel.getAll();
}


const createUser=async(userData)=>{
    return await userModel.create(userData);
}



module.exports={getUsers,createUser};