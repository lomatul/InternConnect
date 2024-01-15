import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({

  name: { type: String, required: true },

  designation: { type: String},

  email: { type: String, required: true, unique: true },
  
  assignedStudents: [{ 
    student_id: {type: String},
    evaluation: {type: Number},
  }],

  position:{type:String},
  
  response :[{
    student_id :{type:String},
    assesment:{type:Object}
  }]
});

export default mongoose.model('Mentor', mentorSchema);
