const mongoose=require("mongoose")

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log("Database connected")
})
.catch(error=>(console.log(error)))