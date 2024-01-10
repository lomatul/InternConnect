import Student from "../models/student.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import passport from "passport";
import otpgenerator from "otp-generator";
import sendPasswordResetEmail from "./mailsenders/forget.password.mailsender.js";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import validator from "validator";




// Create a student
export const createStudent = async (req, res, next) => {
  try {
    const student = new Student({
      name: req.body.name,
      student_id: req.body.student_id,
      email: req.body.email,
      password: req.body.password,
      CV: req.body.CV,
      companyPreferences: req.body.companyPreferences,
      domainPreferences: req.body.domainPreferences,
      CGPA: req.body.CGPA,
      currentStatus: req.body.currentStatus,
      companyStatus: req.body.companyStatus,
      OTP: req.body.OTP,
      accountActivationStatus: req.body.accountActivationStatus,
      submissionTimestampCV: req.body.submissionTimestampCV,
      weeklyBiWeeklyReport: req.body.weeklyBiWeeklyReport,
      internshipReport: req.body.internshipReport,
      presentationMarks: req.body.presentationMarks,
      finalGrade: req.body.finalGrade,
      hobbies: req.body.hobbies, 
      skills: req.body.skills, 
      languageEfficiency: req.body.languageEfficiency, 
      pastExperiences: req.body.pastExperiences, 
      externalLinks: req.body.externalLinks, 
      projects: req.body.projects, 
    });

    await student.save();

    res.status(201).json({
      message: "Student created successfully!",
      student,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Students
export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      message: "Students retrieved successfully!",
      students,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single Student by student_id
export const getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findOne({ student_id: req.params.student_id });

    if (!student) {
      res.status(404).json({
        message: "Student not found!",
      });
      return;
    }

    res.status(200).send({
      message: 'Student retrieved successfully!',
      student,
    });
  } catch (error) {
    next(error);
  }
};

// Update a student by student_id
export const updateStudentById = async (req, res) => {
  try {
    const { student_id } = req.params;
    const { name, email, bio, image, hobbies, skills, languageEfficiency, pastExperiences, externalLinks} = req.body;

    console.log("Image", image)

    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Updating the student's data
    student.name = name;
    student.email = email;
    student.bio = bio;
    if(image){
      student.image=image
    }
    
    // Updating the student profile fields
    student.hobbies = hobbies;
    student.skills = skills;
    student.languageEfficiency = languageEfficiency;
    student.pastExperiences = pastExperiences;
    student.externalLinks = externalLinks;

    // Save the updated student
    await student.save();

    return res.status(200).json({ message: "Student updated successfully", student });
  } catch (error) {
    console.log("Error: ", error)
    res.status(400).json({error: error.message})
  }
};

// Delete a student by student_id
export const deleteStudentById = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.student_id);

    if (!student) {
      res.status(404).json({
        message: "Student not found!",
      });
      return;
    }

    res.status(200).json({
      message: "Student deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};

// Creating JSON Web Token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// Student Login
export const loginStudent = async (req, res) => {
  const { student_id, password } = req.body;

  try {
    if (!student_id || !password) {
      throw new Error("All fields must be filled");
    }

    const student = await Student.findOne({ student_id });
    if (!student) {
      throw new Error("Incorrect email");
    }

    const match = await bcrypt.compare(password, student.password);
    if (!match) {
      throw new Error("Incorrect password");
    }

    if (!student.accountActivationStatus) {
      res
        .status(308)
        .json({
          message: "Please update Your Password to activate your Account",
          redirectUrl: "/Updatepassword",
          id: student_id,
        });
    } else {
      // create a token
      const token = createToken(student._id);
      res.status(200).json({ student_id, token });
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
};

//login with passport
export const postlogin = (req, res, next) => {
  // console.log("came in postlogin", req.body);

  passport.authenticate("student", (err, user, info) => {
    if (err) {
      console.error("Authentication error:", err);
      return res.status(500).json({ error: "Authentication error" });
    }

    if (!user) {
      console.log("it came in user");
      if (info.status === 0) {
        return res
          .status(308)
          .json({
            message: "Please update Your Password to activate your Account",
            redirectUrl: "/Updatepassword",
            id: info.Id,
          });
      }
      console.error("Authentication failed:", info.message);
      return res.status(401).json({ error: info.message });
    }
    user.password = undefined;
    req.logIn(user , (err) => {
      if(err){
        console.error(err)
        return res.status(500).json({ error: "Session is not set" });
      }
    }
    )
    // console.log("if session is set", req.user)
    // Authentication succeeded
    res.status(200).json({ message: "Logged In", User: user });
  })(req, res, next);
};

export const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      res.json({ error: err });
    } else res.status(200).json({ message: "Logged out" });
  });
};

// Update a student's password by student_id
export const updatePasswordById = async (req, res, next) => {
  try {
    const { student_id } = req.params;
    const { currentPassword, newPassword } = req.body;

    const student = await Student.findOne({ student_id: student_id });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Check if the current password matches
    const passwordMatch = await bcrypt.compare(
      currentPassword,
      student.password
    );

    if (!passwordMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }
    if(!validator.isStrongPassword(newPassword)){
      return res.status(400).json({ message: "New password is not Strong enough" });
    }

    // Update the password with the new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);
    student.password = hashedNewPassword;
    student.accountActivationStatus = true;

    // Save the updated student with the new password
    await student.save();

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    // next(error);
    res.status(400).json({ error: error.message });
  }
};

// Generating OTP for reset password
const generateOTP = () => {
  return {
    code: otpgenerator.generate(6, {
      upperCaseAlphabets: true,
      lowerCaseAlphabets: true,
      specialChars: false,
    }),
    timestamp: Date.now(),
  };
};

// Function to send OTP to the user's email and initiate password reset
export const sendOTPForPasswordReset = async (req, res) => {
  try {
    const { student_id } = req.body;

    console.log(student_id)
    // Check if the student with the provided student_id exists in your database
    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const otpData = generateOTP();
    student.OTP = otpData;
    await student.save();

    // Send the OTP to the user's email
    const emailResult = await sendPasswordResetEmail(
      student.name,
      student.email,
      otpData.code
    );

    if (emailResult) {
      // Email sending failed
      return res
        .status(500)
        .json({ message: "Failed to send OTP. Please try again." });
    }

    // Redirect the user to the password reset page (you can customize this URL)
    res
      .status(200)
      .json({
        message: `OTP sent to your email. Please check your email and reset your password.`,
      });
  } catch (error) {
    // Handle any errors that occur during the process
    // next(error);
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
};

// Function to verify the OTP and reset the password
export const resetPasswordWithOTP = async (req, res, next) => {
  try {
    const { student_id } = req.params; // Get the student ID from request parameters
    const { currentPassword, newPassword } = req.body;

    // Check if the student with the provided student_id exists in your database
    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Check if the OTP exists, is valid, and hasn't expired
    if (!student.OTP || student.OTP.code !== currentPassword) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Check if the OTP is still valid (within the 3-minute window)
    const otpTimestamp = student.OTP.timestamp;
    const currentTimestamp = Date.now();
    const otpValidityPeriod = 3 * 60 * 1000; // 3 minutes in milliseconds
    if (currentTimestamp - otpTimestamp > otpValidityPeriod) {
      return res.status(400).json({ message: "Expired OTP" });
    }

    // Update the password with the new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);
    student.password = hashedNewPassword;
    student.OTP = null; // Clear the OTP

    await student.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    // Handle any errors that occur during the process
    next(error);
  }
};


//Upload a file
export const uploadcvfile= async (req, res) =>{
  try{
    const { student_id } = req.params;
    const student = await Student.findOne({ student_id: student_id });
  
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
  
    student.CV=req.file.filename;

    await student.save();
    // console.log("req", req)
    res.status(200).json({message:"Uploaded"})
  }catch (error) {
    // next(error);
    res.status(400).json({error: error.message})
  }
  
}

//GetStudentCV

export const getcvfile= async (req, res) =>{
  try{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const tempDir = path.join(__dirname, '../Storage/Cv');
    const { student_id } = req.params;
    console.log(student_id)
    const student = await Student.findOne({ student_id: student_id });
  
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const Preferences = student.domainPreferences.map((item) => item.value).join('-');
    const cvfile = `${Preferences}-${student.CV}`;
    console.log(cvfile)
    const cvPath = path.join(tempDir, student.CV);

    res.contentType("application/pdf");
    res.download(cvPath, cvfile, (err)=>{
      if(err){
        return res.status(500).send('Error downloading CV');
      }
    })
  }catch (error) {
      // next(error);
      res.status(400).json({error: error.message})
    }
}

///setStudent preference
export const setpreference = async (req, res) =>{
  try{
    const {firstchoicecompany, secondchoicecompany, thirdchoicecompany, firstchoicedomain, secondchoicedomain, thirdchoicedomain} = req.body;
    // console.log(firstchoicecompany, secondchoicecompany, thirdchoicecompany, firstchoicedomain, secondchoicedomain, thirdchoicedomain)
    const {student_id} = req.params;
    // console.log(student_id)
    const student = await Student.findOne({ student_id: student_id });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const preferences = [
      { key: 1, value: firstchoicecompany },
      { key: 2, value: secondchoicecompany },
      { key: 3, value: thirdchoicecompany }
    ];

    // Update or add preferences to the student's companyPreferences
    for (const preference of preferences) {
      const existingPreference = student.companyPreferences.find(p => p.key === preference.key);
      if (existingPreference) {
        existingPreference.value = preference.value;
      } else {
        student.companyPreferences.push(preference);
      }
    }

    const preferencesdomain = [
      { key: 1, value: firstchoicedomain },
      { key: 2, value: secondchoicedomain },
      { key: 3, value: thirdchoicedomain }
    ];

    for (const domainpreference of preferencesdomain) {
      const existingPreference = student.domainPreferences.find(p => p.key === domainpreference.key); //const existingPreference = Student.find({student_id: student_id, "domainPreferences.key" : domainpreference.key});
      if (existingPreference) {
        existingPreference.value = domainpreference.value;
      } else {
        student.domainPreferences.push(domainpreference);
      }
    }

    await student.save();
    // console.log(student.companyPreferences[0].key) 
    res.status(200).json({ message: 'Preferences updated successfully' });   
  }catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
  

}


//test
export const getOneStudentbyId = async (req, res) =>{
  const { student_id } = req.params;
  // console.log("It worked", student_id)
  try{
    const student = await Student.findOne({ student_id });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }res.status(200).json({message:"It worked", students:student})
  }catch(error){
    console.error(error)
    res.status(400).json({message: error.message})
  }
  
};


export const addProject = async (req, res) => {
  try {
    const { student_id } = req.params;
    const { name, year, description, technologies } = req.body;

    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.projects.push({ name, year, description, technologies });

    await student.save();

    return res.status(201).json({ message: "Project added successfully", student });
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
};


export const getProjectsByStudentId = async (req, res, next) => {
  try {
    const { student_id } = req.params;

    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const projects = student.projects;

    res.status(200).json({ projects });
  } catch (error) {
    next(error);
  }
};

export const editProject = async (req, res) => {
  try {
    const { student_id, project_id } = req.params;
    const { name, year, description, technologies } = req.body;

    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const project = student.projects.id(project_id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.name = name;
    project.year = year;
    project.description = description;
    project.technologies = technologies;

    await student.save();

    return res.status(200).json({ message: "Project updated successfully", student });
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
};


export const deleteProject = async (req, res) => {
  try {
    const { student_id, project_id } = req.params;

    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.projects.pull(project_id);

    await student.save();

    return res.status(200).json({ message: "Project deleted successfully", student });
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
};


export const updateCompanyStatus = (async (req, res)=>{
  try{
    const {studentId, Status}=req.body;
    var student;
    try{
      if(Status==="rejected"){
        student=await Student.updateOne({ student_id:studentId }, {$set:{currentStatus:null, companyStatus:null}});
      }else if(Status==="rejected"){
        student=await Student.updateOne({ student_id:studentId }, {$set:{currentStatus:"Hirred"}});
      }else{
        return res.status(400).json({ message: "Status code value is not correct" });
      }
      if(!student){
        return res.status(404).json({ message: "Value is not updated. No such student is found "});
      }
      res.status(200).send("Student status is updated");
    }catch(error){
      console.log("Error: ", error);
      res.status(400).json({ error: error.message });
    }
  }catch (error){
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }



})

export const uploadInternshipReportFile = async (req, res) => {
  try {
    const { student_id } = req.params;
    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.internshipReport = req.file.filename;

    await student.save();

    res.status(200).json({ message: 'Internship report uploaded successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getStudentReportById = async (req, res) => {
  try {
    const { student_id } = req.params;

    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const reportFileName = student.internshipReport;

    if (!reportFileName) {
      return res.status(404).json({ message: 'Internship report not found' });
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const reportsDir = path.join(__dirname, '../Storage/Report');

    const reportPath = path.join(reportsDir, reportFileName);

    // Set the content type to display PDF in the browser
    res.contentType("application/pdf");

    // Send the file as a response
    res.sendFile(reportPath, { headers: { 'Content-Disposition': `inline; filename=${reportFileName}` } });

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};