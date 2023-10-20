import express from 'express';
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  loginStudent,
  updatePasswordById,
  postlogin,
  logout
} from '../controllers/student.controller.js';
import upload from '../middlewares/multer.js';
import { ulpoadfiledata } from '../controllers/filecontroller.js';


const router = express.Router();

router.post('/createStudent', createStudent);

router.get('/students', getAllStudents);

router.get('/getStudent/:student_id ', getStudentById);

router.put('/updateStudent/:student_id ', updateStudentById);

router.delete('/deleteStudent/:student_id ', deleteStudentById);

router.post('/login', loginStudent);

router.post('/postlogin', postlogin)

router.post('/updatePassword/:student_id', updatePasswordById);

router.post('/uploadfile', upload.single('file'), ulpoadfiledata)

router.get("/logout", logout);
export default router;