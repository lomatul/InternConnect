import express from 'express';
import {
  createCompany,
  getAllCompanies,
  getCompanyByEmailAndYear,
  updateCompanyByEmailAndYear ,
  updateCompanyStatusByEmail,
  deleteCompanyByEmailAndYear,
} from '../controllers/company.controller.js';

const router = express.Router();

router.post('/createCompany', createCompany);

router.get('/companies', getAllCompanies);

router.get('/getCompany/:email/:year', getCompanyByEmailAndYear);

router.put('/updateCompany/:email/:year', updateCompanyByEmailAndYear );

router.put('/updateCompanyStatus/:email', updateCompanyStatusByEmail); 

router.delete('/deleteCompany/:email/:year', deleteCompanyByEmailAndYear);

export default router;
