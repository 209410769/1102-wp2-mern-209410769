import express from "express";
const router = express.Router();
import { register_69, login_69, updateUser_69 } from "../controllers/authController_69.js";

router.route('/register_69').post(register_69)
router.route('/login_69').post(login_69)
router.route('/updateUser_69').patch(updateUser_69)
export default router;