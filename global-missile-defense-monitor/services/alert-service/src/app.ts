import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import alertRoutes from './routes/alert.routes';

const app = express();
const PORT = process.env.PORT || 3004;

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/alert')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/alerts', alertRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Alert Service is running on port ${PORT}`);
});

export default app;