import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import notificationRoutes from './routes/notification.routes';

const app = express();
const PORT = process.env.PORT || 3005;

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/notification')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/notifications', notificationRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Notification Service is running on port ${PORT}`);
});

export default app;