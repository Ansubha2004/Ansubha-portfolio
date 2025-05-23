import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Mongodb connected successfully")
})
.catch((err)=>{
    console.log("Error connecting mongodb:",err)
})

