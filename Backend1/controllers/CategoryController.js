const Category=require('../models/CategoryModel')

exports.addCategory=async(req,res)=>{
    let category=await Category.findOne({
        category_name:req.body.category_name
    })
    if(category){
        return res.status(400).json({error:"Catgeory Already existed"})
    }
    let categorytoadd= new Category({
        category_name:req.body.category_name
    })
    categorytoadd= await categorytoadd.save()
    if(!categorytoadd){
        return res.status(400).json({error:"Category Not added"})
    }
    res.send(categorytoadd)
}


exports.findAllcategory=async(req,res)=>{
    let category=await Category.find()
    if(!category){
        return res.status(400).json({error:"Category NOt found"})
    }
    res.send(category)
}
exports.getCategoryDetail=async(req,res)=>{
    let category=await Category.findById(req.params.id)
    if(!category){
        return res.status(400).json({err:"Id Invaild"})
    }
    res.send(category)
}
exports.updatecategory=async(req,res)=>{
    let category=await Category.findByIdAndUpdate(req.params.id,{
        category_name:req.body.category_name
    },{new:true})
    if(!category){
        res.status(400).json({error:"Something went wrong"})
    }
    res.send(category)
   
}
exports.deletecategory=async(req,res)=>{
    let category=await Category.findByIdAndDelete(req.params.id)
    if(!category){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send({message:"category deleted "})
}


// req.body= data is send using user form
// req.params=data is used from url
// req.query= what type of data is available
// find()=return all data from database
// findOne()=returns first doc that matches given field
// findByIdandUpdate= find the given field using id and update
// findByIdanddelete= find the given field using id and delete
// findById()= find the given field using id



