import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({

  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true, unique: true },

  presentationMarks: { type: Number },
  
  reportMarks: { type: Number },

  totalMarks: { type: Number },
  
  finalGrade: { type: String },

});

export default mongoose.model('Grade', gradeSchema);
