import express from 'express';
import {
  createCompany,
  createHistoricalDataByEmail,
  getAllCompanies,
  getCompanyByEmailAndYear,
  updateCompanyByEmailAndYear,
  updateCompanyByEmail,
  updateCompanyStatusByEmail,
  deleteCompanyByEmailAndYear,
  getCompanyByID, 
  assignMenotors,
  sendFormtomentors,
  sendHiredNotifyingMail,
  getCompanyHistoryByYear,
  getmentoredAssignedStudents
} from '../controllers/company.controller.js';

const router = express.Router();

router.post('/createCompany', createCompany);

router.post('/createHistoricalData/:email', createHistoricalDataByEmail);

router.get('/companies', getAllCompanies);

router.get('/getCompany/:email/:year', getCompanyByEmailAndYear);

router.get('/getCompanybyid/:id', getCompanyByID);

router.get('/getHistoricalData/:year', getCompanyHistoryByYear);

router.put('/updateCompany/:email/:year', updateCompanyByEmailAndYear );

router.put('/updateCompany/:email', updateCompanyByEmail );

router.put('/updateCompanyStatus/:email', updateCompanyStatusByEmail); 

router.delete('/deleteCompany/:email/:year', deleteCompanyByEmailAndYear);

router.post('/assignMenotors', assignMenotors);

router.get('/sendmentorsforms', sendFormtomentors)

router.post('/sendHiredNotifyingMail', sendHiredNotifyingMail)

router.get('/getmentoredAssignedStudents', getmentoredAssignedStudents)

export default router;

