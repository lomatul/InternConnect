import express from 'express';
import {
  createMentor,
  getAllMentors,
  getMentorByEmail ,
  updateMentorByEmail,
  deleteMentorByEmail,
  AddAssesment,
  getAssesment,
  getmentor,
  evaluateAverageMentorMarks,
  getViewAssesment
} from '../controllers/mentor.controller.js';

const router = express.Router();

router.post('/createMentor', createMentor);

router.get('/mentors', getAllMentors);

router.get('/getMentor/:email', getMentorByEmail);

router.put('/updateMentor/:email', updateMentorByEmail );

router.delete('/deleteMentor/:email', deleteMentorByEmail);

router.post('/AddAssesment', AddAssesment);

router.put('/evaluateMarks/:StudentId', evaluateAverageMentorMarks );

router.get('/getAssesment/:mentorid/:StudentId', getAssesment);

router.get('/getmentorbyid/:mentorid', getmentor);

router.get('/getViewAssesment', getViewAssesment);

export default router;
