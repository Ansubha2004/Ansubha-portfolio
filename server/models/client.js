import mongoose from "mongoose"


const clientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    }
})


const clientmodel=mongoose.model("Client",clientSchema);
export default clientmodel;