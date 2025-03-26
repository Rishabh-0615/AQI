import express from 'express';
import { 
    forgetPassword, 
    loginUser, 
    logoutUser, 
    myProfile, 
    registerWithOtp, 
    resetPassword, 
    verifyOtpAndRegister 
} from '../controllers/userControllers.js';  // Ensure correct filename

import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.post("/register", registerWithOtp);
router.post("/login", loginUser);
router.post("/verify-otp/:token", verifyOtpAndRegister);
router.post("/forgot-password", forgetPassword);  // Fixed typo
router.post("/reset-password/:token", resetPassword);
router.get("/logout", isAuth, logoutUser);  // Changed GET to POST
router.get("/me", isAuth, myProfile);

export default router;