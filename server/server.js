import express from "express"
import cors from "cors"
import "./models/config.js"
import formroute from "./routes/formroute.js"

import dotenv from "dotenv"
dotenv.config();


const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))

//setting test api
app.get('/formapi/test',(req,res)=>{
    try{
        return res.status(200).json({
            success:true,
            message:"API WORKING. Test successful"
        })
    }
    catch(err)
    {   
        return res.status(500).json({
            success:false,
            message:err
        })
    }
})

app.use("/formapi",formroute);






//error route handling
app.all('*',(req,res)=>{
    return res.status(404).json({
        success:false,
        message:"Route error"
    })
})


//setting up the server
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Running on port ${port}..........`)
})