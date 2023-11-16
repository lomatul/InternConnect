import Grade from '../models/grade.model.js';


export const createGrade = async (req, res, next) => {
  try {
    const { student_id, presentationMarks, reportMarks, totalMarks, finalGrade } = req.body;

    const grade = new Grade({
      student_id,
      presentationMarks,
      reportMarks,
      totalMarks,
      finalGrade,
    });

    await grade.save();

    res.status(201).json({
      message: 'Grade created successfully!',
      grade,
    });
  } catch (error) {
    next(error);
  }
};


export const getAllGrades = async (req, res, next) => {
  try {
    const grades = await Grade.find();

    res.status(200).json({
      message: 'Grades retrieved successfully!',
      grades,
    });
  } catch (error) {
    next(error);
  }
};


export const getGradeByStudentId = async (req, res, next) => {
  try {
    const { student_id } = req.params;

    const grade = await Grade.findOne({ student_id });

    if (!grade) {
      res.status(404).json({
        message: 'Grade not found!',
      });
      return;
    }

    res.status(200).json({
      message: 'Grade retrieved successfully!',
      grade,
    });
  } catch (error) {
    next(error);
  }
};


export const updateGradeByStudentId = async (req, res, next) => {
  try {
    const { student_id } = req.params;

    const grade = await Grade.findOne({ student_id });

    if (!grade) {
      res.status(404).json({
        message: 'Grade not found!',
      });
      return;
    }

    grade.presentationMarks = req.body.presentationMarks;
    grade.reportMarks = req.body.reportMarks;
    grade.totalMarks = req.body.totalMarks;
    grade.finalGrade = req.body.finalGrade;

    await grade.save();

    res.status(200).json({
      message: 'Grade updated successfully!',
      grade,
    });
  } catch (error) {
    next(error);
  }
};


export const deleteGradeByStudentId = async (req, res, next) => {
  try {
    const { student_id } = req.params;

    const grade = await Grade.findOne({ student_id });

    if (!grade) {
      res.status(404).json({
        message: 'Grade not found!',
      });
      return;
    }

    await grade.remove();

    res.status(200).json({
      message: 'Grade deleted successfully!',
    });
  } catch (error) {
    next(error);
  }
};
