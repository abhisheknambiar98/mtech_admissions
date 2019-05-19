const express= require('express')
const router=express.Router()


router.get('/dashboard',(req,res)=>{
    res.render('applicant_dashboard',{title:"Dashboard"});
})

module.exports=router;