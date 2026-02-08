import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    subject:{
        type:String,
        required:true,
        trim:true
    },
    message:{
        type:String,
        required:true,
        trim:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    replymessage:{
        type:String,
        default:"",
        trim:true
    },
    replyAt:{
        type:Date,
        default:null
    },
    status:{
        type:String,
        enum:["new","pending","responded"],
        default:"new"
    }
})

export default mongoose.model("Contact",contactSchema);
