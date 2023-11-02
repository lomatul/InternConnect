import Company from '../models/company.model.js';

// Create a company
export const createCompany = async (req, res, next) => {
  try {
    const { name, email, year, address, requiredDomain, internsHired, contactNumber, selectedInterns, minInterns, maxInterns, status } = req.body;

    const company = new Company({
      name,
      email,
      historicalData: [
        {
          year,
          address,
          requiredDomain,
          internsHired,
          contactNumber,
          selectedInterns,
        },
      ],
      minInterns,
      maxInterns,
      status,
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


// Get a single Company by email and year
export const getCompanyByEmailAndYear  = async (req, res, next) => {
  try {
    const year = parseInt(req.params.year, 10);      // Converting to a decimal (base: 10)
    const { email } = req.params;

    const company = await Company.findOne({ email });

    if (!company) {
      res.status(404).json({
        message: 'Company not found!',
      });
      return;
    }

    const historicalDataForYear = company.historicalData.find((data) => data.year === year);
    console.log("Historical data :", historicalDataForYear.year);

    if (!historicalDataForYear) {
      res.status(404).json({
        message: 'Data not found for the specified year!',
      });
      return;
    }

    res.status(200).json({
      message: 'Company data for the specified year retrieved successfully!',
      company: historicalDataForYear,
    });
  } catch (error) {
    next(error);
  }
};


// Update a company by email and year
export const updateCompanyByEmailAndYear  = async (req, res, next) => {
  try {
    const year = parseInt(req.params.year, 10);      // Converting to a decimal (base: 10)
    const { email } = req.params;

    const company = await Company.findOne({ email });

    if (!company) {
      res.status(404).json({
        message: 'Company not found!',
      });
      return;
    }

    const historicalDataForYear = company.historicalData.find((data) => data.year === year);

    if (!historicalDataForYear) {
      res.status(404).json({
        message: 'Data not found for the specified year!',
      });
      return;
    }

    // Updating historical data
    historicalDataForYear.address = req.body.address;
    historicalDataForYear.requiredDomain = req.body.requiredDomain;
    historicalDataForYear.internsHired = req.body.internsHired;
    historicalDataForYear.contactNumber = req.body.contactNumber;
    historicalDataForYear.selectedInterns = req.body.selectedInterns;

    await company.save();

    res.status(200).json({
      message: 'Company historical data updated successfully!',
      company,
    });
  } catch (error) {
    next(error);
  }
};


// Adding historical data for a specific year to a company
export const createHistoricalDataByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const { year, address, requiredDomain, internsHired, contactNumber, selectedInterns } = req.body;

    // Find the company by email
    const company = await Company.findOne({ email });

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    // Check if data for the specified year already exists
    const existingYearData = company.historicalData.find(data => data.year === year);

    if (existingYearData) {
      return res.status(400).json({ message: 'Data for the specified year already exists' });
    }

    // Create new historical data entry
    const newHistoricalData = {
      year,
      address,
      requiredDomain,
      internsHired,
      contactNumber,
      selectedInterns,
    };

    // Add the new historical data to the company's historicalData array
    company.historicalData.push(newHistoricalData);

    await company.save();

    res.status(201).json({ message: 'Historical data added successfully', data: newHistoricalData });
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

    company.status = status;    // Update the status

    await company.save();

    res.status(200).json({ message: 'Company status updated successfully', company });
  } catch (error) {
    next(error);
  }
};


// Delete a company by email and year
export const deleteCompanyByEmailAndYear  = async (req, res, next) => {
  try {
    const { email, year } = req.params; 

    const company = await Company.findOne({ email, year });

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
