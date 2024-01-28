import express from "express";
import { login, register, searchProgram } from "../Controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/search-program", searchProgram);

export default router;
