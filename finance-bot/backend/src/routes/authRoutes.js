import express from 'express';
import { loginUser, registerUser,getMe, logoutUser} from '../controllers/auth.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.post("/logout",logoutUser)

export default router;