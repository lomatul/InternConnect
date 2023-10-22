import Student from "../models/student.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import passport from "passport";
import otpgenerator from "otp-generator";
import sendPasswordResetEmail from "./forget.password.mailsender.js";import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';




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
    const student = await Student.findById(req.params.student_id);

    if (!student) {
      res.status(404).json({
        message: "Student not found!",
      });
      return;
    }

    res.status(200).json({
      message: "Student retrieved successfully!",
      student,
    });
  } catch (error) {
    next(error);
  }
};

// Update a student by student_id
export const updateStudentById = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.student_id,
      req.body,
      {
        new: true,
      }
    );

    if (!student) {
      res.status(404).json({
        message: "Student not found!",
      });
      return;
    }

    res.status(200).json({
      message: "Student updated successfully!",
      student,
    });
  } catch (error) {
    next(error);
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
  console.log("came in postlogin", req.body);

  passport.authenticate("local", (err, user, info) => {
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
export const sendOTPForPasswordReset = async (req, res, next) => {
  try {
    const { student_id } = req.body;

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
    next(error);
  }
};

// Function to verify the OTP and reset the password
export const resetPasswordWithOTP = async (req, res, next) => {
  try {
    const { student_id } = req.params; // Get the student ID from request parameters
    const { otp, newPassword } = req.body;

    // Check if the student with the provided student_id exists in your database
    const student = await Student.findOne({ student_id });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Check if the OTP exists, is valid, and hasn't expired
    if (!student.OTP || student.OTP.code !== otp) {
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
    console.log("it came here in uploadcv")
    const { student_id } = req.params;
    console.log(student_id)
    const student = await Student.findOne({ student_id: student_id });
  
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
  
    student.CV=req.file.filename;

    await student.save();
    // console.log("req", req)
    console.log("filename", req.file.filename)
    console.log("Filepath", req.file.path)
    res.status(200).json({message:"Uploaded"})
  }catch (error) {
    // next(error);
    res.status(400).json({error: error.message})
  }
  
}

//GetStudentCV
//Upload a file
export const getcvfile= async (req, res) =>{
  try{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const tempDir = path.join(__dirname, '../Storage/Cv');
    console.log("it came here in uploadcv")
    const { student_id } = req.params;
    console.log(student_id)
    const student = await Student.findOne({ student_id: student_id });
  
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const cvfile=student.CV;
    const cvPath = path.join(tempDir, cvfile);

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
    