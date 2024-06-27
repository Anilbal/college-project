const express=require('express')
const { placeorder } = require('../controllers/OrderController')
const router=express.Router()

router.post("/placeorder",placeorder)

module.exports=router