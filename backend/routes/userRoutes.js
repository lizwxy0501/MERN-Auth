import express  from "express";
import { authUser, registerUser, logoutUser, updateUserProfile, getUserProfile } from "../controllers/userController.js";
import { protect } from "../midware/authMidware.js";


const router = express.Router();

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router;