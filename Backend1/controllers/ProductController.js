const Product=require('../models/ProductModel')

exports.addproduct=async(req,res)=>{
    let product=new Product({
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        count_in_stock:req.body.count_in_stock,
        product_image:req.file.path,
        rating:req.body.rating,
        category:req.body.category
    })
     product=await product.save()
     if(!product){
        return res.status(400).json({error:"Something went wrong"})
     }
     res.send(product)
}
exports.getproduct=async(req,res)=>{
    let product=await Product.find().populate('category')
    if(!product){
        return res.status(400).json({error:"Something Went Wrong"})
    }
    res.send(product)
}

exports.getproductdetail=async(req,res)=>{
    let product=await Product.findById(req.params.id)
    if(!product){
        return res.status(400).json({error:"Product Not found"})
    }
    res.send(product)
}

exports.deleteproduct=async(req,res)=>{
    let product=await Product.findByIdAndDelete(req.params.id)
    if(!product){
        return res.status(400).json({error:"Something Went wrong"})
    }
    res.send({message:"Product deleted successfully"})
}

exports.updateproduct=async(req,res)=>{
    let product=await Product.findByIdAndUpdate(req.params.id,
        req.file?
        {
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        count_in_stock:req.body.count_in_stock,
        product_image:req.file.path,
        rating:req.body.rating,
        category:req.body.category
    }:{
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        count_in_stock:req.body.count_in_stock,
        rating:req.body.rating,
        category:req.body.category
    }
    ,{new:true})

    if(!product){
        return res.status(400).json({error:"Product Not Upadted"})
    }
    res.send(product)
}

exports.getproductdetailbycategory=async(req,res)=>{
    let product=await Product.find({category:req.params.id})
    if(!product){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(product)
    // res.status(200).json({product})
}