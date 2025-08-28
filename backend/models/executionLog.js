import mongoose from 'mongoose';

const executionLogSchema = new mongoose.Schema({
  type: { type: String, required: true }, // "http" or "code"
  input: { type: Object, required: true },
  output: { type: Object, required: true },
  status: { type: String, required: true }, // "success" or "error"
  responseTime: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('executionlog', executionLogSchema);
