const express=require('express');
const router=express.Router();
const tvController=require('./controller/tvController');
router.get('/', tvController.homePage)

module.exports=router;