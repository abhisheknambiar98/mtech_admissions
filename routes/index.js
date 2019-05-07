const express = require('express');
const router = express.Router();


router.get('/register',(req,res)=>{
    res.render('register')
})

router.get('/login',(req,res)=>{
    res.render('login')
});


router.get('/',(req,res)=>{
    res.render('landing')
})


router.use(('/auth'),require('./auth'));
router.use(('/applicant'),require('./applicant'));
//router.use(('/admin'),require('./admin'));


module.exports=router;