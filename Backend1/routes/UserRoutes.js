const express=require('express')
const { register, verifyEmail, resentverification, forgetpassword, resetverify, getUserList, getUserDetails, updateUser, deleteUser, signIn } = require('../controllers/UserController')
const router=express.Router()

router.post("/register",register),
router.get("/verifyemail/:token",verifyEmail),
router.post("/resentcode",resentverification),
router.post("/resetpassword",forgetpassword),
router.post("/resetpassword/:token",resetverify),
router.get("/getuser",getUserList)
router.get("/getuserdetails/:id",getUserDetails)
router.put("/updateuser/:id",updateUser)
router.delete("/deleteuser/:id",deleteUser)
router.post("/signin",signIn)
module.exports=router