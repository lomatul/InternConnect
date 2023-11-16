import mongoose from 'mongoose';

const distributionSchema = new mongoose.Schema({

  phaseNumber: { type: Number },

  companyEmail: { type: String, ref: 'Company', required: true },
  
  selectedStudents: [{ type: String, ref: 'Student', }],
  
  rejectedStudents: [{ type: String, ref: 'Student', }],
  
  timestamp: { type: Date, default: Date.now },

});

export default mongoose.model('Distribution', distributionSchema);
