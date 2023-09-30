import express from 'express';
import fs from 'fs';
import xlsx from 'xlsx';
import otpgenerator from 'otp-generator';
import Mailfunction from './mailsender.js';
import bcrypt from 'bcrypt';
import Student from '../models/student.model.js';



const ulpoadfiledata = async (req, res)=>{
    const fileBuffer = req.file.buffer
    const workbook = xlsx.read(fileBuffer); 
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    

    // res.status(200).send(data)
    console.log(data)

    const Studnetcreation = data.map(async element => {
        const otp=otpgenerator.generate(6, { upperCaseAlphabets: true, lowerCaseAlphabets: true, specialChars: false })
        console.log("name", element)
        console.log("OTP", otp)
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(otp, salt)
        try {
          const student = new Student({
            name: element.Name,
            student_id: element.Id,
            email: element.Email,
            password: hash,
            CGPA: element.CGPA,
            accountActivationStatus: false,
          });
      
          await student.save();
          console.log("Student created", student)
        } catch (error) {
          console.error(error);
          Promise.reject(error)
        }
        Mailfunction(element.Name, element.Email, otp)
    })

    try {
      await Promise.all(Studnetcreation);
  
      // Send the response only when all student records have been processed.
      res.status(200).json({
        message: 'Students created successfully!',
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

export { ulpoadfiledata };