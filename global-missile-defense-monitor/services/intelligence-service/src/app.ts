import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import intelligenceRoutes from './routes/intelligence.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/intelligence', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/intelligence', intelligenceRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Intelligence Service running on port ${PORT}`);
});