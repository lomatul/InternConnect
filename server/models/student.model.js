import mongoose from "mongoose";

import bcrypt from 'bcrypt';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },

  student_id: { type: String, unique: true, required: true },

  email: { type: String, required: true },

  password: { type: String, required: true },

  CV: { type: String },

  companyPreferences: [{ type: String }],

  domainPreferences: [{ type: String }],

  CGPA: { type: Number },

  currentStatus: { type: String }, //  Selected, In Progress or Rejected

  companyStatus: { type: String }, //   Under which Company

  OTP: { type: String },

  accountActivationStatus: { type: Boolean }, // Account Activated or Deactivated

  submissionTimestampCV: { type: Date },

  weeklyBiWeeklyReport: { type: String },

  internshipReport: { type: String },

  presentationMarks: { type: Number },

  finalGrade: { type: String },

  createdAt: { type: Date, default: Date.now },

  updatedAt: { type: Date, default: Date.now },
});

// Static login method


export default mongoose.model("Student", studentSchema);
