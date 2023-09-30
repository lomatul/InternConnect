import express from 'express';
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  loginStudent,
} from '../controllers/student.controller.js';

const router = express.Router();

router.post('/createStudent', createStudent);

router.get('/students', getAllStudents);

router.get('/getStudent/:student_id ', getStudentById);

router.put('/updateStudent/:student_id ', updateStudentById);

router.delete('/deleteStudent/:student_id ', deleteStudentById);

router.post('/login', loginStudent);

export default router;