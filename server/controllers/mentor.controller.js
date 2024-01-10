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

    if (!mentors || mentors.length === 0) {
      return res.status(404).json({ message: 'No mentors found.' });
    }

    res.status(200).json(mentors);

  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
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


export const AddAssesment = async (req, res) => {
  try{
    const {Answer, mentorid, StudentId, sum} = req.body;

    const mentor = await Mentor.findById(mentorid);

    console.log("Answer, mentorid, StudentIdD, sum: ", Answer, mentorid, StudentId, sum);

    const existassment = mentor.response.find((element)=>{element.student_id==StudentId});

    if(existassment){
      res.status(400).json({error:"This Student is already evaluated"});
    }

    const newAssesment = {
      student_id: StudentId,
      assesment: Answer
    };

    mentor.response.push(newAssesment);

    const assignedStudentIndex = mentor.assignedStudents.findIndex((element) => element.student_id == StudentId);
    
    if (assignedStudentIndex !== -1) {
      mentor.assignedStudents[assignedStudentIndex].evaluation = sum;
    } else {
      mentor.assignedStudents.push({
        student_id: StudentId,
        evaluation: sum,
      });
    }

    await mentor.save();

    return res.status(200).json({message:"Assesment is also stored."})
  }catch (error){
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }

}


export const UpdateAssesment = async (req, res) => {
  try{
    const {Answer, mentorid, StudentId} = req.body;

    const mentor = await Mentor.findById(mentorid);

    const existassment = mentor.response.find((element)=>{element.student_id==StudentId});

    existassment.assesment=Answer;
    await mentor.save();

    return res.status(200).json({message:"Assesment Updated."})
  }catch (error){
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
}


export const getAssesment = async (req, res) => {
  try{
    const { mentorid, StudentId} = req.params;

    console.log("mentorid, StudentId",  mentorid, StudentId);

    const mentor = await Mentor.findById(mentorid);

    const existassment = mentor.response.find((element)=>{console.log(element.student_id); return element.student_id === StudentId});

    console.log("existassment", existassment);

    if(!existassment){
      return res.status(400).json({error:"Assesment not found."});
    }
    return res.status(200).json({assesment:existassment})
  }catch (error){
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }

}


export const getmentor = async (req, res) => {
  try{
    const { mentorid} = req.params;

    const mentor = await Mentor.findById(mentorid);

    if(!mentor){
      res.status(400).json({error:"Mentor not found"});
    }
    return res.status(200).json({Mentor:mentor})
  }catch (error){
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }

}
