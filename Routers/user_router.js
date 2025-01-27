const express = require('express');
const user_controller=require('../Controllers/user_controller');



const router=express.Router();

router.get('',user_controller.getUsers);
router.post('/creatUser',user_controller.createUser);


module.exports=router;