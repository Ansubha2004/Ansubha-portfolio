import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import contactRoutes from "./routes/contactRoute.js";




connectdb();
dotenv.config();
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(
    {
        origin:["http://localhost:5173",process.env.LINK],
        credentials:true,
        methods:["GET","POST","PUT","DELETE"]
    }
))

app.use("/api/contact",contactRoutes);






app.all("*",(req,res)=>{
    res.status(404).json({ error: "Route not found" });
})

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("Server running on "+PORT+"....")
})