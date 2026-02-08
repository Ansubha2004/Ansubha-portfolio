import express from "express";
import formValidation from "../middleware/formValidation.js"
import {submitform} from "../controllers/contactController.js"


const app=express();
const router=express.Router();

router.post("/",formValidation,submitform);

export default router;