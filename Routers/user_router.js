const express = require('express');
const user_controller=require('../Controllers/user_controller');



const router=express.Router();

router.get('/getUser',user_controller.getUsers);
router.post('/creatUser',user_controller.createUser);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });


module.exports=router;