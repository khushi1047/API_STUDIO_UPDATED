import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import requestRoutes from './routes/requestRoutes.js';
import codeRoutes from './routes/codeRoutes.js';
import cors from 'cors';
import expressRoute from './routes/expressRoute.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors()); // allow frontend requests

const port = process.env.PORT || 5000;

// mongo atlas connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('mongodb atlas connected'))
.catch(err => console.error('mongodb connection error:', err));

// routes
app.use('/api/request', requestRoutes);
app.use('/api/code', codeRoutes);
app.use('/api/express', expressRoute);

// optional: get all logs
import executionLog from './models/executionLog.js';
app.get('/api/logs', async (req, res) => {
  try {
    const logs = await executionLog.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`server running on port ${port}`));
