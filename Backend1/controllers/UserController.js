const User=require('../models/UserModel')
const crypto=require('crypto')
const Token=require("../models/TokenModel")
const sendEmail=require('../utils/SentEmail')
const jwt=require("jsonwebtoken")
const {expressjwt}=require('express-jwt')

exports.register=async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({Message:"Email already existed"})
    }
    let newuser= new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.passsword
    })
     newuser=await newuser.save()
     if(!newuser){
        return res.status(400).json({Message:"Something went wrong"})
     }
     let token=new Token({
        token:crypto.randomBytes(16).toString('hex'),
        user:newuser._id
    })
    token=await token.save()
    if(!token){
        return res.status(400).json({Message:"Something went wrong"})
    } 
    const url=`http://localhost:3000/verifyemail/${token.token}`
    sendEmail({
        from:"noreply@gmail.com",
        to:newuser.email,
        text:`Click on the following link to verify ${url}`,
        html:`<a href="${url}">Click to verify</a>`
    })

     res.send(newuser)
}
exports.verifyEmail=async(req,res)=>{
    let token =await Token.findOne({token:req.params.token})
    if(!token){
        return res.status(400).json({error:"Something went wrong"})
    } 
    // check user
    let user=await User.findById(token.user)
   if(!user){
    return res.status(400).json({error:"Something went wrong"})
   }
   if(user.isVerified){
    return res.status(400).json({error:"User already verified"})
   }
   user.isVerified=true
   user=await user.save()
   if(!user){
    return res.status(400).json({error:"Something went wrong"})
   }
   res.status(200).json({message:"User Verified"})
}

exports.resentverification=async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({er:"Email not found"})
    }
    if(user.isVerified){
        return res.status(400).json({er:"User is already verified"})
    }
    let token=new Token({
        token:crypto.randomBytes(16).toString('hex'),
        user:user._id
    })
    token=await token.save()
    if(!token){
        return res.status(400).json({Message:"Something went wrong"})
    } 
    const url=`localhost:3000/verifyemail/${token.token}`
    sendEmail({
        from:"noreply@gmail.com",
        to:user.email,
        text:`Click on the following link to verify ${url}`,
        html:`<a href="${url}">Click to verify</a>`
    })
    res.send({message:`Token resent Successfully to your ${user.email}`})

}

exports.forgetpassword=async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"Email not found"})
    }
    let token=new Token({
        token:crypto.randomBytes(16).toString('hex'),
        user:user._id
    })
    token=await token.save()
    if(!token){
        return res.status(400).json({message:"Something went wrong"})
    } 
    const url=`localhost:3000/resetpassword/${token.token}`
    sendEmail({
        from:"noreply@gmail.com",
        to:user.email,
        text:`Click on the following link to verify ${url}`,
        html:`<a href="${url}">Click to verify</a>`
    })
    res.send({message:`Resent code  resent Successfully to your ${user.email}`})

}
exports.resetverify=async(req,res)=>{
    let token=await Token.findOne({token:req.params.token})
    if(!token){
        return res.status(400).json({error:"Token not found"})
    }
    let user=await User.findById(token.user)
    if(!user){
        return res.status(400).json({error:"User not found"})
    }
    user.passsword=req.body.passsword
    user=await user.save()
    if(!user){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.status(200).json({message:"Password Updated successfully"})
}

exports.getUserList=async(req,res)=>{
    let user= await User.find()
    if(!user){
        return res.status(400).json({err:"Something went wrong"})
    }
    res.send(user)
}

exports.getUserDetails=async(req,res)=>{
    let user= await User.findById(req.params.id)
    if(!user){
        return res.status(400).json({err:"Something went wrong"})
    }
    res.send(user)
}

exports.updateUser=async(req,res)=>{
    let user=await User.findByIdAndUpdate(req.params.id,{
        username:req.body.username,
        email:req.body.email,
        role:req.body.role,
        isVerified:req.body.isVerified
    },{new:true})
    if(!user){
        return res.status(400).json({err:"Something went wrong"})
    }
    res.send(user)
}

exports.deleteUser=async(req,res)=>{
    let user=await User.findByIdAndDelete(req.params.id)
    if(!user){
        return res.status(400).json({err:"Something went wrong"})
    }
    res.status(200).json({Message:"User deleted Successfully"})
}

exports.signIn=async(req,res)=>{
    // destructure
    let{email,password}=req.body

    let user=await User.findOne({email:email})
    if(!user){
        return res.status(400).json({Message:"User Not found"})
    }
    if(!user.authenicate(password)){
        return res.status(400).json({error:"Password Incorrect"})
    }
    if(!user.isVerified){
        return res.status(400).json({error:"User Is not verified"})
    }
    let {_id,username,role}=user

    let token = jwt.sign({user:_id,role:role }, process.env.JWT_PASS);

    return res.send({
        token:token,
        username:username,
        role:role,
        email:email
    })
}

exports.signOut=async(req,res)=>{
    res.send("Signed Out Successfuly")
}

exports.requireSignin=expressjwt({
    secret:process.env.JWT_PASS,
    algorithms:["HS256"]
})
    
