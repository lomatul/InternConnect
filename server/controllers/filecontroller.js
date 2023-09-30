const express = require('express')
const fs=require('fs')
const xlsx = require('xlsx');
const otpgenerator= require('otp-generator')
const Mailfunction = require('./mailsender')
import Student from '../models/student.model.js';


const ulpoadfiledata = async (req, res)=>{
    const fileBuffer = req.file.buffer
    const workbook = xlsx.read(fileBuffer); 
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    

    res.status(200).send(data)

    data.forEach(async element => {
        const otp=otpgenerator.generate(6, { upperCaseAlphabets: true, lowerCaseAlphabets: true, specialChars: false })
        console.log("name", element.Name)
        console.log("OTP", otp)
        try {
          const student = new Student({
            name: element.name,
            student_id: element.student_id,
            email: element.email,
            password: otp,
            CGPA: element.CGPA,
            accountActivationStatus: false,
          });
      
          await student.save();
      
          res.status(201).json({
            message: 'Student created successfully!',
            student,
          });
        } catch (error) {
          next(error);
        }
        Mailfunction(element.Name, element.Email, otp)
    })
}

module.exports = {ulpoadfiledata}