import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import searchRoutes from './routes/searchRoutes.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'],        
    credentials: true
  }));
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/MSNClone')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', searchRoutes);

// Start server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});