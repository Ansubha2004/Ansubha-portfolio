import express from "express";
import { FormValidation } from "../middlewares/FormValidation.js";
import { formdatasubmission, formdata, formdelete } from "../controllers/FormController.js";

const router = express.Router();

router.post("/form", FormValidation, formdatasubmission);
router.get("/display", formdata);
router.delete("/delete/:id",formdelete)

export default router;
