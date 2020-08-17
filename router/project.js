const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const users = require('../models/model.user.js');

router.get('/',async (req,res)=>{
	const listUser = await users.find();
	res.cookie('stringDefault',process.env.jwt);
	var token =  jwt.sign(process.env.jwt,process.env.jwt,{algorithm:"HS256"});
	res.cookie('stringtoken',token);
	res.render('index',{listUser:listUser});
});

router.post('/',async (req,res)=>{
	await users.create({name:req.body.name});
	res.redirect('/');
});	

module.exports = router;