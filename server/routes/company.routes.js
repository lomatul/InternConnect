import express from 'express';
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompanyById,
  updateCompanyStatusByEmail,
  deleteCompanyById,
} from '../controllers/company.controller.js';

const router = express.Router();

router.post('/createCompany', createCompany);

router.get('/companies', getAllCompanies);

router.get('/getCompany/:companyID', getCompanyById);

router.put('/updateCompany/:companyID', updateCompanyById);

router.put('/updateCompanyStatus/:email', updateCompanyStatusByEmail); 

router.delete('/deleteCompany/:companyID', deleteCompanyById);

export default router;
