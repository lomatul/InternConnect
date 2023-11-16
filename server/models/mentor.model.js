import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({

  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },
  
  assignedStudents: [{ type: String, ref: 'Student', unique: true }],

});

export default mongoose.model('Mentor', mentorSchema);
