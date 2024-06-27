const express=require("express")
const { addCategory, findAllcategory, getCategoryDetail, updatecategory, deletecategory } = require("../controllers/CategoryController")
const router=express.Router()

router.post("/addcategory",addCategory)
router.get("/getcategory",findAllcategory)
router.get("/getcategorydetail/:id",getCategoryDetail)
router.put("/updatecategory/:id",updatecategory)
router.delete("/deletecategory/:id",deletecategory)



module.exports=router
