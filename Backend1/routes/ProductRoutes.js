const express=require('express')
const { addproduct, getproduct, deleteproduct, updateproduct, getproductdetail, getproductdetailbycategory } = require('../controllers/ProductController')
const router=express.Router()
const uplaod=require("../utils/FileUpload")

router.post("/addproduct",uplaod.single('product_image'),addproduct)
router.get("/getproduct",getproduct)
router.delete("/deleteproduct/:id",deleteproduct)
router.get("/getproductdetail/:id",getproductdetail)
router.put("/updateproduct/:id",uplaod.single('product_image'), updateproduct)
router.get("/getproductbycategory/:id",getproductdetailbycategory)
module.exports=router