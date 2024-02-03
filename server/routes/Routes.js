import express from "express";
import { login, register } from "../Controllers/auth.js";
import { searchProgram } from "../Controllers/Search_program.js";
import { registerStudent } from "../Controllers/NewStudentRegister.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/search-program", searchProgram);
router.post("/register-new-student", registerStudent);

export default router;
