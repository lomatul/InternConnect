import express from 'express';
import {
  createGrade,
  getAllGrades,
  getGradeByStudentId,
  updateGradeByStudentId,
  deleteGradeByStudentId,
} from '../controllers/grade.controller.js';

const router = express.Router();

router.post('/createGrade', createGrade);

router.get('/grades', getAllGrades);

router.get('/getGrade/:student_id', getGradeByStudentId);

router.put('/updateGrade/:student_id', updateGradeByStudentId);

router.delete('/deleteGrade/:student_id', deleteGradeByStudentId);

export default router;
