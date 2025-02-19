
import express from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";  // Correct path
import { applyJob, getApplicants, getAppliedjobs, updateStatus } from "../controllers/application.controler.js"; 

const router=express.Router();

router.route("/apply/:id").get(isAuthenticated,applyJob)
router.route("/get").get(isAuthenticated,getAppliedjobs)
router.route("/:id/applicants").get(isAuthenticated,getApplicants)
router.route("/status/:id/update").post(isAuthenticated,updateStatus)




export default router;