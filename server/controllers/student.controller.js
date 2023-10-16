import Student from '../models/student.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


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
      message: 'Student created successfully!',
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
      message: 'Students retrieved successfully!',
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
        message: 'Student not found!',
      });
      return;
    }

    res.status(200).json({
      message: 'Student retrieved successfully!',
      student,
    });
  } catch (error) {
    next(error);
  }
};

// Update a student by student_id
export const updateStudentById = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.student_id, req.body, {
      new: true,
    });

    if (!student) {
      res.status(404).json({
        message: 'Student not found!',
      });
      return;
    }

    res.status(200).json({
      message: 'Student updated successfully!',
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
        message: 'Student not found!',
      });
      return;
    }

    res.status(200).json({
      message: 'Student deleted successfully!',
    });
  } catch (error) {
    next(error);
  }
};


// Creating JSON Web Token
const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}


// Student Login
export const loginStudent = async (req, res) => {
  const {student_id, password} = req.body


  try {

    if (!student_id || !password) {
      throw new Error("All fields must be filled");
    }
  
    const student = await Student.findOne({ student_id })
    if (!student) {
      throw new Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, student.password)
    if (!match) {
      throw new Error('Incorrect password')
    }


    if(!student.accountActivationStatus){
      
      res.status(308).json({message:"Please update Your Password to activate your Account", redirectUrl:'/Updatepassword', id: student_id})
    }else{
      // create a token
      const token = createToken(student._id)
      res.status(200).json({student_id, token}) 
    }

    
  } catch (error) {
    console.log("Error: ", error)
    res.status(400).json({error: error.message})
  }
}


// Update a student's password by student_id
export const updatePasswordById = async (req, res, next) => {
  try {
    const { student_id } = req.params;
    const { currentPassword, newPassword } = req.body;


    const student = await Student.findOne({ student_id: student_id });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Check if the current password matches
    const passwordMatch = await bcrypt.compare(currentPassword, student.password);

  

    if (!passwordMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Update the password with the new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);
    student.password = hashedNewPassword;
    student.accountActivationStatus=true;

    // Save the updated student with the new password
    await student.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    // next(error);
    res.status(400).json({error: error.message})
  }
};