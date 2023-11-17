import express from 'express';
import {
  createDistribution,
  getAllDistributions,
  getDistributionByCompanyEmail,
  updateDistributionByCompanyEmail,
  deleteDistributionByCompanyEmail,
} from '../controllers/distribution.controller.js';

const router = express.Router();

router.post('/createDistribution', createDistribution);

router.get('/distributions', getAllDistributions);

router.get('/getDistribution/:companyEmail', getDistributionByCompanyEmail);

router.put('/updateDistribution/:companyEmail', updateDistributionByCompanyEmail);

router.delete('/deleteDistribution/:companyEmail', deleteDistributionByCompanyEmail);

export default router;
