import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({

  name: { type: String, required: true },

  email: { type: String, required: true },
  
  assignedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],

});

export default mongoose.model('Mentor', mentorSchema);
