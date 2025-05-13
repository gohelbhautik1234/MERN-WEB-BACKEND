
const express=require('express');
const login=require('../controllers/loginController');
const registeruser=require('../controllers/registerController');

const router=express.Router();

router.post('/register',registeruser);
router.post('/login',login);

module.exports=router;