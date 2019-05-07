const express = require('express');
const router = express.Router();

const users = require('../../../models').user;

const config = require('../../../config/config.js');
const jwt=require('jsonwebtoken');
let token;
let username;

router.get('/', function(req,res){
    res.status(200).json({
        message : "Success"
    });
})


router.post('/', function(req,res) {
    email = req.body.email;
    users.findOne({where:{
        email:req.body.email} }).then( user => {
            
            if(!user){
          console.log(req.body.email);
                res.send({success:false,message:"Authentication failed"});
            }else
            {
                if(user.verified==false)
                {
                    res.send("Your application has not been verified yet!!");
                }
                else
                {
          console.log(user);
                isMatch=users.comparePassword(req.body.password,user);
    
                    if(isMatch)
                    {
                         token=jwt.sign(user.dataValues,config,{
                             expiresIn : "1000ms"
                            
                            });
                            res.redirect('/details');
                            
    
                    }
                    else
                    {
                        res.send({success:false,message:"passwords did not match"});
                    }
                }
                
            }
    
        }
        );

})


router.get('/me', function(req, res) {

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      methods.usermethods.getUserByUsername(username).then((values) =>{
        console.log(values);
        var val = {
            username : values[0].username,
            lhadmno : values[0].lhadmno,

        }
       
        methods.attmethods(username).then((classes) =>{
            console.log(classes)
            val.attendance = classes 
            res.render('user',{val})
        })
        .catch((err) =>{
            console.log(err)
            res.render('user',{val})

        })
      }).catch((err) =>{
          console.log(err);
      })
    });
  });

  router.post('/logout', function(req,res){
      token=null;
      var message = "Successfully logged out!!"
     res.render('home',{message});
  })
module.exports = router;