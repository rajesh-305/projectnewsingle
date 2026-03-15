import express from 'express';
import bodyParser from 'body-parser';
import simulationRoutes from './routes/simulation.routes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/simulation', simulationRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Simulation Service is running on port ${PORT}`);
});

export default app;