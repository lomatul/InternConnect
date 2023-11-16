import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({

  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  guideline: {
    year: { type: Number },
    courseCode: { type: String },
    courseName: { type: String },
    shortDescription: { type: String },
    credit: { type: Number },
    committeeMembers: { type: [String] },
  }
  
});

export default mongoose.model('Admin', adminSchema);
