import Company from '../models/company.model.js';
import Mentor from '../models/mentor.model.js';
import Student from '../models/student.model.js';
import otpgenerator from 'otp-generator';
import Mailfunction from "./mailsenders/custom.mailsender.js";

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

    if (!companies || companies.length === 0) {
      return res.status(404).json({ message: 'No companies found.' });
    }

    res.status(200).json(companies);

  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
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


export const getCompanyByID  = async (req, res, next) => {
  try {
    const { id } = req.params;

    const company = await Company.findOne({ _id:id });

    if (!company) {
     return res.status(404).json({
        message: 'Company not found!',
      });
      
    }
    
    res.status(200).send(company)
  } catch (error) {
    console.log(error)
    res.status(400).json(({error:error.message}))
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


export const getCompanyHistoryByYear = async (req, res, next) => {
  try {
    const year = Number(req.params.year);
    console.log('Year:', year);
    const companies = await Company.find({ 'historicalData.year': year });

    if (!companies || companies.length === 0) {
      return res.status(404).json({ message: `No historical data found for year ${year}.` });
    }

    const historicalData = companies.map((company) => {
      const data = company.historicalData.find((entry) => entry.year === year);

      if (!data)         // If no historical data is found for the specified year, return a placeholder object
      {
        return {
          name: company.name,
          address: 'N/A',  
          email: company.email,
          contactNumber: 'N/A',  
          internsHired: 0,  
        };
      }
      
      return {
        name: company.name,
        address: data.address,
        email: company.email,
        contactNumber: data.contactNumber,
        internsHired: data.internsHired,
      };
    });

    res.status(200).json(historicalData);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
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


export const assignMenotors = async( req, res)=>{
  try{
    const {id, Studentid, otp, newmentors}=req.body;
    const company=await Company.findById(id);
    if(company.OTP!=otp){
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }
    newmentors.map(async (element)=>{
      const mentor = new Mentor({
        name:element.name,
        email:element.email,
        designation:element.position,
        assignedStudents:[{student_id:Studentid}]
      });
      await mentor.save();
    })   
    res.status(200).json({ message:"Mentors created"});
  }catch(error){
    res.status(400).json({ error: error.message });
  }

  
}


export const sendFormtomentors = async(req, res)=>{
  try{
    const mentors = await Mentor.find();
    const promise=mentors.map(async element =>{
      const otp=otpgenerator.generate(6, { upperCaseAlphabets: true, lowerCaseAlphabets: true, specialChars: false })
      console.log(element);
      element.OTP=otp;
      const sub = "Testing"
      var text=`<p>Dear ${element.name},</p><p>Please click the following link to assesment the intern, doing internship. While submitting, please use the given OTP. Your OTP is '${otp}'</p>`;
      element.assignedStudents.forEach((element)=>{
        var link=`<p>For Student ${element} the assesment form link is:- <a href="http://localhost:3000/AddAssesment/${element}">Assesment this student</a></p>`;
        text=text+link;
      })
      await Mailfunction(sub, element.email, text);
      await element.save();
    })
    await Promise.all(promise);
    res.status(200).json({message:"Email works"})

  }catch (error){
    console.log("Error: ", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export const sendHiredNotifyingMail= async(req, res) =>{
  try{
    const { studentId, studentName } = req.body;
    console.log("Student ID: " + studentId);
    const student = await Student.findOne({ student_id: studentId });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const matchedCompany = student.companyStatus;

    const company = await Company.findOne({ _id: matchedCompany });

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const companyEmail = company.email;
    console.log("Company Mail: " + companyEmail);

    const sub = 'Hired Notification';
    const text = `<p>Dear HR of ${company.name},</p><p>Please click the following link to confirm that the student: ${studentName}, ID: ${studentId} is now hired as an intern by your company.
    </p><a href="http://localhost:4000/InterConnect/student/updateCurrentStatusByIdToHired/${studentId}">Confirm</a> 
    <p>If not, click the following link:</p>  <p><a href="http://localhost:4000/InterConnect/student/updateCurrentStatusByIdToRejected/${studentId}">Reject</a></p>`;
    await Mailfunction(sub, companyEmail, text);

    res.status(200).json({ message: 'Email works' });
  }catch (error){
    console.log("Error: ", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}