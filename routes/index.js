const express = require('express');
const router = express.Router();
let auth=require('../middleware/auth')

router.get('/register',(req,res)=>{
    res.render('register')
})

router.get('/login',(req,res)=>{
    res.render('login')
});


router.get('/',(req,res)=>{
    res.render('landing')
})

router.get('/app_dashboard',auth,(req,res)=>{
    if(req.session.token){
        res.render('applicant_dashboard',{title:"Applicant Dashboard"});
    }
    else
    console.log("No token found!")
})

router.get('/logout',(req,res)=>{
    req.session.destroy(function(){
      console.log("user logged out.")
   });
   res.redirect('/');
  })


//use statements
router.use('/login',require('./login'))
router.use('/register',require('./register'))
router.use('/authorized',auth,require('./authorized'))






module.exports=router;