import { Router } from "express";
import { postRegister, postLogin } from "../controllers/authController";
const router = Router();

router.post("/register", postRegister);
router.post("/login", postLogin);

export default router;
