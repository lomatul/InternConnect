import mongoose from 'mongoose';

const distributionSchema = new mongoose.Schema({

  phaseNumber: { type: Number },

  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  
  selectedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  
  rejectedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  
  timestamp: { type: Date, default: Date.now },

});

export default mongoose.model('Distribution', distributionSchema);
