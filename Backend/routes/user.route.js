
import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controler.js";

import isAuthenticated from "../middleware/isAuthenticated.js";  // Correct path
import { singleUpload } from "../middleware/multer.js";

const router=express.Router();

router.route("/register").post( singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout)
router.route("/profile/update").post(isAuthenticated, singleUpload , updateProfile);

// 7:13



export default router;