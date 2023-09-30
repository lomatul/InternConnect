import Student from '../models/student.model.js';
import jwt from 'jsonwebtoken';


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
  const {email, password} = req.body

  try {
    const student = await Student.login(email, password)

    // create a token
    const token = createToken(student._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}