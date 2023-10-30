import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({

  name: { type: String, required: true },
  
  address: { type: String, },
  
  email: { type: String, required: true, },

  year: { type: String, required: true, },
  
  requiredDomain: [ {domain: { type: String }, internsNeeded: {type: Number, default: 0} } ],       // Array of required domains
  
  minInterns: { type: Number, },
  
  maxInterns: { type: Number, },
  
  internsHired: { type: Number, default: 0 },       // Default to 0
  
  contactNumber: { type: String },             
  
  selectedInterns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'students' }],   // Array of selected interns (references to Student model)  The collection that's being referenced: students
  
  status: { type: String },       // Status (Hiring or Closed etc)

});

companySchema.index({ email: 1, year: 1 }, { unique: true });     // Compound index in ascending order

export default mongoose.model('Company', companySchema);
