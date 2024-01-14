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
  },
  deadlines:[{
    topic:{type: String}, 
    time:{type:Date}
  }]
  
});

export default mongoose.model('Admin', adminSchema);
