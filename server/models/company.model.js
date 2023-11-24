import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({

  name: { type: String, required: true },
  
  email: { type: String, required: true, unique: true  },

  historicalData: 
  [
    {
      year: { type: Number, required: true, unique: true, default: new Date().getFullYear() },

      address: { type: String },

      requiredDomain: [  {  domain: { type: String },   internsNeeded: { type: Number, default: 0 }  } ],     // Array of required domains

      internsHired: { type: Number, default: 0 },     // Default to 0

      contactNumber: { type: String },

      selectedInterns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'students' }],   // Array of selected interns (references to Student model)  The collection that's being referenced: students

    }
  ],
  
  minInterns: { type: Number, },
  requiredDomain: [  {  domain: { type: String },   internsNeeded: { type: Number, default: 0 }  } ],  
  selectedInterns: [{ type:String }],
  
  maxInterns: { type: Number, },
      
  status: { type: String },       // Status (Hiring or Closed etc)

  OTP: {type: String}

});


export default mongoose.model('Company', companySchema);