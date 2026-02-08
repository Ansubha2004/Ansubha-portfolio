import contactmodel from "../models/contact.js"
import {SendMail} from "../utils/email.js"


export const submitform=async (req,res)=>{
    try{
        const {name,email,subject,message}=req.body;
        if(!name || !email || !subject || !message)
        {
            return res.json({
                success:false,
                message:"Fill all the credentials"
            })
        }
        const createdata=await contactmodel.create({
            name,email,subject,message
        })
        SendMail(name,email,subject,message);
        return res.json({
            success:true,
            message:"contact enquiry submiited",
            createdata

        })
    }
    catch(err)
    {
        return res.json({
            success:false,
            message:"error while form submission"
        })
    }
}