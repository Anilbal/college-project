const express=require('express')
const app=express()
const bodyparser=require("body-parser")
require('dotenv').config()
require('./connection')
const test=require('./routes/Hello')
const category=require('./routes/CategoryRoutes')
const product=require('./routes/ProductRoutes')
const user=require('./routes/UserRoutes')
const order=require('./routes/OrderRoutes')
const port=process.env.PORT
const cors=require('cors')

app.get("/hello",(req,res)=>{
    res.send("hello guys it is running")
})
app.use(cors())

app.use(bodyparser.json())
 app.use("/api",test)
 app.use("/category",category)
 app.use("/product",product)
 app.use("",user)
 app.use("",order)
 app.use("/public/uploads",express.static('public/uploads'))
app.listen(port,()=>{
    console.log(`server started AT port number ${port}`)
})
//  express=Fast, unopinionated, minimalist web framework for Node.js.
// nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
// module is use for idenyifying 
// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
// whiteListed ip address is 0.0.0.0/0 which can be used everywhere
// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.