import Admin from '../models/admin.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import passport from 'passport';
import Student from "../models/student.model.js";
import Mailfunction from "./custom.mailsender.js";
import {MatchStudentByCGPA, MatchStudentByAlgorithm } from './service.controller.js'
import sendCVsEmail from "./cv.mailsender.js";
import Company from '../models/company.model.js';

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
    const {text, sub} = req.body
    console.log(req.body)
    const students = await Student.find();
    students.map(async element =>{
      console.log(element)
      await Mailfunction(sub, element.email, text);
    })
    res.status(200).json({
      message: "Message sent successfully!",
    });
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
    if(type==1){
      returnedMAtches=await MatchStudentByAlgorithm(company, number);
      console.log("returnedMAtches",returnedMAtches[company])
      returnStudent=returnedMAtches[company].map((Element)=>{return Element.student});
    }else{
      returnedMAtches=await MatchStudentByCGPA(company, number);
      returnStudent=returnedMAtches[company];
    }
    


    console.log("in admin", returnedMAtches);
    console.log("in admin", returnStudent);
    res.status(200).json({returnStudent})
  }catch(error){
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
}


export const sendCvsToCompany = async (req, res) => {
  try {
    const { cvFileNames, companyName } = req.body;

    if (!cvFileNames || !companyName || cvFileNames.length === 0) {
      return res.status(400).json({ error: 'Please provide CV file names, company name, and ensure the array is not empty.' });
    }

    // Find the company based on the provided name
    const company = await Company.findOne({ name: companyName });

    if (!company) {
      return res.status(404).json({ error: 'Company not found.' });
    }

    // Get the company's email from the database
    const recipientEmail = company.email;

    // Send the CVs to the company email using the new function
    await sendCVsEmail(cvFileNames, recipientEmail);

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
