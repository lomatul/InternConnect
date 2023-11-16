import express from 'express';
import {
  createMentor,
  getAllMentors,
  getMentorByEmail ,
  updateMentorByEmail,
  deleteMentorByEmail,

} from '../controllers/mentor.controller.js';

const router = express.Router();

router.post('/createMentor', createMentor);

router.get('/mentors', getAllMentors);

router.get('/getMentor/:email', getMentorByEmail);

router.put('/updateMentor/:email', updateMentorByEmail );

router.delete('/deleteMentor/:email', deleteMentorByEmail);

export default router;
