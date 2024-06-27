const express=require("express")
const { hellofunction } = require("../controllers/HelloController")
const router=express.Router()

router.get("/hello1",hellofunction)
module.exports=router