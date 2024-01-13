import express from 'express';
import {
  createCompany,
  createHistoricalDataByEmail,
  getAllCompanies,
  getCompanyByEmailAndYear,
  updateCompanyByEmailAndYear ,
  updateCompanyStatusByEmail,
  deleteCompanyByEmailAndYear,
  getCompanyByID, 
  assignMenotors,
  sendFormtomentors,
  sendHiredNotifyingMail,
  getCompanyHistoryByYear,

} from '../controllers/company.controller.js';

const router = express.Router();

router.post('/createCompany', createCompany);

router.post('/createHistoricalData/:email', createHistoricalDataByEmail);

router.get('/companies', getAllCompanies);

router.get('/getCompany/:email/:year', getCompanyByEmailAndYear);

router.get('/getCompanybyid/:id', getCompanyByID);

router.get('/getHistoricalData/:year', getCompanyHistoryByYear);

router.put('/updateCompany/:email/:year', updateCompanyByEmailAndYear );

router.put('/updateCompanyStatus/:email', updateCompanyStatusByEmail); 

router.delete('/deleteCompany/:email/:year', deleteCompanyByEmailAndYear);

router.post('/assignMenotors', assignMenotors);

router.get('/sendmentorsforms', sendFormtomentors)

router.get('/sendHiredNotifyingMail', sendHiredNotifyingMail)

export default router;

