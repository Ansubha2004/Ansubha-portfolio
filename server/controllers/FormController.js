import clientmodel from "../models/client.js"
import sendmail from "../utils/mailer.js"


export const formdatasubmission=async (req,res)=>{
    try{
        const {name,email,subject,message}=req.body;
        if(!name || !email || !subject || !message)
        {
            return res.json(
                {
                    success:false,
                    message:"Fill all the credentials"
                })
        }
        const createdata=await clientmodel.create({
            name,
            email,
            subject,
            message
        })
        sendmail(createdata.email,"Thank You, "+createdata.name+" for contacting ",`Dear ${createdata.name},\n\nThank you for reaching out through my portfolio. I’ve received your message and appreciate your interest in my work. I’ll review your message and get back to you as soon as possible. \nIn the meantime, here’s a quick summary of what you submitted:\n\n - Name: ${createdata.name}\n- Email: ${createdata.email}\n- Message: ${createdata.message}\n\nIf there’s anything else you’d like to add or discuss, feel free to reply directly to this email.Looking forward to connecting with you soon!\n\nWarm regards,\nAnsubha Dhar\n`)
        return res.json({
            success:true,
            message:"Form submission successfull",
            data:createdata
        })
        
    }
    catch(err)
    {
        return res.json(
            {
                success:false,
                message:"error while form submission"
            })
    }
}


export const formdata=async (req,res)=>{
    try{
        const allForms = await clientmodel.find({})
        return res.json({
            success: true,
            message: "Cleints data retrieved successfully",
            data: allForms
        });
    }   
    catch(err)
    {
        return res.json(
            {
                success:false,
                message:"Error displaying data",
                error: err.message
            })
    }
}


export const formdelete=async (req,res)=>{
    try{
        const {id}=req.params
        const deletedForm = await clientmodel.findOneAndDelete({_id:id})
        return res.json({
            success: true,
            message: "client data deleted successfully",
            data: deletedForm
        });
    }   
    catch(err)
    {
        return res.json(
            {
                success:false,
                message:"Error deleting data",
                error: err.message
            })
    }
}

