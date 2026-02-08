import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSKEY
    },
    tls: {
        rejectUnauthorized: true
    }
})

export const SendMail = async (name, email, subject, message) => {
    const mail1 = {
        from: process.env.EMAIL,
        to: email,
        subject: `Thank You ${name} for contacting Me!!`,
        text: `Hi ${name},\n\nThank you for getting in touch through my portfolio website. I truly appreciate you taking the time to reach out. I have received your message and will review it carefully. I’ll get back to you as soon as possible to discuss this further. Looking forward to connecting with you.\n\nBest regards,\nAnsubha Dhar`
    }
    const mail2={
        from:`${name} <${process.env.EMAIL}>`,
        to:process.env.EMAIL,
        replyTo:email,
        subject:subject,
        text:message
    }
    try{
        const info1=await transporter.sendMail(mail1);
        console.log("Thanks Mail sent to user...")
        const info2=await transporter.sendMail(mail2);
        console.log("Mail received from client.....");
    }
    catch(err)
    {
        console.log("error sending mails....",err);
    }

}