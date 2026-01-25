import joi from "joi"

export const FormValidation=(req,res,next)=>{
    const schema=joi.object(
        {
            name:joi.string().min(3).max(100).required(),
            email:joi.string().email().required(),
            subject:joi.string().min(3).max(100).required(),
            message:joi.string().min(3).max(300).required()
        }
    )
    const {error}=schema.validate(req.body);//validating the data
    if(error){
        return res.status(400).json({success:false,message:error.details[0].message});
    }
    next();
}