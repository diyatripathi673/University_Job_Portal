
import express from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";  // Correct path
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controler.js";

const router=express.Router();


router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("/get/:id").post(isAuthenticated, getJobById);




export default router;