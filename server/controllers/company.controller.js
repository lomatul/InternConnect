import Company from '../models/company.model.js';

// Create a company
export const createCompany = async (req, res, next) => {
  try {
    const company = new Company({
      //companyID: req.body.companyID,
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      requiredDomain: req.body.requiredDomain,
      minInterns: req.body.minInterns,
      maxInterns: req.body.maxInterns,
      internsHired: req.body.internsHired,
      contactNumber: req.body.contactNumber,
      selectedInterns: req.body.selectedInterns,
      status: req.body.status,
    });

    await company.save();

    res.status(201).json({
      message: 'Company created successfully!',
      company,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Companies
export const getAllCompanies = async (req, res, next) => {
  try {
    const companies = await Company.find();

    res.status(200).json({
      message: 'Companies retrieved successfully!',
      companies,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single Company by companyID
export const getCompanyById = async (req, res, next) => {
  try {
    const company = await Company.findOne({ companyID: req.params.companyID });

    if (!company) {
      res.status(404).json({
        message: 'Company not found!',
      });
      return;
    }

    res.status(200).json({
      message: 'Company retrieved successfully!',
      company,
    });
  } catch (error) {
    next(error);
  }
};

// Update a company by companyID
export const updateCompanyById = async (req, res, next) => {
  try {
    const company = await Company.findOne({ companyID: req.params.companyID });

    if (!company) {
      res.status(404).json({
        message: 'Company not found!',
      });
      return;
    }

    // Update company properties as needed
    company.name = req.body.name;
    company.address = req.body.address;
    company.email = req.body.email;
    company.requiredDomain = req.body.requiredDomain;
    company.minInterns = req.body.minInterns;
    company.maxInterns = req.body.maxInterns;
    company.internsHired = req.body.internsHired;
    company.contactNumber = req.body.contactNumber;
    company.selectedInterns = req.body.selectedInterns;
    company.status = req.body.status;

    await company.save();

    res.status(200).json({
      message: 'Company updated successfully!',
      company,
    });
  } catch (error) {
    next(error);
  }
};


// Update the status of a company based on email
export const updateCompanyStatusByEmail = async (req, res, next) => {
  const { email } = req.params; 
  const { status } = req.body;

  try {
    const company = await Company.findOne({ email }); 

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    company.status = status; // Update the status

    await company.save();

    res.status(200).json({ message: 'Company status updated successfully', company });
  } catch (error) {
    next(error);
  }
};


// Delete a company by companyID
export const deleteCompanyById = async (req, res, next) => {
  try {
    const company = await Company.findOne({ companyID: req.params.companyID });

    if (!company) {
      res.status(404).json({
        message: 'Company not found!',
      });
      return;
    }

    await company.remove();

    res.status(200).json({
      message: 'Company deleted successfully!',
    });
  } catch (error) {
    next(error);
  }
};
