const express = require('express');
const router = express.Router();
const jwt=require('jsonwebtoken');
const methods = require("../methods/auth");


router.get('/auth', function(req,res){
    res.status(200).json({
        message : "Success"
    });
})

router.get('/dashboard',(req,res)=>{
    res.render('applicant_dashboard');
})

router.post('/authenticate',(req,res,next)=>{
    console.log("Inside post /login")
    console.log(req.body)
    email = req.body.email;
    password = req.body.password;

    methods.authenticate(email,password)
    .then(result=>{
        console.log()
        console.log("Logged in")
        console.log(result.token)
        req.token = result.token
        req.session.token = result.token
        if(result.privilege == true)
            res.send("Admin dashboard!")
        else if(result.privilege==false)
            res.redirect('/app_dashboard')
        console.log("Here!!!!")
        })
    .catch(err=>{
       
        console.log(err)
        res.status(400).json({success : false})
    })
})

module.exports = router;