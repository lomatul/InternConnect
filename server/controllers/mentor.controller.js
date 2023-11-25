import Mentor from '../models/mentor.model.js';
import Student from '../models/student.model.js';


export const createMentor = async (req, res, next) => {
  try {
    const { name, designation, email } = req.body;

    const mentor = new Mentor({
      name,
      designation,
      email,
    });

    await mentor.save();

    res.status(201).json({
      message: 'Mentor created successfully!',
      mentor,
    });
  } catch (error) {
    next(error);
  }
};


export const getAllMentors = async (req, res, next) => {
  try {
    const mentors = await Mentor.find();

    res.status(200).json({
      message: 'Mentors retrieved successfully!',
      mentors,
    });
  } catch (error) {
    next(error);
  }
};


export const getMentorByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;

    const mentor = await Mentor.findOne({ email });

    if (!mentor) {
      res.status(404).json({
        message: 'Mentor not found!',
      });
      return;
    }

    res.status(200).json({
      message: 'Mentor retrieved successfully!',
      mentor,
    });
  } catch (error) {
    next(error);
  }
};


export const updateMentorByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;

    const mentor = await Mentor.findOne({ email });

    if (!mentor) {
      res.status(404).json({
        message: 'Mentor not found!',
      });
      return;
    }

    mentor.name = req.body.name;
    mentor.designation = req.body.designation;
    mentor.assignedStudents = req.body.assignedStudents;        // req.body.assignedStudents has to be an array of student_id (s)

    await mentor.save();

    res.status(200).json({
      message: 'Mentor updated successfully!',
      mentor,
    });
  } catch (error) {
    next(error);
  }
};


export const deleteMentorByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;

    const mentor = await Mentor.findOne({ email });

    if (!mentor) {
      res.status(404).json({
        message: 'Mentor not found!',
      });
      return;
    }

    await mentor.remove();

    res.status(200).json({
      message: 'Mentor deleted successfully!',
    });
  } catch (error) {
    next(error);
  }
};
