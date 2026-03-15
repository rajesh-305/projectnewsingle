import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index';

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// API Routes
app.use('/api', routes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});