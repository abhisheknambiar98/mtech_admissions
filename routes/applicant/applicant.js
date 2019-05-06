const express=require('express')
const router=express.Router();


router.get('/details',(req,res)=>{
    res.render('details')
});


router.get('/addcourse',(req,res)=>{
    res.render('add_course')
})

router.get('/dashboard',(req,res)=>{
    res.render();
})

router.get('/options',(req,res)=>{
    res.render('stud_options')
})

router.get('/ranklist',(req,res)=>{
    res.render('ranklist')
})


module.exports=router;