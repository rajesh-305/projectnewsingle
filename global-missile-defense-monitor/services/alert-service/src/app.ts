import express from 'express';
import bodyParser from 'body-parser';
import alertRoutes from './routes/alert.routes';

const app = express();
const PORT = process.env.PORT || 3000;

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