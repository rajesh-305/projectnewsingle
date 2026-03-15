import { Router } from 'express';
import { createAlert, getAlerts, updateAlert, deleteAlert } from '../controllers/alert.controller';

const router = Router();

router.post('/alerts', createAlert);
router.get('/alerts', getAlerts);
router.put('/alerts/:id', updateAlert);
router.delete('/alerts/:id', deleteAlert);

export default router;