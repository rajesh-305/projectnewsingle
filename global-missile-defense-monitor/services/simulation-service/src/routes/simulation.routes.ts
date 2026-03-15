import { Router } from 'express';
import { launchSimulation, getSimulationStatus } from '../controllers/simulation.controller';

const router = Router();

// Route to launch a missile simulation
router.post('/launch', launchSimulation);

// Route to get the status of a simulation
router.get('/status/:id', getSimulationStatus);

export default router;