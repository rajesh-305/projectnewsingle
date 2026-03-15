import { Router } from 'express';
import { sendNotification, getNotifications } from '../controllers/notification.controller';

const router = Router();

// Route to send a notification
router.post('/send', sendNotification);

// Route to get all notifications
router.get('/', getNotifications);

export default router;