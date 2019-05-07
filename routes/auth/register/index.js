'use strict';

var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;
const users = require('../../../models').user;
var bodyparser = require('body-parser');
var sequelize=require('sequelize');

router.get('/', function(req,res){
    res.status(200).json({
        message : "Success"
    });
})


router.post('/',function(req,res){
  if(!req.body.email || !req.body.password){
    res.send('Enter a username or password to register ');
  }
  else{

    let user= new users({
      email:req.body.email,
      password:req.body.password,
      is_admin:0
    });
    console.log(user);

    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      console.log(hash);
      user.password = hash;
      user.save().then(() => {
        
        res.send("Registration success!!!");
      
      });
    });
        
  


  }
});
module.exports = router;