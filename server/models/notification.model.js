import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({

  recipient: { type: mongoose.Schema.Types.ObjectId, refPath: 'recipientModel',  required: true,   },       // Dealing with ObjectIDs

  recipientModel: { type: String,  enum: ['Student', 'Company'],  required: true,  },

  subject: { type: String, required: true },

  timestamp: { type: Date, default: Date.now },

  message: { type: String, required: true },
  
});

export default mongoose.model('Notification', notificationSchema);
