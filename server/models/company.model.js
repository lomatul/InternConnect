import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({

  companyID: { type: String, required: true, unique: true },

  name: { type: String, required: true },
  
  address: { type: String, },
  
  email: { type: String, required: true, unique: true },
  
  requiredDomain: [{ type: String }],       // Array of required domains
  
  minInterns: { type: Number, },
  
  maxInterns: { type: Number, },
  
  internsHired: { type: Number, default: 0 },       // Default to 0
  
  contactNumber: { type: String },             
  
  selectedInterns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'students' }],   // Array of selected interns (references to Student model)  The collection that's being referenced: students
  
  status: { type: String, enum: ['Hiring', 'Closed'],  },       // Status (Hiring or Closed etc)

});

export default mongoose.model('Company', companySchema);
