import { Router } from 'express';
import { getAllThreats, getThreatById, createThreat, updateThreat, deleteThreat } from '../controllers/intelligence.controller';

const router = Router();

// Route to get all threats
router.get('/threats', getAllThreats);

// Route to get a specific threat by ID
router.get('/threats/:id', getThreatById);

// Route to create a new threat
router.post('/threats', createThreat);

// Route to update an existing threat
router.put('/threats/:id', updateThreat);

// Route to delete a threat
router.delete('/threats/:id', deleteThreat);

export default router;