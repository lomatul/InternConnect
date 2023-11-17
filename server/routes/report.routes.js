import express from 'express';
import {
  createReport,
  getAllReports,
  getReportByStudentId,
  updateReportByStudentId,
  deleteReportByStudentId,
} from '../controllers/report.controller.js';

const router = express.Router();

router.post('/createReport', createReport);

router.get('/reports', getAllReports);

router.get('/getReport/:student_id', getReportByStudentId);

router.put('/updateReport/:student_id', updateReportByStudentId);

router.delete('/deleteReport/:student_id', deleteReportByStudentId);

export default router;
