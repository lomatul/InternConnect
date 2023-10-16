import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({

  student_id : {   type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true, unique: true },
  
  weeklyReport: {  type: String,  },
  
  internshipReport: {  type: String,  },
  
  timestamp: { type: Date,  default: Date.now,  },

});

export default mongoose.model('Report', reportSchema);
