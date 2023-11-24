import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({

  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },
  
  assignedStudents: [{ type: String,  unique: true }],

  position:{type:String}
});

export default mongoose.model('Mentor', mentorSchema);
