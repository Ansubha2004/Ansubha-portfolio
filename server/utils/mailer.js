import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()



const sendmail=async (email,subject,text)=>{
    const transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,//ssl
        secure:true,
        auth:{
            user:process.env.USER_EMAIL,
            pass:process.env.USER_PASS
        }
    })

    const mailOptions = {
        from: process.env.USER_EMAIL,
        to: email ,
        subject: subject,
        text: text
    }
    await transporter.sendMail(mailOptions,(err,info)=>{
        if(error)
        {
            console.log("Error sending mail")
        }
        else
        {
            console.log("Message sent successfully to ",email)
        }
    })

}


export default sendmail;