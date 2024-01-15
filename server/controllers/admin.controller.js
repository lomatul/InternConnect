import Admin from '../models/admin.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import passport from 'passport';
import Student from "../models/student.model.js";
import Mailfunction from "./mailsenders/custom.mailsender.js";
import {MatchStudentByCGPA, MatchStudentByAlgorithm } from './service.controller.js'
import sendCVsEmail from "./mailsenders/cv.mailsender.js";
import Company from '../models/company.model.js';
import Grade from '../models/grade.model.js';
import otpgenerator from 'otp-generator';
import xlsx from 'xlsx';

export const postlogin= (req, res, next) =>{

    // console.log("came in postlogin", req.body)
  
    
    
    passport.authenticate('admin', (err, user, info) => {
        if (err) {
          console.error('Authentication error:', err);
          return res.status(500).json({ error: 'Authentication error' });
        }
    
        if (!user) {
          console.log("it came in user")
          
          console.error('Authentication failed:', info.message);
          return res.status(401).json({ error: info.message });
        }
        user.password=undefined
        // user.role = 'admin';
        // console.log(user.role)
        // console.log(user)
        // Authentication succeeded
        req.logIn(user , (err) => {
          if(err){
            console.error(err)
            return res.status(500).json({ error: "Session is not set" });
          }
        }
        )
        res.status(200).json({ message: 'Logged In' , User:user}); //, role:"admin"},
      })(req, res, next);
    }
    
  export const logout = (req, res)=>{
    req.logout('admin',(err) => {
      if (err) {
        res.json({ error: err });
      } else res.status(200).json({message:"Logged out"});
    });
  }

export const register = async (req, res) => {
    const {Name, Email, password, Guideline} = req.body
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    try {
      const admin = new Admin({
        name: Name,
        email: Email,
        password: hash,
        guideline:Guideline 
        
      });
      
      await admin.save();
      console.log("admin created", admin)
      res.status(200).json({admin});
     } catch (error) {
      console.error(error);
      res.json({error: error.message});
       
    }
}

export const sendmailtoall = async (req, res) => {
  try {
    const {text, sub, type} = req.body
    console.log(req.body)
    if(type=="Student"){
      const students = await Student.find();
      students.map(async element =>{
      console.log(element)
      await Mailfunction(sub, element.email, text);
    })
    }else if(type=="Company"){
      const companies = await Company.find();
      companies.map(async element =>{
      console.log(element)
      await Mailfunction(sub, element.email, text);
    })
    }else{
      return res.status(404).json({ error: "Type is not given properly" });
    }
    res.status(200).json({message: "Message sent successfully!"});
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
}

export const sendmailtoindividual = async (req, res) => {
  try {
    const {text, sub, recipientEmail} = req.body
    console.log(req.body)
    await Mailfunction(sub, recipientEmail, text);
    res.status(200).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
}

export const getMatchedStudentForCompany = async (req, res) =>{
  try{
    const {company, number, type}=req.body;
    var returnedMAtches;
    var returnStudent;
    var returnStudentId=[];
    if(type==1){
      returnedMAtches=await MatchStudentByAlgorithm(company, number);
      returnStudent=returnedMAtches[company].map((Element)=>{return Element.student});
    }else{
      returnedMAtches=await MatchStudentByCGPA(company, number);
      returnStudent=returnedMAtches[company];
    }
    
    const getid = returnStudent.map(async element =>{
      console.log("element", element);
      const student=await Student.findById(element);
      console.log("student", student.student_id);
      return student
    })

    returnStudentId=await Promise.all(getid)

    console.log("returned StudentIds", returnStudentId);
    res.status(200).json({returnStudentId})
  }catch(error){
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
}


export const sendCvsToCompany = async (req, res) => {
  try {
    const { companyID, students } = req.body;

    if (!companyID || students.length === 0) {
      return res.status(400).json({ error: 'Please provide CV file names, company name, and ensure the array is not empty.' });
    }

    console.log("It came to here", companyID, students);
    var cvFileNames=[];
    const getallcvfiles=students.map(element => {
      return element.CV;
    });
    cvFileNames=await Promise.all(getallcvfiles);
    // Find the company based on the provided name
    const company = await Company.findById(companyID)

    if (!company) {
      return res.status(404).json({ error: 'Company not found.' });
    }

    // Get the company's email from the database
    const recipientEmail = company.email;

    // Send the CVs to the company email using the new function
    await sendCVsEmail(cvFileNames, recipientEmail);

    students.forEach(async element => {
      const student=await Student.findOne({ student_id: element.student_id });

      student.currentStatus="In Progress";
      student.companyStatus=companyID;
      await student.save();
    });

    res.status(200).json({
      message: "CVs sent to the company successfully!",
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
}


export const postGuideline = async (req, res) => {
  try {
    const { courseCode, courseName, shortDescription, credit, committeeMembers, year } = req.body;
    const admin = await Admin.findOne();

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    admin.guideline = {
      courseCode,
      courseName,
      shortDescription,
      credit,
      committeeMembers,
      year
    };

    await admin.save();

    res.status(200).json({
      message: 'Guideline updated successfully!',
    });
  } catch (error) {
    console.error('Error updating guideline:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const sendMentorsForm = async(req, res)=>{
  try{
    const companies = await Company.find();
    companies.map(async element =>{
      const otp=otpgenerator.generate(6, { upperCaseAlphabets: true, lowerCaseAlphabets: true, specialChars: false })
      console.log(element);
      element.OTP=otp;
      const sub = "Mentor Addition Form"
      const text=`<p>Dear HR of ${element.name},</p><p>Please click the following link to insert 'Mentors' for student sent for intern in your company. While submitting, please use the given OTP. Your OTP is '${otp}'</p><a href="http://localhost:3000/AddMentor/${element._id}">AddMentorForm</a>`;
      await Mailfunction(sub, element.email, text);
      await element.save();
    })
    res.status(200).json({message:"Email works"})

  }catch (error){
    console.log("Error: ", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export const postReportMarks = async (req, res) => {
  try {
    const { student_id } = req.params;
    const { reportMarks } = req.body;

    let grade = await Grade.findOne({ student_id });

    if (!grade) {
      grade = new Grade({ student_id });
    }

    grade.reportMarks = reportMarks;

    await grade.save();

    res.status(200).json({ message: 'Report marks posted successfully!', grade });
  } catch (error) {
    console.error('Error posting report marks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const postCvdeadline = async( req, res) => {
  try{
    const {time} = req.body;

    const admin = await Admin.findOne();

    const deadline= admin.deadlines.find((el)=> {return el.topic==="cv"})

    if(deadline){
      deadline.time=time
      await admin.save();
    }else{
      const newdeadline = {
        topic : "cv",
        time : time
      }

      admin.deadlines.push(newdeadline);
      await admin.save();
    }

    const student = await Student.find();
    var showtime = new Date(time).toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
    
    const promise = student.map(async(element)=>{
      const sub="New Deadline is Published for Cv"
      const text=`<p>Dear ${element.name}, New Deadline is posted submitting Cv. New Deadline is: ${showtime}</p>`;
      await Mailfunction(sub, element.email, text);
    })

    await Promise.all(promise);


    return res.status(200).json({message:"new deadline is set."})


  }catch (error){
    console.log("Error: ", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export const getCvdeadline = async( req, res) => {
  try{

    const admin = await Admin.findOne();

    const deadline= admin.deadlines.find((el)=> {return el.topic==="cv"})

    if(!deadline){
      return res.status(400).json({error:"Deadline not found."});
    }


    return res.status(200).json({Deadline:deadline.time});


  }catch (error){
    console.log("Error: ", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const GradeGenerate = async(mentorpart, reportpart, presentationpart) =>{
  const students = await Student.find();
try{const promise = students.map(async(student)=>{
  const totalmark=((student.evaluatedMentorMarks || 0)/60)*mentorpart+((student.internshipReportMarks|| 0)/100)*reportpart+((student.presentationMarks || 0)/100)*presentationpart
  console.log("total mark", totalmark)
  var grade;

  if (totalmark >= 80) {
    grade = 'A+';
  } else if (totalmark >= 75) {
    grade = 'A';
  } else if (totalmark >= 70) {
    grade = 'A-';
  } else if (totalmark >= 65) {
    grade = 'B+';
  } else if (totalmark >= 60) {
    grade = 'B';
  } else if (totalmark >= 55) {
    grade = 'B-';
  } else if (totalmark >= 50) {
    grade = 'C+';
  } else if (totalmark >= 45) {
    grade = 'C';
  } else if (totalmark >= 40) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  student.finalGrade=grade;
  await student.save();
})

await Promise.all(promise);
}catch (error){
  console.log("Error: ", error);
  res.status(500).json({ error: 'Internal Server Error' });
}
  
}


export const getGradeExcel = async(req, res) => {
  try {
    const {mentorpart, reportpart, presentationpart} = req.body;
    await GradeGenerate(mentorpart, reportpart, presentationpart);
    const students = await Student.find();

    const simplifiedData = students.map(student => ({
      name: student.name,
      student_id: student.student_id,
      CGPA: student.CGPA,
      FinalGrade:student.finalGrade
    }));

    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(simplifiedData);

    xlsx.utils.book_append_sheet(workbook, worksheet, 'Grade Report');


    const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', bookSST: false, type: 'binary' });


    const buffer = Buffer.from(excelBuffer, 'binary');


    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=Grade_Report.xlsx');

    res.end(buffer);

  } catch (error) {
    console.error('Error exporting CGPA:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const postReportdeadline = async( req, res) => {
  try{
    const {time} = req.body;

    const admin = await Admin.findOne();

    const deadline= admin.deadlines.find((el)=> {return el.topic==="report"})

    if(deadline){
      deadline.time=time
      await admin.save();
    }else{
      const newdeadline = {
        topic : "report",
        time : time
      }

      admin.deadlines.push(newdeadline);
      await admin.save();
    }

    const student = await Student.find();
    var showtime = new Date(time).toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
    
    const promise = student.map(async(element)=>{
      const sub="New Deadline is Published for Report"
      const text=`<p>Dear ${element.name}, New Deadline is posted submitting Report. New Deadline is: ${showtime}</p>`;
      await Mailfunction(sub, element.email, text);
    })

    await Promise.all(promise);

    return res.status(200).json({message:"new deadline is set."})


  }catch (error){
    console.log("Error: ", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export const getReportdeadline = async( req, res) => {
  try{

    const admin = await Admin.findOne();

    const deadline= admin.deadlines.find((el)=> {return el.topic==="report"})

    if(!deadline){
      return res.status(400).json({error:"Deadline not found."});
    }


    return res.status(200).json({Deadline:deadline.time});


  }catch (error){
    console.log("Error: ", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export const postMarks = async (req, res) => {
  try {
    const { student_id } = req.params;
    const { presentationMarks, internshipReportMarks } = req.body;

    // Find the student based on the provided student_id
    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ error: 'Student not found.' });
    }

    // Update the presentationMarks and internshipReportMarks
    student.presentationMarks = presentationMarks;
    student.internshipReportMarks = internshipReportMarks;

    // Save the updated student
    await student.save();

    res.status(200).json({
      message: 'Marks updated successfully!',
      student: {
        name: student.name,
        student_id: student.student_id,
        presentationMarks: student.presentationMarks,
        internshipReportMarks: student.internshipReportMarks,
      },
    });
  } catch (error) {
    console.error('Error updating marks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

