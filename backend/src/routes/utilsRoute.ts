import { Router } from "express";
import { doesExistInDB } from "../controllers/utilsController";

const router = Router();

router.post("/doesExistInDB", doesExistInDB);

export default router;
