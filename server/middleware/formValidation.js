import joi from "joi";

const formValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        subject: joi.string().min(3).max(100).required(),
        message: joi.string().min(3).max(300).required()
    })
    const {error}=schema.validate(req.body);
    if(error)
    {
        return res.json({
            success:false,
            message:error.details[0].message
        })
    }
    next();
}

export default formValidation