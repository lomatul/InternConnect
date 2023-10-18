import express from 'express';
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
} from '../controllers/company.controller.js';

const router = express.Router();

router.post('/createCompany', createCompany);

router.get('/companies', getAllCompanies);

router.get('/getCompany/:companyID', getCompanyById);

router.put('/updateCompany/:companyID', updateCompanyById);

router.delete('/deleteCompany/:companyID', deleteCompanyById);

export default router;
