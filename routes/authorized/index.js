const express=require('express')
const router =express.Router()

router.use('./applicant',require('./applicant'))
router.use('./admin',require('./admin'))


module.exports=router;

