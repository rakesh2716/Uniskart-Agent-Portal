import express from "express";
import { login, register } from "../Controllers/auth.js";
import { searchProgram } from "../Controllers/Search_program.js";
import { StudentInfoSave, getAllStudent, getStudentById, registerStudent, updateStudentInfo } from "../Controllers/NewStudentRegister.js";
import { getAllCountryStates } from "../Controllers/getStates.js";
// import { StudentInfoSave } from "../Controllers/studentSaveData.js";


const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/search-program", searchProgram);
router.post("/register-new-student", registerStudent);
router.get("/students", getAllStudent);
router.get("/getstates/:country", getAllCountryStates);
router.post("/student-info", StudentInfoSave);
router.get("/get-student-info-by-id/:id", getStudentById);
router.patch('/student-info-update/:id', updateStudentInfo);


export default router;
