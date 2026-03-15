import { Router } from 'express';
import authRoutes from '../middleware/auth';
import simulationRoutes from '../../simulation-service/src/routes/simulation.routes';
import intelligenceRoutes from '../../intelligence-service/src/routes/intelligence.routes';
import alertRoutes from '../../alert-service/src/routes/alert.routes';
import notificationRoutes from '../../notification-service/src/routes/notification.routes';

const router = Router();

// Apply authentication middleware
router.use(authRoutes);

// Define routes for each microservice
router.use('/simulation', simulationRoutes);
router.use('/intelligence', intelligenceRoutes);
router.use('/alerts', alertRoutes);
router.use('/notifications', notificationRoutes);

export default router;