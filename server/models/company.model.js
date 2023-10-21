import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({

  companyID: { type: String, unique: true },

  name: { type: String, required: true },
  
  address: { type: String, },
  
  email: { type: String, required: true, unique: true },
  
  requiredDomain: [{ type: String }],       // Array of required domains
  
  minInterns: { type: Number, },
  
  maxInterns: { type: Number, },
  
  internsHired: { type: Number, default: 0 },       // Default to 0
  
  contactNumber: { type: String },             
  
  selectedInterns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'students' }],   // Array of selected interns (references to Student model)  The collection that's being referenced: students
  
  status: { type: String },       // Status (Hiring or Closed etc)

});


// Pre-saved middleware to generate companyID (Automatically Generated)
companySchema.pre('save', async function (next) {
  if (!this.isNew) {
    return next(); 
  }

  // Finding the highest existing companyID
  const highestCompany = await this.constructor.findOne({}, 'companyID').sort({ companyID: -1 }).exec();
  const highestID = highestCompany ? parseInt(highestCompany.companyID) : 0;

  // Setting the new companyID by incrementing the highest ID
  this.companyID = (highestID + 1).toString();
  next();
});

export default mongoose.model('Company', companySchema);
