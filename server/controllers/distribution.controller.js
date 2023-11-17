import Distribution from '../models/distribution.model.js';

export const createDistribution = async (req, res, next) => {
  try {
    const distributionData = req.body;
    const distribution = await Distribution.create(distributionData);
    
    res.status(201).json({
      message: 'Distribution created successfully!',
      distribution,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllDistributions = async (req, res, next) => {
  try {
    const distributions = await Distribution.find();
    
    res.status(200).json({
      distributions,
    });
  } catch (error) {
    next(error);
  }
};

export const getDistributionByCompanyEmail = async (req, res, next) => {
    try {
      const { companyEmail } = req.params;
      const distribution = await Distribution.findOne({ companyEmail });
  
      if (!distribution) {
        res.status(404).json({
          message: 'Distribution not found!',
        });
        return;
      }
  
      res.status(200).json({
        distribution,
      });
    } catch (error) {
      next(error);
    }
  };
  
  export const updateDistributionByCompanyEmail = async (req, res, next) => {
    try {
      const { companyEmail } = req.params;
      const distributionData = req.body;
      const distribution = await Distribution.findOneAndUpdate({ companyEmail }, distributionData, { new: true });
  
      if (!distribution) {
        res.status(404).json({
          message: 'Distribution not found!',
        });
        return;
      }
  
      res.status(200).json({
        message: 'Distribution updated successfully!',
        distribution,
      });
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteDistributionByCompanyEmail = async (req, res, next) => {
    try {
      const { companyEmail } = req.params;
      const distribution = await Distribution.findOneAndDelete({ companyEmail });
  
      if (!distribution) {
        res.status(404).json({
          message: 'Distribution not found!',
        });
        return;
      }
  
      res.status(200).json({
        message: 'Distribution deleted successfully!',
        distribution,
      });
    } catch (error) {
      next(error);
    }
  };
  